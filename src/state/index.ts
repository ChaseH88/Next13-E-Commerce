import { MakeStore, Context, createWrapper } from "next-redux-wrapper";
import { configureStore, Middleware } from "@reduxjs/toolkit";
import rootReducer from "./slices";
import { authApi } from "./slices/auth";
import { productApi } from "./slices/product";
import { getCookies } from "cookies-next";

const makeStore: MakeStore<any> = (ctx: Context) => {
  const token = getCookies({ req: (ctx as any)?.req }).token;
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      const middleware: Middleware[] = [
        authApi.middleware,
        productApi.middleware,
      ];
      return getDefaultMiddleware({
        serializableCheck: false,
        thunk: {
          extraArgument: ctx,
        },
      }).concat(middleware);
    },
  });

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: false });
