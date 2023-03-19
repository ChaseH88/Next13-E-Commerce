import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "state";
import {
  AuthState,
  useLoginMutation,
  useLogoutMutation,
  useGetCurrentUserQuery,
  useGetUserByIdQuery,
} from "state/slices/auth";

export const useAuthState = () => ({
  state: useSelector<RootState, AuthState>((state) => state.auth),
  useLoginMutation,
  useLogoutMutation,
  useGetCurrentUserQuery,
  useGetUserByIdQuery,
});
