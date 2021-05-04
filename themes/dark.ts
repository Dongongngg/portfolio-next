import { createMuiTheme, responsiveFontSizes, Theme } from '@material-ui/core/styles';

let darkTheme: Theme = createMuiTheme({
  spacing: 8,
  palette: {
    type: 'dark',
    text: {
      primary: '#FAF8FF',
      secondary: '#ACA9BB',
      disabled: '#FAF8FF',
    },
    primary: {
      main: '#474554',
      light: '#787586',
    },
    secondary: {
      main: '#918CB8',
      light: '#C6C0F8',
    },
  },
  typography: {
    fontSize: 14,
    h1: {
      marginBottom: '0.75rem',
      fontFamily: "'Catamaran', sans-serif",
      fontSize: 33,
    },
    h2: {
      marginBottom: '1.5rem',
      fontFamily: "'PT Sans', sans-serif",
      fontSize: 33,
      '@media(max-width:960px)': {
        marginBottom: '1rem',
      },
    },

    h3: {
      fontWeight: 400,
      lineHeight: 1.4,
      fontFamily: "'PT Sans', sans-serif",
      fontSize: 24,
    },
    h4: { fontWeight: 400, lineHeight: 1.2, fontFamily: "'Catamaran', sans-serif", fontSize: 22 },

    // h5: {
    //   fontWeight: 400,
    //   lineHeight: 1.5,
    //   fontFamily: "'Catamaran', sans-serif",
    // },
    h6: { fontFamily: "'Catamaran', sans-serif", fontWeight: 400 },
    body1: {
      fontWeight: 300,
      lineHeight: 1.2,
      fontFamily: "'PT Sans', sans-serif",
      fontSize: 22,
      '@media(max-width:960px)': {
        lineHeight: 1.4,
      },
    },
    body2: {
      fontWeight: 100,
      lineHeight: 1.2,
      fontFamily: "'Catamaran', sans-serif",
      fontSize: 20,
    },
    caption: {
      fontWeight: 400,
      lineHeight: 1.4,
      fontFamily: "'PT Sans', sans-serif",
      fontSize: 18,
    },
  },
});

darkTheme = responsiveFontSizes(darkTheme);

export default darkTheme;
