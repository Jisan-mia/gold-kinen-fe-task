import { PostItem } from "@/types/post";
import Link from "next/link";
type SearchResultItemProps = {
  item: PostItem;
};
const SearchResultItem = ({ item }: SearchResultItemProps) => {
  return (
    <Link
      href={`/discussion/${item.id}`}
      className="hover:bg-secondary/70 transition-all py-2.5"
    >
      <div className="px-3">
        <h3 className="font-medium text-base text-foreground">{item.title}</h3>
        <p className="text-sm font-normal text-foreground/70 line-clamp-2">
          {item.body}
        </p>
      </div>
    </Link>
  );
};

export default SearchResultItem;
