import { MakeStore, Context, createWrapper } from "next-redux-wrapper";
import { configureStore, Middleware } from "@reduxjs/toolkit";
import rootReducer from "./slices";
import { authApi } from "./slices/auth";
import { productApi } from "./slices/product";

const makeStore: MakeStore<any> = (ctx: Context) => {
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

export type RootState = ReturnType<typeof makeStore>;

export const wrapper = createWrapper(makeStore, { debug: false });
