import '../styles/globals.css';
import Head from 'next/head';
import React from 'react';
//  theme
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
//  theme config
import light from '../themes/light';
import dark from '../themes/dark';

import ThemeContext from '../contexts/theme';

function MyApp({ Component, pageProps }) {
  const [themeName, setThemeName] = React.useState('light');
  return (
    <>
      <Head>
        <title>Jingfu Dong's portfolio</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
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
