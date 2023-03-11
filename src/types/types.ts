export type Response<T> =
  | {
      message: string;
      data: T;
    }
  | {
      error?: string;
    };
