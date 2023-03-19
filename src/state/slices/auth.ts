import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice } from "@reduxjs/toolkit";
import { UserInterface } from "types/interfaces";
import { Response } from "types/types";

export interface AuthState {
  user: UserInterface | null;
  loggedIn: boolean;
}

export const authApi = createApi({
  reducerPath: "authApi",
  tagTypes: ["User"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
    credentials: "include",
  }),
  endpoints: (builder) => ({
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
  reducers: {},
  extraReducers: (builder) => {
    builder
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
      );
  },
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useGetCurrentUserQuery,
  useGetUserByIdQuery,
} = authApi;

export default authSlice.reducer;
