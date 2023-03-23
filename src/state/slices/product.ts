import { createApi } from "@reduxjs/toolkit/query/react";
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { CartItemInterface, ProductInterface } from "types/interfaces";
import { Response } from "types/types";
import axiosBaseQuery from "state/services/axiosBaseQuery";

export interface ProductState {
  products: ProductInterface[];
  currentPageProduct: ProductInterface | null;
}

export const productApi = createApi({
  reducerPath: "productApi",
  tagTypes: ["Products"],
  baseQuery: axiosBaseQuery({
    transformResponse: (response) => response,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getProductFeed: builder.query<Response<ProductInterface[]>, void>({
      query: () => ({
        url: "/product/get?page=1&pageSize=20",
        method: "GET",
      }),
      transformResponse: (response: Response<ProductInterface[]>) => {
        return response;
      },
    }),
    getProductBySlug: builder.query<
      Response<ProductInterface>,
      { slug: string }
    >({
      query: (params) => ({
        url: `/product/get-by-slug?slug=${params.slug}`,
        method: "GET",
      }),
      transformResponse: (response: Response<ProductInterface>) => {
        return response;
      },
    }),
    addToCart: builder.mutation<
      Response<CartItemInterface[]>,
      { productId: string; variantId: string; quantity: number }
    >({
      query: (params) => ({
        url: "/shopping-cart/add-current-user",
        method: "PUT",
        body: params,
      }),
      invalidatesTags: [{ type: "Products", id: "current" }],
      transformResponse: (response: Response<CartItemInterface[]>) => {
        return response;
      },
    }),
    removeFromCart: builder.mutation<
      Response<CartItemInterface[]>,
      { variantId: string; quantity: number }
    >({
      query: (params) => ({
        url: "/shopping-cart/remove-current-user",
        method: "PUT",
        body: params,
      }),
      invalidatesTags: [{ type: "Products", id: "current" }],
      transformResponse: (response: Response<CartItemInterface[]>) => {
        return response;
      },
    }),
  }),
});

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    currentPageProduct: null,
  } as ProductState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        productApi.endpoints.getProductFeed.matchFulfilled,
        (state, { payload }) => {
          state.products = payload.data || [];
        }
      )
      .addMatcher(
        productApi.endpoints.getProductBySlug.matchFulfilled,
        (state, { payload }) => {
          state.currentPageProduct = payload.data || null;
        }
      )
      .addMatcher(
        productApi.endpoints.addToCart.matchFulfilled,
        (state, { payload }) => {}
      )
      .addMatcher(
        productApi.endpoints.removeFromCart.matchFulfilled,
        (state, { payload }) => {}
      )
      .addDefaultCase((state, action) => {
        if (action.type === HYDRATE) {
          const incoming = action.payload.product;
          if (incoming) return { ...state, ...incoming };
        }
        return state;
      });
  },
});

export const {
  useGetProductFeedQuery,
  useGetProductBySlugQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  util: { getRunningQueriesThunk: productGetRunningQueriesThunk },
} = productApi;

export default productSlice.reducer;
