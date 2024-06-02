import useClickOutside from "@/hooks/useClickOutside";
import { useRef, useState } from "react";

export function useAutocomplete() {
  const [isSuggestionOpen, setIsSuggestionOpen] = useState(false);

  const searchbarRef = useRef(null);

  useClickOutside(searchbarRef, () => {
    setIsSuggestionOpen(false);
  });

  return {
    isSuggestionOpen,
    setIsSuggestionOpen,
    searchbarRef,
  };
}
