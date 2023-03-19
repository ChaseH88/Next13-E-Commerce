import type { AppProps } from "next/app";
import { useMemo } from "react";

// Redux
import { Provider } from "react-redux";
import { store } from "state";

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
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
      <GlobalStyle />
    </>
  );
};

export default App;
