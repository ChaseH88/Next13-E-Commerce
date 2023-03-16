import { Button } from "components/Button";
import { DropdownMenu } from "components/DropdownMenu";
import { Icon } from "components/Icon";
import { useMemo, useRef, useState } from "react";
import { HeaderStyled } from "./styles";

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const [open, setOpen] = useState(true);
  const targetRef = useRef(null);
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
          <Button size="icon" variant="primary">
            <Icon name="FaSearch" />
          </Button>
          <Button
            onClick={handleAccountMenuToggle}
            size="icon"
            variant="primary"
            ref={targetRef}
          >
            <Icon name="FaUser" />
          </Button>
          <Button size="icon" variant="primary">
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
