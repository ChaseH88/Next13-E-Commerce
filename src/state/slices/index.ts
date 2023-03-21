import { combineReducers } from "@reduxjs/toolkit";
import { authSlice, authApi } from "./auth";
import { productSlice, productApi } from "./product";
import { searchSlice } from "./search";

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  [authApi.reducerPath]: authApi.reducer,
  product: productSlice.reducer,
  [productApi.reducerPath]: productApi.reducer,
  search: searchSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
