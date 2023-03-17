import { Button } from "components/Button";
import { DropdownMenu } from "components/DropdownMenu";
import { Icon } from "components/Icon";
import { useClickOutside } from "hooks/useClickOutside";
import { useEffect, useMemo, useRef, useState } from "react";
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
      <div className="container">
        <div className="logo">Logo</div>
        <div className="menu"></div>
        <div
          className="utility-menu"
          style={{
            position: "relative",
          }}
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
        </div>
      </div>
    </HeaderStyled>
  );
};

export { Header };
