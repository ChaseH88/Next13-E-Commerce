import { Box, Header, TopBar } from "components";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Box>
      <TopBar
        location="Mobile, AL"
        message="Check out our deals on the best apparel and gear!"
      />
      <Header />
      <Box className="content">{children}</Box>
      <footer>footer</footer>
    </Box>
  );
};

export { AppLayout };
