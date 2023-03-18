import React, { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { DropdownMenuStyledProps, DropdownMenuStyled } from "./styles";
import { Box } from "components";

const menuAnimation = {
  initial: { opacity: 0, scaleY: 0.9 },
  animate: { opacity: 1, scaleY: 1 },
  exit: { opacity: 0, scaleY: 0.9 },
};

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
}

const DropdownMenu = ({
  anchorElement,
  open,
  onClose,
  style,
  items,
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
          variants={menuAnimation}
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
