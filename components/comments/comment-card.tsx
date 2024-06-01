import { getFirstTwoLetters } from "@/lib/utils";
import { CommentItem } from "@/types/comment";

type CommentCardProps = {
  comment: CommentItem;
};
const CommentCard = ({ comment }: CommentCardProps) => {
  return (
    <div className="relative mb-5 ">
      <div className="flex gap-2">
        <div>
          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-sm font-medium text-gray-700 uppercase">
              {getFirstTwoLetters(comment.name)}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative max-w-max rounded-2xl bg-secondary px-3 py-2 leading-5 shadow">
            <p className="font-semibold hover:underline">{comment.name}</p>
            <p>
              <span>{comment.body}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
