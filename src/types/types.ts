import { makeTheme } from "styles/theme";

export type Response<T> = {
  message: string;
  data?: T;
  pagination?: {
    page: number;
    pageSize: number;
    totalPages: number;
    totalItems: number;
  };
  error?: string;
};

export type UserRoles = "customer" | "manager" | "admin";

// ======================

type ReturnTypeMakeTheme = ReturnType<typeof makeTheme>;
export type FontType = keyof ReturnTypeMakeTheme["fontSizes"];
export type ColorType =
  | "primary"
  | "secondary"
  | "tertiary"
  | "success"
  | "danger"
  | "warning"
  | "info";
export type SpacingType = keyof ReturnTypeMakeTheme["spacing"];
