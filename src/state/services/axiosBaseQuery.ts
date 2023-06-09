import type { BaseQueryApi, BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import axios from "./axios";
import Axios from "axios";
import { API } from "./api-types";

export interface AxiosBaseQueryArgs<Meta, Response = API.BaseResponse> {
  meta?: Meta;
  prepareHeaders?: (
    headers: AxiosRequestHeaders,
    api: BaseQueryApi
  ) => AxiosRequestHeaders;
  transformResponse?: (response: Response) => unknown;
}

export interface ServiceExtraOptions {
  authRequired?: boolean;
}

const getRequestConfig = (
  args: string | AxiosRequestConfig
): AxiosRequestConfig => {
  if (typeof args === "string") {
    return { url: args };
  }

  return args;
};

const axiosBaseQuery = <
  Args extends AxiosRequestConfig | string = AxiosRequestConfig,
  Result = unknown,
  DefinitionExtraOptions extends ServiceExtraOptions = Record<string, unknown>,
  Meta = Record<string, unknown>
>({
  prepareHeaders,
  meta,
  transformResponse,
}: AxiosBaseQueryArgs<Meta> = {}): BaseQueryFn<
  Args,
  Result,
  unknown,
  DefinitionExtraOptions,
  Meta
> => {
  return async (args, api, extraOptions) => {
    const token = (api as any)?.extra?.req?.cookies?.token;

    try {
      const requestConfig = getRequestConfig(args);
      const headers: any = {
        ...requestConfig.headers,
      };
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
      const result = await axios({
        ...requestConfig,
        headers: prepareHeaders ? prepareHeaders(headers, api) : headers,
        signal: api.signal,
        ...extraOptions,
        withCredentials: true,
        data: (requestConfig as any).body,
      });

      return {
        data: transformResponse ? transformResponse(result.data) : result.data,
      };
    } catch (err) {
      if (!Axios.isAxiosError(err)) {
        return {
          error: err,
          meta,
        };
      }

      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
        meta,
      };
    }
  };
};

export default axiosBaseQuery;
