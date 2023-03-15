import { DropdownMenuStyled, DropdownMenuStyledProps } from "./styles";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface DropDownMenuItem {
  label: string;
  onClick: () => void;
}

interface DropdownMenuProps extends DropdownMenuStyledProps {
  items: DropDownMenuItem[];
  target: React.RefObject<HTMLElement>;
  open: boolean;
  handleToggle: () => void;
}

export const DropdownMenu = ({
  items,
  target,
  handleToggle,
  open,
  maxWidth = "300px",
}: DropdownMenuProps) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (target?.current && dropdownRef?.current) {
      const targetRect = target?.current?.getBoundingClientRect();
      const dropdownRect = dropdownRef?.current?.getBoundingClientRect();
      setPosition({
        top: targetRect?.bottom,
        left: targetRect?.left + (targetRect?.width - dropdownRect.width) / 2,
      });
    }
  }, [target, dropdownRef, open]);

  return (
    <AnimatePresence>
      {open && (
        <DropdownMenuStyled
          ref={dropdownRef}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          style={{ top: position.top, left: position.left }}
          maxWidth={maxWidth}
        >
          {items?.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => {
                item?.onClick();
                handleToggle();
              }}
            >
              {item.label}
            </motion.div>
          ))}
        </DropdownMenuStyled>
      )}
    </AnimatePresence>
  );
};
