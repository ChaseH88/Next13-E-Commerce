import { Box } from "components/Box";
import { Typography } from "components/Typography";
import { useTheme } from "styled-components";
import { AuthLayoutStyled } from "./styles";

interface AuthLayoutProps {
  children: React.ReactNode;
  side?: "left" | "right";
}

const AuthLayout = ({ children, side = "left" }: AuthLayoutProps) => {
  const theme = useTheme();
  return (
    <AuthLayoutStyled>
      <Box
        className="wrapper"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="70vh"
        width="60vw"
      >
        <Box
          flex={"1 1 50%"}
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
          style={{
            order: side === "left" ? 2 : 1,
            backgroundColor: theme.colors.palette.white[100],
          }}
        >
          <Typography variant="h1">FitZip</Typography>
        </Box>
        <Box
          flex={"1 1 50%"}
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          background={theme.colors.palette.black[100]}
          style={{ order: side === "left" ? 1 : 2 }}
        >
          {children}
        </Box>
      </Box>
    </AuthLayoutStyled>
  );
};

export { AuthLayout };
