import { CommentItem } from "@/types/comment";
import CommentCard from "./comment-card";

type CommentsListProps = {
  comments: CommentItem[];
};

const CommentsList = ({ comments }: CommentsListProps) => {
  return (
    <div className="grid gap-3 mt-3.5">
      <h3 className="text-lg font-medium text-foreground">All Comments</h3>
      {comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentsList;
