import { cn } from "@/lib/utils";
import { PostItem } from "@/types/post";
import Link from "next/link";
type SearchResultItemProps = {
  item: PostItem;
  highlightedIndex?: number | null;
  idx?: number;
};
const SearchResultItem = ({
  item,
  highlightedIndex = null,
  idx = 1,
}: SearchResultItemProps) => {
  return (
    <Link
      href={`/discussion/${item.id}`}
      className={cn("hover:bg-secondary/90 transition-all w-full py-2.5", {
        "bg-secondary": highlightedIndex === idx,
      })}
      id={`autocomplete-option-${idx}`}
      role="option"
      aria-selected={highlightedIndex === idx}
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
