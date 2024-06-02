import { API_URL } from "@/config/constants";
import { handleError } from "@/lib/handleError";
import { PostItem } from "@/types/post";

export const getApiUrlForPosts = (
  offset: number,
  limit: number,
  sortKey = "id",
  sortOrder = "desc"
): string => {
  return `${API_URL}/posts?_start=${offset}&_limit=${limit}&_sort=${sortKey}&_order=${sortOrder}`;
};

export async function getIndividualPostData(id: string) {
  const response = await fetch(`${API_URL}/posts/${id}`);
  const post = (await response.json()) as PostItem;
  if (!response.ok) {
    throw await handleError(response);
  }
  return post;
}

export async function getAutocompleteSearchResult(query: string) {
  const response = await fetch(`${API_URL}/posts?title_like=^${query}`);
  const searchResult = (await response.json()) as PostItem[];
  if (!response.ok) {
    throw await handleError(response);
  }
  return searchResult;
}
