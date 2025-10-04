type ApiResponse<T> = {
  data: T;
  statusCode: number;
  message: string;
  timestamp: string;
};

type PaginationApiResponse<T> = {
  data: T[];
  skip: number;
  take: number;
  totalRecords?: number;
  statusCode: number;
  message: string;
  timestamp: string;
};

type PaginationParams = {
  skip?: number;
  take?: number;
  [key: string]: string | number | boolean | undefined;
};

export type { ApiResponse, PaginationApiResponse, PaginationParams };
