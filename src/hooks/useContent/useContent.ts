import { useQuery } from "@tanstack/react-query";

import { apiCall, axiosInstance } from "@/lib";

import { ContentResponse } from "./useContent.types";

const QUERY_KEY = "/contents";

const getContent = () => {
  return axiosInstance.get("/contents");
};

export const useContent = () => {
  const { data, isLoading } = useQuery<ContentResponse, Error, ContentResponse>(
    {
      queryKey: [QUERY_KEY],
      queryFn: apiCall<ContentResponse>(getContent),
    }
  );

  return {
    contents: data?.data,
    isLoadingContent: isLoading,
  };
};
