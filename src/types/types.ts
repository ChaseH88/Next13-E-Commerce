export type Response<T> =
  | {
      message: string;
      data: T;
    }
  | {
      error?: string;
    };

export type UserRoles = "customer" | "manager" | "admin";
