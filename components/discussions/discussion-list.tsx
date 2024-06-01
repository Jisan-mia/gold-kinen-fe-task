"use client";

import { getPostsData } from "@/actions/getPosts";
import { POSTS_PER_PAGE } from "@/config/constants";
import { PostItem } from "@/types/post";
import { UserItem } from "@/types/user";
import { useCallback, useEffect, useRef, useState } from "react";
import DiscussionCard from "./discussion-card";

type DiscussionListProps = {
  initialPosts: PostItem[];
  usersData: { [key: number]: UserItem };
};

const DiscussionList = ({ initialPosts, usersData }: DiscussionListProps) => {
  const [offset, setOffset] = useState(POSTS_PER_PAGE);
  const [posts, setPosts] = useState<PostItem[]>(initialPosts);
  const [hasMoreData, setHasMoreData] = useState(true);
  const targetScrollTriggerElement = useRef(null);

  const loadMorePosts = useCallback(async () => {
    if (hasMoreData) {
      const morePosts = await getPostsData(offset, POSTS_PER_PAGE);
      const morePostsWithUserInfo = morePosts.map((post) => ({
        ...post,
        user: usersData[`${post.userId}`],
      }));

      if (!morePosts.length) {
        setHasMoreData(false);
        return;
      }

      setPosts((prevPosts) => [...prevPosts, ...morePostsWithUserInfo]);
      setOffset((prevOffset) => prevOffset + POSTS_PER_PAGE);
    }
  }, [hasMoreData, offset, usersData]);

  useEffect(() => {
    console.log({ offset });
  }, [offset]);

  useEffect(() => {
    if (typeof window === "undefined" || !window.IntersectionObserver) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMorePosts();
        }
      },
      {
        threshold: 0.5,
        rootMargin: "0px 0px 100px 0px",
      }
    );

    if (targetScrollTriggerElement.current) {
      observer.observe(targetScrollTriggerElement.current);
    }
    // cleanup
    return () => {
      if (targetScrollTriggerElement.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(targetScrollTriggerElement.current);
      }
    };
  }, [hasMoreData, loadMorePosts, offset]);

  return (
    <div className="grid gap-4">
      {/* <div className="fixed top-5 right-28 bg-green-950 text-white text-xl z-50">
        {offset}
      </div> */}
      {posts?.map((post) => (
        <DiscussionCard key={post.id} discussion={post} />
      ))}

      <div className="flex justify-center text-foreground/80 w-ful">
        {hasMoreData ? (
          <p ref={targetScrollTriggerElement}>Loading...</p>
        ) : (
          <p>You&apos;ve reached to the end of the page</p>
        )}
      </div>
    </div>
  );
};

export default DiscussionList;
