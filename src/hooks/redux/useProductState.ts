import { useSelector } from "react-redux";
import { RootState } from "state";
import {
  ProductState,
  useGetProductFeedQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation,
} from "state/slices/product";

export const useProductState = () => ({
  state: useSelector<RootState, ProductState>(
    (state) => state.product
  ) as ProductState,
  useGetProductFeedQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation,
});
