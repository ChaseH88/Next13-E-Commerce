import { useRef, useCallback, useEffect, MutableRefObject } from "react";

/**
 * Hook to check if an element is clicked or not clicked.
 * When the element isn't clicked, a callback function is fired.
 *
 * @param ref Ref element to listen to
 * @param handler Call function that fires when element is outside click area
 */
const useClickOutside = (
  ref: MutableRefObject<HTMLElement | null>,
  handler: (e: MouseEvent) => any
): void => {
  const currentHandler = useRef(handler);

  const memoizedCallback = useCallback((e: MouseEvent) => {
    if (ref && ref.current && !ref.current.contains(e.target as Element)) {
      currentHandler.current(e);
    }
  }, []);

  useEffect(() => {
    currentHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    document.addEventListener("click", memoizedCallback, true);

    return () => {
      document.removeEventListener("click", memoizedCallback, true);
    };
  }, [ref, handler]);
};

export { useClickOutside };
