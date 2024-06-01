import { RefObject, useCallback, useEffect } from "react";

type Event = MouseEvent | TouchEvent;

function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void
): void {
  const handleClickOutside = useCallback(
    (event: Event) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler(event);
      }
    },
    [ref, handler]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [handleClickOutside]);
}

export default useClickOutside;
