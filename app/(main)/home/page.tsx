import { getPostsData } from "@/actions/getPosts";
import DiscussionList from "@/components/discussions/discussion-list";
import { POSTS_PER_PAGE } from "@/config/constants";
import { getAllUsersData } from "@/services/userApi";

const HomePage = async () => {
  const initialPosts = getPostsData(0, POSTS_PER_PAGE);
  const allUsersData = getAllUsersData();

  const [posts, userMappedData] = await Promise.all([
    initialPosts,
    allUsersData,
  ]);

  const initialPostsWithUserData = posts.map((post) => ({
    ...post,
    user: userMappedData[`${post.userId}`],
  }));

  return (
    <>
      <DiscussionList
        initialPosts={initialPostsWithUserData}
        usersData={userMappedData}
      />
    </>
  );
};

export default HomePage;
