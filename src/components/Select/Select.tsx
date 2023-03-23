import React, { useState, useRef, useCallback, useMemo } from "react";
import { InputStyled } from "components/Input/styles";
import { SelectStyled, SelectOptionStyled, ArrowStyled } from "./styles";
import { DropdownMenu, Icon, Typography } from "components";

interface SelectProps {
  options: { value: string | number; label: string }[];
  value: string | number;
  onChange: (value: string | number) => void;
}

const Select = ({ options, value, onChange }: SelectProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const anchorRef = useRef<HTMLInputElement>(null);

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleOptionClick = useCallback((value: string | number) => {
    onChange(value);
    setMenuOpen(false);
  }, []);

  const selectedOption = useMemo(
    () => options?.find((option) => option.value === value),
    [value]
  );

  return (
    <SelectStyled>
      <InputStyled
        as="input"
        readOnly
        value={selectedOption?.label}
        onClick={() => setMenuOpen(!menuOpen)}
        ref={anchorRef}
      />
      <ArrowStyled
        variants={{
          closed: {
            rotate: 0,
            y: -7,
          },
          open: {
            rotate: 90,
            y: -7,
            x: -1,
          },
        }}
        initial="closed"
        animate={menuOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      >
        <Icon name="FaCaretRight" />
      </ArrowStyled>
      <DropdownMenu
        anchorElement={anchorRef.current}
        open={menuOpen}
        onClose={handleMenuClose}
        items={
          <>
            {options?.map((option) => (
              <SelectOptionStyled
                key={option.value}
                onClick={() => handleOptionClick(option.value)}
              >
                <Typography variant="subtitle2">{option.label}</Typography>
              </SelectOptionStyled>
            ))}
          </>
        }
      />
    </SelectStyled>
  );
};

export { Select };
