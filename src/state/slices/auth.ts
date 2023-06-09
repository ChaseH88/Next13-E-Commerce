import { createApi } from "@reduxjs/toolkit/query/react";
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { UserInterface } from "types/interfaces";
import { Response } from "types/types";
import axiosBaseQuery from "state/services/axiosBaseQuery";

export interface AuthState {
  user: UserInterface | null;
  loggedIn: boolean;
}

export const authApi = createApi({
  reducerPath: "authApi",
  tagTypes: ["User"],
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    me: builder.query<UserInterface, void>({
      query: () => "/user/me",
      providesTags: [{ type: "User", id: "current" }],
    }),
    login: builder.mutation<
      Response<UserInterface>,
      { email: string; password: string }
    >({
      query: (params) => ({
        url: "/user/login",
        method: "POST",
        body: params,
      }),
      invalidatesTags: [{ type: "User", id: "current" }],
      transformResponse: (response: Response<UserInterface>) => {
        return response;
      },
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/user/logout",
        method: "POST",
      }),
      invalidatesTags: [{ type: "User", id: "current" }],
    }),
    getCurrentUser: builder.query<UserInterface, string>({
      query: () => "/user",
      providesTags: [{ type: "User", id: "current" }],
    }),
    getUserById: builder.query<UserInterface, string>({
      query: (id) => ({
        url: `/users/${id}`,
        headers: {
          Cookie: "Test",
        },
      }),
      providesTags: ["User"],
    }),
  }),
});

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loggedIn: false,
  } as AuthState,
  reducers: {
    updateCart: (state, action) => {
      state.user!.cart = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.me.matchFulfilled, (state, { payload }) => {
        state.user = (payload as any).data!;
        state.loggedIn = true;
      })
      .addMatcher(
        authApi.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.data!;
          state.loggedIn = true;
        }
      )
      .addMatcher(
        authApi.endpoints.logout.matchFulfilled,
        (state, { payload }) => {
          state.user = null;
          state.loggedIn = false;
        }
      )
      .addMatcher(
        authApi.endpoints.getCurrentUser.matchFulfilled,
        (state, { payload }) => {
          state.user = payload;
        }
      )
      .addDefaultCase((state, action) => {
        if (action.type === HYDRATE) {
          const incoming = action.payload.auth;
          if (incoming) return { ...state, ...incoming };
        }
      });
  },
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useGetCurrentUserQuery,
  useGetUserByIdQuery,
  util: { getRunningQueriesThunk: authGetRunningQueriesThunk },
} = authApi;

export const { updateCart } = authSlice.actions;

export default authSlice.reducer;
