import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { DropdownMenuStyledProps, DropdownMenuStyled } from "./styles";
import { Box, Typography } from "components";

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
  animation?: MenuAnimation;
  position?: "left" | "middle" | "right";
  textAlign?: "left" | "center" | "right";
  offset?: number;
  width?: string;
}

const DropdownMenu = ({
  anchorElement,
  open,
  onClose,
  style,
  items,
  textAlign,
  animation = "in",
  position = "left",
  offset = 0,
  width,
}: DropdownMenuProps) => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setContainer(containerRef.current);
    }
  }, [open]);

  useEffect(() => {
    if (open && container && anchorElement) {
      const rect = anchorElement.getBoundingClientRect();
      container.style.top = `${rect.bottom + window.pageYOffset + offset}px`;
      switch (position) {
        case "middle":
          container.style.left = `${
            rect.left +
            window.pageXOffset +
            rect.width / 2 -
            container.offsetWidth / 2
          }px`;
          break;
        case "right":
          container.style.left = `${
            rect.left + window.pageXOffset + rect.width - container.offsetWidth
          }px`;
          break;
        default:
          container.style.left = `${rect.left + window.pageXOffset}px`;
          break;
      }
    }
  }, [open, container, anchorElement, position, offset]);

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
          style={{
            ...style,
            ...(width && { width }),
          }}
        >
          {!Array.isArray(items) || items.length === 0 ? (
            <>{items}</>
          ) : (
            items?.map((item) => (
              <Box
                key={item.id}
                onClick={item.onClick}
                className="item"
                padding="0.5em 1em"
                style={{
                  cursor: "pointer",
                  ...(textAlign && { textAlign }),
                }}
              >
                <Typography
                  variant="subtitle2"
                  style={{
                    margin: 0,
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
            ))
          )}
        </DropdownMenuStyled>
      )}
    </AnimatePresence>
  );
};

export { DropdownMenu };
