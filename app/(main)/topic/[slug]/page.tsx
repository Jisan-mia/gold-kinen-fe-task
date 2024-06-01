import { getPostsData } from "@/actions/getPosts";
import DiscussionCard from "@/components/discussions/discussion-card";
import { popularTopicsList } from "@/components/shared/data";
import { POSTS_PER_PAGE } from "@/config/constants";
import { getAllUsersData } from "@/services/userApi";
import { PopularTopicItem } from "@/types";

const SpecificTopicsPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const currentTopic = popularTopicsList.find((topic) =>
    topic.slug.toLowerCase().includes(slug.toLowerCase())
  );
  const postListForTopic = getPostsData(
    (currentTopic as PopularTopicItem).offset,
    POSTS_PER_PAGE
  );
  const allUsersData = getAllUsersData();

  const [posts, userMappedData] = await Promise.all([
    postListForTopic,
    allUsersData,
  ]);

  const postListForTopicWithUserData = posts.map((post) => ({
    ...post,
    user: userMappedData[`${post.userId}`],
    topic: currentTopic as PopularTopicItem,
  }));

  return (
    <div>
      <div>
        <h1 className="font-medium text-base">
          <span
            className="capitalize"
            style={{
              color: `${currentTopic?.topicColor}`,
            }}
          >
            {currentTopic?.topic}&nbsp;
          </span>
          discussions
        </h1>
      </div>

      <div className="grid gap-6 mt-4">
        {postListForTopicWithUserData?.map((post) => (
          <DiscussionCard key={post.id} discussion={post} />
        ))}
      </div>
    </div>
  );
};

export default SpecificTopicsPage;
