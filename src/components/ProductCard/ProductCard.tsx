import { ProductInterface } from "types/interfaces";
import { Box, Button, Icon, Slider, Typography } from "components";

import styled, { useTheme } from "styled-components";
import { formatCurrency } from "utils/format-currency";

export const ProductCardStyled = styled(Box)`
  .photo {
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

interface ProductCardProps {
  product: ProductInterface;
}

const ProductCard = ({
  product: { name, images, price },
}: ProductCardProps) => {
  const theme = useTheme();
  return (
    <ProductCardStyled display="flex" flex="1 1 auto" flexDirection="column">
      <Box className="photo">
        <Slider images={images.map((image) => image.path)} />
      </Box>
      <Box
        className="details"
        style={{ textAlign: "center" }}
        background={theme.colors.palette.white[100]}
        padding={theme.spacing[2]}
      >
        <Box className="title">
          <Typography variant="h5">{name}</Typography>
        </Box>
        <Box className="price">
          <Typography variant="subtitle2" fontSize="1.2em">
            {formatCurrency(price.value)}
          </Typography>
        </Box>
      </Box>
    </ProductCardStyled>
  );
};

export { ProductCard };
