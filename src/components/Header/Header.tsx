import { Box, Button, Icon, Typography, Input, DropdownMenu } from "components";
import { CartDropdown } from "components/CartDropdown";
import { useScrollPosition, useDropdownMenu, useOnScroll } from "hooks";
import { useAuthState } from "hooks/redux/useAuthState";
import { useSearchState } from "hooks/redux/useSearchState";
import { useRouter } from "next/router";
import { useCallback, useMemo, useState } from "react";
import { useTheme } from "styled-components";
import { CategoryInterface } from "types/interfaces";
import { HeaderStyled } from "./styles";

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const [searchToggle, setSearchToggle] = useState(false);
  const accountDropdown = useDropdownMenu();
  const cartDropdown = useDropdownMenu();
  const theme = useTheme();
  const router = useRouter();
  const scrollPosition = useScrollPosition();
  const scrollPast = useMemo(() => scrollPosition > 100, [scrollPosition]);
  const {
    state: { query },
    actions: { setQueryAction },
  } = useSearchState();
  const {
    state: { loggedIn, user },
    useLogoutMutation,
  } = useAuthState();
  const [logout] = useLogoutMutation();

  useOnScroll(() => {
    accountDropdown.handleClose();
    cartDropdown.handleClose();
  });

  const handleSubmitSearch = useCallback(() => {
    console.log({ query });
  }, [query]);

  const handleSearchToggle = useCallback(() => {
    setSearchToggle((prevSearchToggle) => !prevSearchToggle);
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
                  formInputName="query"
                  onChange={(e) => {
                    setQueryAction(e.target.value);
                  }}
                  defaultValue={query}
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
                    onClick={handleSubmitSearch}
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
              ref={accountDropdown.anchorRef}
              onClick={() => {
                accountDropdown.handleToggle();
                cartDropdown.handleClose();
              }}
              style={{ display: "inline-block", margin: "0 5px 0 0" }}
            >
              <Icon name="FaUser" />
            </Button>
            <Button
              variant="no-outline-icon"
              ref={cartDropdown.anchorRef}
              onClick={() => {
                cartDropdown.handleToggle();
                accountDropdown.handleClose();
              }}
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
        anchorElement={accountDropdown.anchorRef.current}
        open={accountDropdown.open}
        onClose={() => console.log("close")}
        textAlign="right"
        width={"220px"}
        items={
          <Box
            display="flex"
            flexDirection="column"
            gap={theme.spacing[5]}
            padding={theme.spacing[3]}
          >
            {!loggedIn ? (
              <>
                <Box
                  style={{
                    borderBottom: `1px solid ${theme.colors.palette.black[300]}`,
                    paddingBottom: theme.spacing[3],
                  }}
                >
                  <Typography variant="h6">Not Signed In</Typography>
                </Box>
                <Box
                  style={{ textAlign: "right" }}
                  onClick={() => {
                    router.push("/auth/login");
                  }}
                >
                  <Typography variant="subtitle2">Login</Typography>
                </Box>
              </>
            ) : (
              <>
                <Box>
                  <Typography variant="subtitle1">{user?.email}</Typography>
                </Box>
                <Box style={{ textAlign: "right" }}>
                  <Typography variant="subtitle2">My Account</Typography>
                </Box>
                <Box style={{ textAlign: "right" }}>
                  <Typography variant="subtitle2">My Orders</Typography>
                </Box>
                <Box style={{ textAlign: "right" }}>
                  <Typography variant="subtitle2">My Wishlist</Typography>
                </Box>
                <Box
                  style={{ textAlign: "right" }}
                  onClick={async () => await logout()}
                >
                  <Typography variant="subtitle2">Logout</Typography>
                </Box>
              </>
            )}
          </Box>
        }
      />
      <DropdownMenu
        animation="in"
        position="right"
        anchorElement={cartDropdown.anchorRef.current}
        open={cartDropdown.open}
        onClose={() => console.log("close")}
        items={
          <Box>
            <CartDropdown items={user?.cart as any} />
          </Box>
        }
      />
    </>
  );
};

export { Header };
