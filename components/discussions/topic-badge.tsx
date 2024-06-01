"use client";
import { cn } from "@/lib/utils";
import { PopularTopicItem } from "@/types";
import { PostItem } from "@/types/post";
import { useSearchParams } from "next/navigation";
import { popularTopicsList } from "../shared/data";

const TopicBadge = ({ discussion }: { discussion: PostItem }) => {
  const searchParams = useSearchParams();
  const topicSearchParam = searchParams.get("topic");
  let topic: PopularTopicItem = discussion?.topic;
  if (discussion?.topic) {
    topic = discussion.topic;
  } else if (topicSearchParam) {
    const findTopic = popularTopicsList.find((topic) =>
      topic.topic.toLowerCase().includes(topicSearchParam.toLowerCase())
    );

    if (findTopic) {
      topic = findTopic;
    }
  }

  if (!topic) {
    return null;
  }

  return (
    <div
      className={`absolute -top-[12px] right-[10px] bg-background capitalize border h-6 px-2.5 py-2.5 rounded-md flex items-center gap-1.5`}
      style={{
        borderColor: `${topic?.topicColor}`,
      }}
    >
      <div
        className={cn("h-2.5 w-2.5 rounded-full")}
        style={{
          backgroundColor: topic?.topicColor,
        }}
      ></div>
      <span className="text-sm text-normal">{topic?.topic}</span>
    </div>
  );
};

export default TopicBadge;

export const TopicBadgeLoading = () => {
  return (
    <div
      className={`absolute -top-[12px] right-[10px] bg-background capitalize border h-6 px-2.5 py-2.5 rounded-md flex items-center gap-1.5 border-border`}
    >
      <div className={"h-2.5 w-2.5 rounded-full bg-primary"}></div>
    </div>
  );
};
