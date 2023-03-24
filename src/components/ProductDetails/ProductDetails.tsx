import React, { useEffect, useMemo, useState } from "react";
import { Box, Button, Icon, Select, Typography } from "components";
import {
  ProductInterface,
  ImageInterface,
  VariantInterface,
} from "types/interfaces";
import styled, { useTheme } from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { formatCurrency } from "utils/format-currency";
import { useProductState } from "hooks/redux/useProductState";
import { handleLoading } from "utils/handle-loading";
import { useAuthState } from "hooks/redux/useAuthState";

const ProductDetailsStyled = styled(Box)``;

const ScrollButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5em;
`;

interface ProductDetailsProps {
  product: ProductInterface;
}

export const ProductDetails = ({
  product: {
    name,
    description,
    price,
    variants,
    isHighlighted,
    isAvailable,
    fit,
    gender,
    images,
    reviews,
    _id,
  },
}: ProductDetailsProps) => {
  const [highlightedImage, setHighlightedImage] = useState<ImageInterface>();
  const [selectedVariant, setSelectedVariant] =
    useState<VariantInterface | null>(null);
  const [imageScrollDistance] = useState(0);
  const controls = useAnimation();
  const theme = useTheme();
  const maxImageHeight = useMemo(() => images.length * 100, [images.length]);
  const selectVariantOptions = useMemo(
    () =>
      variants.map((variant) => ({
        value: variant._id!,
        label: variant.name,
      })),
    [variants]
  );
  const reviewCount = reviews?.length || 0;
  const averageRating = useMemo(() => {
    if (!reviews?.length) return 0;
    return (
      reviews?.reduce((acc, review) => acc + review.rating, 0) / reviewCount ||
      0
    );
  }, [reviews, reviewCount]);

  const {
    actions: { setUpdateCartAction },
  } = useAuthState();
  const { useAddToCartMutation } = useProductState();
  const [addToCart, { isLoading: addToCartLoading }] = useAddToCartMutation();
  const isLoading = handleLoading(addToCartLoading);

  useEffect(() => {
    setSelectedVariant(variants[0]);
  }, []);

  useEffect(() => {
    setHighlightedImage(images[0]);
  }, [images]);

  const handleImageClick = (image: ImageInterface) => {
    setHighlightedImage(image);
  };

  const handleVariantChange = (variantId: string) => {
    const variant = variants.find((variant) => variant._id === variantId);
    if (variant) {
      setSelectedVariant(variant);
    }
  };

  const handleAddToCart = async () => {
    const res = await addToCart({
      productId: _id!,
      variantId: selectedVariant!._id!,
      quantity: 1,
    });
    setUpdateCartAction((res as any).data.data);
  };

  const scrollImages = (direction: "up" | "down") => {
    if (
      (direction === "up" && imageScrollDistance === 0) ||
      (direction === "down" && imageScrollDistance === maxImageHeight)
    ) {
      return;
    }
    controls.start({
      y:
        direction === "down"
          ? imageScrollDistance - 100
          : imageScrollDistance + 100,
      transition: { duration: 0.3 },
    });
  };

  return (
    <ProductDetailsStyled
      display="flex"
      gap="1em"
      flexWrap="wrap"
      alignItems="center"
    >
      <Box className="images" flex="0 0 100px" position="relative">
        <ScrollButton onClick={() => scrollImages("up")}>&#x25B2;</ScrollButton>
        <motion.div
          className="image-list"
          animate={controls}
          style={{ overflow: "hidden", height: "300px", position: "relative" }}
        >
          {images.map((image) => (
            <img
              key={image._id}
              src={image.path}
              alt={image.alt}
              onClick={() => handleImageClick(image)}
              style={{ cursor: "pointer", objectFit: "cover", width: "100%" }}
            />
          ))}
        </motion.div>
        <ScrollButton onClick={() => scrollImages("down")}>
          &#x25BC;
        </ScrollButton>
      </Box>
      <Box className="highlight-photo" flex="1 1 20%" height="100%">
        {highlightedImage && (
          <img
            src={highlightedImage.path}
            alt={highlightedImage.alt}
            style={{ objectFit: "cover", width: "100%", maxHeight: "25em" }}
          />
        )}
      </Box>
      <Box className="details" flex="1 1 70%">
        <Box className="title">
          <Typography variant="h1">{name}</Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Average Rating {averageRating} / 5
          </Typography>
        </Box>
        <Box className="description">
          <Typography variant="subtitle1">{description}</Typography>
        </Box>
        <Box
          className="price"
          display="flex"
          alignItems="center"
          gap={theme.spacing[6]}
        >
          <Select
            options={selectVariantOptions}
            value={selectedVariant?._id || ""}
            onChange={(val) => handleVariantChange(val as string)}
          />
          <Typography variant="subtitle1" fontSize="1.25em" weight="bold">
            {formatCurrency(
              selectedVariant?.price
                ? selectedVariant!.price.value
                : price.value
            )}
          </Typography>
        </Box>
        <Box
          className="actions"
          display="flex"
          alignItems="center"
          gap={"1em"}
          margin={"1em 0 0 0"}
        >
          <Button
            variant="contained"
            color="primary"
            disabled={isLoading}
            onClick={handleAddToCart}
          >
            <Typography variant="subtitle2">Add to cart</Typography>
            <Icon name="FaPlus" />
          </Button>
          <Button variant="outlined" color="primary">
            <Typography variant="subtitle2">Favorite</Typography>
            <Icon name="FaPlus" />
          </Button>
        </Box>
      </Box>
      <Box className="reviews" flex="1 1 100%">
        <Box className="review-title">
          <Typography variant="h4">
            {reviews?.length
              ? `${reviews.length} reviews`
              : "Be the first to leave a review!"}
          </Typography>
        </Box>
        <Box className="review-list">
          {reviews?.map((review) => (
            <Box
              className="review"
              key={review._id}
              style={{
                borderBottom: `1px solid ${theme.colors.palette.white[300]}`,
                paddingBottom: theme.spacing[6],
                marginBottom: theme.spacing[6],
              }}
            >
              <Box className="review-header">
                <Typography variant="h6">{review.title}</Typography>
                <Typography variant="subtitle2">
                  Rating {review.rating} / 5
                </Typography>
              </Box>
              <Box className="review-body">
                <Typography variant="body1">{review.body}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </ProductDetailsStyled>
  );
};
