import { useQuery } from "@tanstack/react-query";

import { apiCall, httpsService } from "@/lib";

import { ContentResponse } from "./useContents.types";

const QUERY_KEY = "/contents";

const getContent = () => {
  return httpsService.get("/contents");
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
