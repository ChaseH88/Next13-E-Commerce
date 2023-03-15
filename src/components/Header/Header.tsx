import { HeaderStyled } from "./styles";

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <HeaderStyled>
      <div className="container">
        <div className="logo">Logo</div>
        <div className="menu"></div>
        <div className="utility-menu">
          <div className="utility-menu-item">Search</div>
          <div className="utility-menu-item">Account</div>
          <div className="utility-menu-item">Cart</div>
        </div>
      </div>
    </HeaderStyled>
  );
};

export { Header };
