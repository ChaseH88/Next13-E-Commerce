import {
  CartItemInterface,
  ProductInterface,
  VariantInterface,
} from "types/interfaces";
import { Box, Button, Icon, Typography } from "components";
import { formatCurrency } from "utils/format-currency";
import { useTheme } from "styled-components";
import { CartDropdownStyled } from "./styles";
import { useMemo } from "react";
import { useProductState } from "hooks/redux/useProductState";
import { useAuthState } from "hooks/redux/useAuthState";

interface CartInterface
  extends Omit<CartItemInterface, "productId" | "variantId"> {
  productId: ProductInterface;
  variantId: VariantInterface;
}

interface CartDropdownProps {
  items: CartInterface[];
}

const CartDropdown = ({ items }: CartDropdownProps) => {
  const theme = useTheme();
  const {
    actions: { setUpdateCartAction },
  } = useAuthState();
  const { useAddToCartMutation } = useProductState();
  const [addToCart, { isLoading, data }] = useAddToCartMutation();

  const total = useMemo(() => {
    return items?.reduce((acc, item) => {
      const price = item.productId.price.value * item.quantity;
      return acc + price;
    }, 0);
  }, [items]);

  const handleAddToCart = async (item: CartInterface) => {
    const res = await addToCart({
      productId: item.productId._id!,
      variantId: item.variantId._id!,
      quantity: 1,
    });
    setUpdateCartAction((res as any).data.data);
  };

  if (!items?.length) return <Box>cart is empty</Box>;

  return (
    <CartDropdownStyled className="cart-wrapper">
      {items.map((item) => (
        <Box
          className="item"
          key={`${item.productId._id}-${item.variantId._id}`}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap={theme.spacing[2]}
        >
          <Box className="image">
            <img
              src={item.productId.images[0].path}
              alt={item.productId.name}
            />
          </Box>
          <Box className="name" flex="1 1 auto">
            <Typography variant="subtitle1">{item.productId.name}</Typography>
          </Box>
          <Box className="quantity">
            <Typography variant="subtitle1">x{item.quantity}</Typography>
          </Box>
          <Box className="price">
            <Typography variant="subtitle1">
              {formatCurrency(item.productId.price.value)}
            </Typography>
          </Box>
          <Box
            className="controls"
            flex="0 0 50px"
            display="flex"
            justifyContent="flex-end"
          >
            <Button
              variant="no-outline-icon"
              disabled={isLoading}
              onClick={async () => {
                await handleAddToCart(item);
              }}
            >
              <Icon name="FaPlus" />
            </Button>
          </Box>
        </Box>
      ))}
      <Box className="item total" gap={theme.spacing[2]}>
        <Box
          className="name"
          flex="1 1 auto"
          display="flex"
          justifyContent="flex-end"
          margin="0 1em 0 0"
        >
          <Typography variant="h6">Total: {formatCurrency(total)}</Typography>
        </Box>
      </Box>
    </CartDropdownStyled>
  );
};

export { CartDropdown };
