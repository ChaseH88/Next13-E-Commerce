import React, { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { DropdownMenuStyledProps, DropdownMenuStyled } from "./styles";
import { Box } from "components";

const menuAnimation = {
  in: {
    initial: { opacity: 0, scale: 0.9, originY: 0 },
    animate: { opacity: 1, scale: 1, originY: 0 },
    exit: { opacity: 0, scale: 0.9, originY: 0 },
  },
  fromBottom: {
    initial: { opacity: 0, scale: 0.9, originY: 1 },
    animate: { opacity: 1, scale: 1, originY: 1 },
    exit: { opacity: 0, scale: 0.9, originY: 1 },
  },
};

type MenuAnimation = keyof typeof menuAnimation;

export interface DropdownMenuItem {
  id: string;
  name: string;
  slug: string;
  description?: string;
  onClick?: () => void;
}

interface DropdownMenuProps extends DropdownMenuStyledProps {
  anchorElement: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  style?: React.CSSProperties;
  items: DropdownMenuItem[] | React.ReactNode;
  animation: MenuAnimation;
}

const DropdownMenu = ({
  anchorElement,
  open,
  onClose,
  style,
  items,
  animation = "in",
}: DropdownMenuProps) => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (containerRef.current) {
      setContainer(containerRef.current);
    }
  }, []);

  React.useEffect(() => {
    if (open && container && anchorElement) {
      const rect = anchorElement.getBoundingClientRect();
      container.style.top = `${rect.bottom + window.pageYOffset}px`;
      container.style.left = `${rect.left + window.pageXOffset}px`;
    }
  }, [open, container, anchorElement]);

  console.log("items", Array.isArray(items), items);

  return (
    <AnimatePresence>
      {open && (
        <DropdownMenuStyled
          ref={containerRef}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={menuAnimation[animation]}
          transition={{ duration: 0.2 }}
          style={style}
        >
          {!Array.isArray(items) || items.length === 0 ? (
            <>{items}</>
          ) : (
            items?.map((item) => (
              <Box
                key={item.id}
                onClick={item.onClick}
                className="item"
                display="flex"
                alignItems="center"
                justifyContent="center"
                padding="0.5em 1em"
                style={{
                  cursor: "pointer",
                }}
              >
                {item.name}
              </Box>
            ))
          )}
        </DropdownMenuStyled>
      )}
    </AnimatePresence>
  );
};

export { DropdownMenu };
