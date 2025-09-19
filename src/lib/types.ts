type ApiResponse<T> = {
  data: T;
  statusCode: number;
  message: string;
  timestamp: string;
};

export type { ApiResponse };
