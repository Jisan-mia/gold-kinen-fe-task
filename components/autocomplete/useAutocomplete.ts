import useClickOutside from "@/hooks/useClickOutside";
import { getAutocompleteSearchResult } from "@/services/postsApi";
import { PostItem } from "@/types/post";
import { ChangeEvent, useCallback, useRef, useState } from "react";
import { debounce } from "./debounce";

export function useAutocomplete() {
  const [searchResult, setSearchResult] = useState<PostItem[] | null>(null);
  const [isSuggestionOpen, setIsSuggestionOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const searchbarRef = useRef(null);

  useClickOutside(searchbarRef, () => {
    setIsSuggestionOpen(false);
  });

  // const makeApiRequest = async (text: string) => {
  //   setIsLoading(true);

  //   try {
  //     const result = await getAutocompleteSearchResult(text);
  //     setSearchResult(result);
  //   } catch (error) {
  //     setErrorMessage("Error occurred while fetching suggestions");
  //     setSearchResult(null);
  //   }

  //   setIsLoading(false);
  // };

  // const debouncedApiRequest = useCallback(debounce(async (text: string) => {
  //   setIsLoading(true);

  //   try {
  //     const result = await getAutocompleteSearchResult(text);
  //     setSearchResult(result);
  //   } catch (error) {
  //     setErrorMessage("Error occurred while fetching suggestions");
  //     setSearchResult(null);
  //   }

  //   setIsLoading(false);
  // }, 500), [makeApiRequest]);

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
  };
}
