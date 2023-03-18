import { DropdownMenuStyled, DropdownMenuStyledProps } from "./styles";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useClassNames } from "hooks";
import { Typography } from "..";

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
  width = "300px",
}: DropdownMenuProps) => {
  const [position, setPosition] = useState({ top: "100%", left: "-50%" });
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (target?.current && dropdownRef?.current) {
      setPosition({
        top: "100%",
        left: "-50%",
      });
    }
  }, [target, dropdownRef, open]);

  return (
    <AnimatePresence>
      {open && (
        <DropdownMenuStyled
          ref={dropdownRef}
          initial={{ opacity: 0, y: 10, x: "-14%" }}
          animate={{ opacity: 1, y: 0, x: "-14%" }}
          exit={{ opacity: 0, y: 10, x: "-14%" }}
          transition={{ duration: 0.2 }}
          style={{ top: position.top, left: position.left }}
          width={width}
        >
          {items?.map((item, index) => (
            <motion.div
              key={index}
              className={"dropdown-item"}
              onClick={() => {
                item?.onClick();
                handleToggle();
              }}
            >
              <Typography variant="body1">{item?.label}</Typography>
            </motion.div>
          ))}
        </DropdownMenuStyled>
      )}
    </AnimatePresence>
  );
};
