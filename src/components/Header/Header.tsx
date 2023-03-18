import { Box, Button, DropdownMenu, Icon } from "components";
import { useClickOutside, useScrollPosition } from "hooks";
import { useMemo, useRef, useState } from "react";
import { HeaderStyled } from "./styles";

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const targetRef = useRef(null);
  const scrollPosition = useScrollPosition();
  const scrollPast = useMemo(() => scrollPosition > 100, [scrollPosition]);
  useClickOutside(targetRef, () => setOpen(false));

  console.log("scrollPosition", scrollPosition);

  const accountMenu = useMemo(
    () => [
      {
        label: "Item 1",
        onClick: () => console.log("Item 1 clicked"),
      },
      {
        label: "Item 2",
        onClick: () => console.log("Item 2 clicked"),
      },
    ],
    []
  );

  const handleAccountMenuToggle = () => setOpen(!open);

  return (
    <HeaderStyled scrollPast={scrollPast}>
      <Box className="container" display="flex">
        <Box flex={"0 0 100px"} className="logo">
          FitZip
        </Box>
        <Box flex={"1 1 auto"} className="menu"></Box>
        <Box
          flex={"0 0 200px"}
          className="utility-menu"
          position="relative"
          display="flex"
          gap=".5em"
        >
          <Button variant="no-outline-icon">
            <Icon name="FaSearch" />
          </Button>
          <Button
            onClick={handleAccountMenuToggle}
            variant="no-outline-icon"
            ref={targetRef}
          >
            <Icon name="FaUser" />
          </Button>
          <Button variant="no-outline-icon">
            <Icon name="FaShoppingCart" />
          </Button>
          <DropdownMenu
            items={accountMenu}
            target={targetRef}
            handleToggle={() => null}
            open={open}
            width="200px"
          />
        </Box>
      </Box>
    </HeaderStyled>
  );
};

export { Header };
