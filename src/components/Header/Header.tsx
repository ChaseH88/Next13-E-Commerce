import { Box, Button, DropdownMenu } from "components";
import { Icon } from "components/Icon";
import { useClickOutside } from "hooks/useClickOutside";
import { useMemo, useRef, useState } from "react";
import { HeaderStyled } from "./styles";

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const targetRef = useRef(null);
  useClickOutside(targetRef, () => setOpen(false));

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
    <HeaderStyled>
      <Box className="container" display="flex">
        <Box flex={"0 0 100px"} className="logo">
          Logo
        </Box>
        <Box flex={"1 1 auto"} className="menu"></Box>
        <Box
          flex={"0 0 200px"}
          className="utility-menu"
          position="relative"
          display="flex"
          gap=".5em"
        >
          <Button color="primary" variant="contained">
            <Icon name="FaSearch" />
          </Button>
          <Button
            onClick={handleAccountMenuToggle}
            variant="contained"
            color="primary"
            ref={targetRef}
          >
            <Icon name="FaUser" />
          </Button>
          <Button color="primary" variant="contained">
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
