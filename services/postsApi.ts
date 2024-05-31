import { API_URL } from "@/config/constants";

export const getApiUrlForPosts = (
  offset: number,
  limit: number,
  sortKey = "id",
  sortOrder = "desc"
): string => {
  return `${API_URL}/posts?_start=${offset}&_limit=${limit}&_sort=${sortKey}&_order=${sortOrder}`;
};
