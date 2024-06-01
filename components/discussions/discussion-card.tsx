"use client";
import { cn, getFirstTwoLetters } from "@/lib/utils";
import { CommentItem } from "@/types/comment";
import { PostItem } from "@/types/post";
import { MessageCircleMore } from "lucide-react";
import Link from "next/link";
type DiscussionCardProps = {
  discussion: PostItem;
  isDetailDiscussion?: boolean;
  comments?: CommentItem[];
};
const DiscussionCard = ({
  discussion,
  isDetailDiscussion = false,
  comments,
}: DiscussionCardProps) => {
  return (
    <Link href={isDetailDiscussion ? "#" : `/discussion/${discussion.id}`}>
      <div className="flex bg-background rounded-lg border border-border/40 shadow-sm px-5 py-5 cursor-pointer hover:bg-secondary transition-all hover:border-border">
        <div className="flex gap-8 justify-between w-full">
          <div className="flex justify-start gap-2.5 align-baseline">
            <div className="">
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-sm font-medium text-gray-700 uppercase">
                  {getFirstTwoLetters(discussion?.user?.name || "J M")}
                </span>
              </div>
            </div>
            <div className="grid gap-[2px]">
              <h2 className="text-base font-medium text-foreground">
                {discussion.title}
              </h2>
              <p className="text-[#89929D] text-sm font-normal">
                <strong className="text-[#7C8692] capitalize">
                  {discussion?.user?.name || "Jisan Mia"}&nbsp;
                </strong>
                stated the discussion 10 days ago
              </p>
              <p
                className={cn("text-[#89929D] text-sm font-normal ", {
                  "line-clamp-2": !isDetailDiscussion,
                })}
              >
                {discussion.body}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-end gap-5">
            <div>
              <div className="flex -space-x-1 items-center">
                {comments ? (
                  comments.slice(0, 4).map((comment) => (
                    <div
                      key={comment.id}
                      className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden ring-2 ring-border"
                    >
                      <span className="text-sm text-gray-500 uppercase">
                        {getFirstTwoLetters(comment.name)}
                      </span>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden ring-2 ring-border">
                      <span className="text-sm text-gray-500">JM</span>
                    </div>
                    <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden ring-2 ring-border">
                      <span className="text-sm text-gray-500">JM</span>
                    </div>
                    <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden ring-2 ring-border">
                      <span className="text-sm text-gray-500">JM</span>
                    </div>
                    <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden ring-2 ring-border">
                      <span className="text-sm text-gray-500">JM</span>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircleMore className="size-5 text-[#363F47] fill-[#363F47] -rotate-90" />
              <span className="text-[#363F47] font-medium text-base ">
                {comments ? comments.length : 5}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DiscussionCard;
