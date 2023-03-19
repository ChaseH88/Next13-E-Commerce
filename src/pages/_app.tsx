import type { AppProps } from "next/app";
import { useMemo } from "react";

// Redux
import { wrapper } from "state";

// Styles
import { ThemeProvider } from "styled-components";
import { makeTheme } from "styles/theme";
import { GlobalStyle } from "styles/_global-style";

/**
 * Main App component that renders before any of the pages
 * @see https://nextjs.org/docs/basic-features/typescript#custom-app
 */
const App = ({ Component, pageProps }: AppProps) => {
  const theme = useMemo(() => makeTheme("light"), []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
};

export default wrapper.withRedux(App);
