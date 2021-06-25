import '../styles/globals.css';
import Head from 'next/head';
import React from 'react';
//  theme
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
//  theme config
import light from '../themes/light';
import dark from '../themes/dark';
import theme from '../themes/light';

import ThemeContext from '../contexts/theme';

function MyApp({ Component, pageProps }) {
  const [themeName, setThemeName] = React.useState('light');
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const keywords =
    'developer,full-stack developer,web developer,react,typescript,nextjs,nodejs,javescript,website,landing page';

  return (
    <>
      <Head>
        <title>Jingfu Dong's portfolio</title>
        <meta name='theme-color' content={theme.palette.secondary.main} />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='keywords' content={keywords} />
      </Head>
      <ThemeContext.Provider value={[themeName, setThemeName]}>
        <ThemeProvider theme={themeName === 'light' ? light : dark}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default MyApp;
