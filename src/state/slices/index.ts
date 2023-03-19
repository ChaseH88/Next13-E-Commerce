import { combineReducers } from "@reduxjs/toolkit";
import { authSlice, authApi } from "./auth";
import { searchSlice } from "./search";

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  [authApi.reducerPath]: authApi.reducer,
  search: searchSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
