"use client";
import { Loader2, SearchIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import SearchResultItem from "./search-result-item";
import TrendingDiscussionSuggestion from "./trending-discussion";
import { useAutocomplete } from "./useAutocomplete";

const Autocomplete = () => {
  const pathname = usePathname();
  const {
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
  } = useAutocomplete();

  useEffect(() => {
    setIsSuggestionOpen(false);
    setSearchText("");
    setSearchResult(null);
  }, [pathname]);
  return (
    <div ref={searchbarRef} className="max-w-lg mx-auto w-full">
      <div className="w-full relative">
        <div
          className={
            "flex h-10 items-center rounded-full border border-input bg-secondary px-3 py-2 text-sm  z-50 relative"
          }
        >
          <SearchIcon className="size-5 text-foreground" />
          <input
            type="search"
            className={
              "w-full p-2 placeholder:text-foreground/70 bg-secondary focus-visible:outline-none rounded-full text-secondary-foreground"
            }
            autoComplete="off"
            spellCheck={false}
            placeholder="Search discussions..."
            aria-label="Search"
            role="combobox"
            aria-controls="Search"
            aria-expanded={isSuggestionOpen}
            onFocus={() => setIsSuggestionOpen(true)}
            aria-autocomplete="list"
            value={searchText}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        {isSuggestionOpen && (
          <div className="absolute top-1/2 z-40 right-0 left-0 bg-background border border-border/80 rounded-bl-2xl  h-max w-full shadow-xl">
            <div className="w-full h-[1px] bg-border/70 mt-[26px]"></div>

            <div className="overflow-y-auto overflow-x-hidden w-full h-full max-h-[calc(100vh-100px)] pt-4 pb-2.5">
              {/* trending */}
              {searchText ? (
                <div className="w-full">
                  <h3 className="font-medium text-xs text-foreground/80 px-3 mb-2">
                    Search result for &apos;{searchText}&apos;
                  </h3>
                  {isLoading && (
                    <div className="flex items-end justify-center pb-4">
                      <Loader2 className="h-5 w-5 animate-spin text-center" />
                    </div>
                  )}
                  <div
                    className="grid divide-y divide-border"
                    id="autocomplete-list"
                    role="listbox"
                    ref={listRef}
                  >
                    {searchResult && searchResult?.length > 0
                      ? searchResult.map((item, idx) => (
                          <SearchResultItem
                            key={item.id}
                            item={item}
                            highlightedIndex={highlightedIndex}
                            idx={idx}
                          />
                        ))
                      : !isLoading && (
                          <p className="pb-4 text-sm text-foreground/70 text-center">
                            No Results found
                          </p>
                        )}
                  </div>
                </div>
              ) : (
                <TrendingDiscussionSuggestion />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Autocomplete;
