"use client";
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useAutocomplete } from "./useAutocomplete";

const Autocomplete = () => {
  const pathname = usePathname();
  const { isSuggestionOpen, setIsSuggestionOpen, searchbarRef } =
    useAutocomplete();

  useEffect(() => {
    setIsSuggestionOpen(false);
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
          />
        </div>
        {isSuggestionOpen && (
          <div className="absolute top-1/2 z-40 right-0 left-0 bg-background border border-border/80 rounded-bl-2xl  h-max w-full shadow-xl">
            <div className="w-full h-[1px] bg-border/70 mt-[26px]"></div>

            <div className="overflow-y-auto overflow-x-hidden w-full h-full max-h-[calc(100vh-100px)] pt-4 pb-2.5">
              {/* trending */}
              <div className="w-full">
                <h3 className="uppercase font-medium text-xs text-foreground/80 px-3 mb-2">
                  Trending Discussions
                </h3>

                <div className="grid divide-y divide-border">
                  {Array.from(Array(8).keys()).map((item) => (
                    <Link
                      key={item}
                      href={"/discussion/100"}
                      className="hover:bg-secondary/70 transition-all py-2.5"
                    >
                      <div className="px-3">
                        <h3 className="font-medium text-base text-foreground">
                          This is post title man
                        </h3>
                        <p className="text-sm font-normal text-foreground/70 line-clamp-2">
                          This is a post description that can go long text as
                          you can see next line is the duplicate of first part!
                          This is a post description that can go long text as
                          you can see next line is the duplicate of first part!
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Autocomplete;
