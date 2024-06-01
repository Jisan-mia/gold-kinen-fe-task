"use server";

import { handleError } from "@/lib/handleError";
import { getApiUrlForPosts } from "@/services/postsApi";
import { PostItem } from "@/types/post";

export const getPostsData = async (
  offset: number,
  limit: number,
  sortKey = "id",
  sortOrder = "desc"
): Promise<PostItem[]> => {
  console.log({ offset, limit });
  const url = getApiUrlForPosts(offset, limit, sortKey, sortOrder);
  console.log(url);
  try {
    const response = await fetch(url);
    const data = (await response.json()) as PostItem[];
    if (!response.ok) {
      throw await handleError(response);
    }

    return data;
  } catch (error: unknown) {
    console.error(error);
    throw new Error(`An error occurred: ${error}`);
  }
};
