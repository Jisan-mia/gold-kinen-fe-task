import { API_URL } from "@/config/constants";
import { handleError } from "@/lib/handleError";
import { CommentItem } from "@/types/comment";

export async function getCommentsData(postId: string) {
  const response = await fetch(`${API_URL}/comments?postId=${postId}`);
  const comments = (await response.json()) as CommentItem[];
  if (!response.ok) {
    throw await handleError(response);
  }

  return comments;
}
