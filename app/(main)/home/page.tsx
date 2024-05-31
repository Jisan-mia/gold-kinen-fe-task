import { getPostsData } from "@/actions/getPosts";
import DiscussionList from "@/components/discussions/discussion-list";
import { POSTS_PER_PAGE } from "@/config/constants";

const HomePage = async () => {
  const initialPosts = await getPostsData(0, POSTS_PER_PAGE);

  return (
    <>
      <DiscussionList initialPosts={initialPosts} />
    </>
  );
};

export default HomePage;
