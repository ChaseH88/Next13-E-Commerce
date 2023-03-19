import { useState, useRef, useCallback } from "react";

/**
 * This is to be used in conjunction with the `DropdownMenu` component.
 * @see src/components/DropdownMenu/DropdownMenu.stories.mdx
 */
const useDropdownMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const anchorRef = useRef<HTMLButtonElement | null>(null);

  const handleToggle = useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
  }, []);

  const handleClose = useCallback(
    (event?: MouseEvent) => {
      if (event?.target && anchorRef.current?.contains(event.target as Node)) {
        return;
      }
      setOpen(false);
    },
    [anchorRef]
  );

  return {
    open,
    anchorRef,
    handleToggle,
    handleClose,
  };
};

export { useDropdownMenu };
