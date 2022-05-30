import { API_ENDPOINTS } from "@api/api-endpoints";
import client from "@api/client";
import { useQuery } from "react-query";

export function useBlogs() {
  const { data, error, isLoading } = useQuery(API_ENDPOINTS.POSTS, () => {
    client.posts.all();
  });

  return {
    posts: data,
    isLoading,
    error,
  };
}
