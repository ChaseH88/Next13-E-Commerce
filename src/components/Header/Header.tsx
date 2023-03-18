import { Box, Button, Icon, Typography, Input, DropdownMenu } from "components";
import { useScrollPosition } from "hooks";
import { useCallback, useMemo, useRef, useState, forwardRef } from "react";
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components";
import { CategoryInterface } from "types/interfaces";
import { HeaderStyled } from "./styles";

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const [searchToggle, setSearchToggle] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const accountAnchorRef = useRef(null);
  const theme = useTheme();
  const scrollPosition = useScrollPosition();
  const scrollPast = useMemo(() => scrollPosition > 100, [scrollPosition]);
  const formHook = useForm({
    mode: "onChange",
  });

  const handleSubmitSearch = useCallback((data: any) => {
    alert(JSON.stringify(data));
  }, []);

  const handleSearchToggle = useCallback(() => {
    setSearchToggle((prevSearchToggle) => !prevSearchToggle);
  }, []);

  const handleAccountMenuToggle = useCallback(() => {
    setAccountMenuOpen((prevAccountMenuOpen) => !prevAccountMenuOpen);
  }, []);

  const navMenu = useMemo(
    () =>
      [
        {
          id: "1",
          name: "Shirts",
          slug: "shirts",
          description: "Shirts description",
        },
        {
          id: "2",
          name: "Pants",
          slug: "pants",
          description: "Pants description",
        },
        {
          id: "3",
          name: "Shoes",
          slug: "shoes",
          description: "Shoes description",
        },
        {
          id: "4",
          name: "Accessories",
          slug: "accessories",
          description: "Accessories description",
        },
      ] as Partial<CategoryInterface>[],
    []
  );

  return (
    <>
      <HeaderStyled scrollPast={scrollPast}>
        <Box className="container" display="flex">
          <Box
            flex={"0 0 200px"}
            className="logo"
            display="flex"
            alignItems="center"
            gap="10px"
          >
            <Icon
              name="FaShoppingBag"
              color={theme.colors.secondary}
              size={18}
            />
            <Typography
              variant="h1"
              style={{
                fontSize: "1.5em",
              }}
            >
              FitZip
            </Typography>
          </Box>
          <Box flex={"1 1 auto"} className="menu">
            {searchToggle ? (
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="100%"
                position="relative"
              >
                <Input
                  type="text"
                  placeholder="What are you looking for?"
                  formInputName="search"
                  formHook={formHook}
                />
                <Box
                  className="close-search"
                  position="absolute"
                  style={{
                    right: "1em",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                  display="flex"
                >
                  <Button
                    onClick={() => handleSubmitSearch(formHook.getValues())}
                    variant="no-outline-icon"
                  >
                    <Icon name="FaSearch" />
                  </Button>
                  <Button
                    onClick={handleSearchToggle}
                    variant="no-outline-icon"
                  >
                    <Icon name="FaTimes" />
                  </Button>
                </Box>
              </Box>
            ) : (
              <Box display="flex" gap="1em">
                {navMenu.map((item) => (
                  <Typography
                    key={item.id}
                    variant="h4"
                    style={{
                      fontSize: "1em",
                    }}
                  >
                    {item.name}
                  </Typography>
                ))}
              </Box>
            )}
          </Box>
          <Box
            className="utility-menu"
            position="relative"
            style={{
              textAlign: "right",
            }}
          >
            {!searchToggle && (
              <Button
                onClick={handleSearchToggle}
                variant="no-outline-icon"
                style={{ display: "inline-block", margin: "0 5px 0 0" }}
              >
                <Icon name="FaSearch" />
              </Button>
            )}
            <Button
              variant="no-outline-icon"
              ref={accountAnchorRef}
              onClick={handleAccountMenuToggle}
              style={{ display: "inline-block", margin: "0 5px 0 0" }}
            >
              <Icon name="FaUser" />
            </Button>
            <Button
              variant="no-outline-icon"
              style={{ display: "inline-block", margin: "0 5px 0 0" }}
            >
              <Icon name="FaShoppingCart" />
            </Button>
          </Box>
        </Box>
      </HeaderStyled>
      <DropdownMenu
        animation="in"
        position="right"
        anchorElement={accountAnchorRef.current}
        open={accountMenuOpen}
        onClose={handleAccountMenuToggle}
        items={[
          {
            id: "1",
            name: "My Account",
            slug: "my-account",
          },
          {
            id: "2",
            name: "My Orders",
            slug: "my-orders",
          },
          {
            id: "3",
            name: "My Wishlist",
            slug: "my-wishlist",
          },
          {
            id: "4",
            name: "Logout",
            slug: "logout",
          },
        ]}
      />
    </>
  );
};

export { Header };
