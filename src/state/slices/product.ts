import { createApi } from "@reduxjs/toolkit/query/react";
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { ProductInterface } from "types/interfaces";
import { Response } from "types/types";
import axiosBaseQuery from "state/services/axiosBaseQuery";

export interface ProductState {
  products: ProductInterface[];
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
    getProductFeed: builder.mutation<Response<ProductInterface[]>, void>({
      query: () => ({
        url: "/product/get?page=1&pageSize=20",
        method: "GET",
      }),
      invalidatesTags: [{ type: "Products", id: "current" }],
      transformResponse: (response: Response<ProductInterface[]>) => {
        return response;
      },
    }),
  }),
});

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
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
      .addDefaultCase((state, action) => {
        if (action.type === HYDRATE) {
          const incoming = action.payload.product;
          if (incoming) return { ...state, ...incoming };
        }
      });
  },
});

export const {
  useGetProductFeedMutation,
  util: { getRunningQueriesThunk: productGetRunningQueriesThunk },
} = productApi;

export default productSlice.reducer;
