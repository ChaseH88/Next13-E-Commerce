import { makeTheme } from "styles/theme";

export type Response<T> =
  | {
      message: string;
      data?: T;
      pagination?: {
        page: number;
        pageSize: number;
        totalPages: number;
        totalItems: number;
      };
    }
  | {
      error?: string;
    };

export type UserRoles = "customer" | "manager" | "admin";

// ======================

type ReturnTypeMakeTheme = ReturnType<typeof makeTheme>;
export type FontType = keyof ReturnTypeMakeTheme["fontSizes"];
type FilterTypesWithOn<T> = {
  [K in keyof T as K extends string
    ? K extends `on${infer Suffix}`
      ? Uncapitalize<Suffix>
      : never
    : never]: T[K];
};
export type ColorType = keyof FilterTypesWithOn<ReturnTypeMakeTheme["colors"]>;
export type SpacingType = keyof ReturnTypeMakeTheme["spacing"];
