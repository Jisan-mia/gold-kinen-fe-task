// All posts besides the top 10 will be generated on demand.
export const dynamicParams = true;

import CommentsList from "@/components/comments/comments-list";
import DiscussionCard from "@/components/discussions/discussion-card";
import { handleError } from "@/lib/handleError";
import { getCommentsData } from "@/services/commentsApi";
import { getApiUrlForPosts, getIndividualPostData } from "@/services/postsApi";
import { PostItem } from "@/types/post";

export async function generateStaticParams() {
  const url = getApiUrlForPosts(0, 100, "id", "asce");
  const response = await fetch(url);
  const posts = (await response.json()) as PostItem[];
  if (!response.ok) {
    throw await handleError(response);
  }

  const topPosts = posts.slice(0, 10);
  return topPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
const SpecificDiscussionPage = async ({
  params,
}: {
  params: { id: string };
}) => {
  const { id } = params;
  // initiate both requests in parallel
  const postData = getIndividualPostData(id);
  const commentsData = getCommentsData(id);

  // wait for the promises to resolve
  const [post, comments] = await Promise.all([postData, commentsData]);

  return (
    <div>
      <DiscussionCard
        discussion={post}
        isDetailDiscussion
        comments={comments}
      />

      <CommentsList comments={comments} />
    </div>
  );
};

export default SpecificDiscussionPage;
