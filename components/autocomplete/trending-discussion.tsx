import { getPostsData } from "@/actions/getPosts";
import { POSTS_PER_PAGE } from "@/config/constants";
import { PostItem } from "@/types/post";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import SearchResultItem from "./search-result-item";

const TrendingDiscussionSuggestion = () => {
  const [trendingData, setTrendingData] = useState<PostItem[] | null>(null);
  const [isLoading, setIsLoading] = useState(false)
  const fetchTrendingData = async () => {
    setIsLoading(true)
    const data = await getPostsData(0, POSTS_PER_PAGE);
    setTrendingData(data);
    setIsLoading(false)
  };
  useEffect(() => {
    fetchTrendingData();
  }, []);

  return (
    <div className="w-full">
      <h3 className="uppercase font-medium text-xs text-foreground/80 px-3 mb-2">
        Trending Discussions
      </h3>

      <div className="grid divide-y divide-border">
        {isLoading && (
          <div className="flex items-end justify-center pb-4">
            <Loader2 className="h-5 w-5 animate-spin text-center" />
          </div>
        )}
        {!isLoading && trendingData &&
          trendingData.map((item) => (
            <SearchResultItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default TrendingDiscussionSuggestion;
