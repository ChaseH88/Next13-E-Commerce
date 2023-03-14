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
