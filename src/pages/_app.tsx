import { AppLayout } from "components/AppLayout";
import type { AppProps } from "next/app";
import { useMemo } from "react";

// Styles
import { ThemeProvider } from "styled-components";
import { makeTheme } from "styles/theme";

/**
 * Main App component that renders before any of the pages
 * @see https://nextjs.org/docs/basic-features/typescript#custom-app
 */
const App = ({ Component, pageProps }: AppProps) => {
  const theme = useMemo(() => makeTheme("light"), []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </>
  );
};

export default App;
