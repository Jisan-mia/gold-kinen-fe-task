import useClickOutside from "@/hooks/useClickOutside";
import { getAutocompleteSearchResult } from "@/services/postsApi";
import { PostItem } from "@/types/post";
import { useRouter } from "next/navigation";
import {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useRef,
  useState,
} from "react";
import { debounce } from "./debounce";

export function useAutocomplete() {
  const [searchResult, setSearchResult] = useState<PostItem[] | null>(null);
  const [isSuggestionOpen, setIsSuggestionOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

  const searchbarRef = useRef(null);
  const listRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  useClickOutside(searchbarRef, () => {
    setIsSuggestionOpen(false);
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedMakeAPIRequest = useCallback(
    debounce(async (text) => {
      setIsLoading(true);
      try {
        const result = await getAutocompleteSearchResult(text as string);
        setSearchResult(result);
      } catch (error) {
        setErrorMessage("Error occurred while fetching suggestions");
        setSearchResult(null);
      }
      setIsLoading(false);
    }, 300),
    [getAutocompleteSearchResult]
  );

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setSearchText(text);

    if (text.length > 0) {
      debouncedMakeAPIRequest(text);
    } else {
      setSearchResult(null);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!isSuggestionOpen || !searchResult) return;

    switch (event.key) {
      case "Enter":
        if (highlightedIndex !== null) {
          const highlightedItem = searchResult[highlightedIndex];
          router.push(`/discussion/${highlightedItem.id}`);
        }
        break;

      case "ArrowDown":
        setHighlightedIndex((prevIndex) => {
          const nextIndex =
            prevIndex === null || prevIndex === searchResult.length - 1
              ? 0
              : prevIndex + 1;
          scrollToHighlightedItem(nextIndex);
          return nextIndex;
        });
        break;

      case "ArrowUp":
        setHighlightedIndex((prevIndex) => {
          const nextIndex =
            prevIndex === null || prevIndex === 0
              ? searchResult.length - 1
              : prevIndex - 1;
          scrollToHighlightedItem(nextIndex);

          return nextIndex;
        });
        break;

      case "Escape":
        setIsSuggestionOpen(false);
        break;
    }
  };

  const scrollToHighlightedItem = (index: number) => {
    if (listRef?.current) {
      const item = listRef.current.children[index] as HTMLElement;

      if (item) {
        item.scrollIntoView({
          block: "nearest",
          inline: "nearest",
        });
      }
    }
  };

  return {
    isSuggestionOpen,
    setIsSuggestionOpen,
    searchbarRef,
    handleInputChange,
    searchText,
    searchResult,
    isLoading,
    setSearchText,
    setSearchResult,
    handleKeyDown,
    highlightedIndex,
    listRef,
  };
}
