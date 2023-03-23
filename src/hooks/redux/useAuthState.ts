import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "state";
import {
  AuthState,
  useLoginMutation,
  useLogoutMutation,
  useGetCurrentUserQuery,
  useGetUserByIdQuery,
  updateCart,
} from "state/slices/auth";
import { CartItemInterface } from "types/interfaces";

export const useAuthState = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.auth) as AuthState;

  const setUpdateCartAction = useCallback((cart: CartItemInterface) => {
    dispatch(updateCart(cart));
  }, []);

  return {
    state,
    useLoginMutation,
    useLogoutMutation,
    useGetCurrentUserQuery,
    useGetUserByIdQuery,
    actions: {
      setUpdateCartAction,
    },
  };
};
