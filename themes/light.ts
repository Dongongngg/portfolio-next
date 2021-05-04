import { createMuiTheme, responsiveFontSizes, Theme } from '@material-ui/core/styles';

let lightTheme: Theme = createMuiTheme({
  spacing: 8,
  palette: {
    text: {
      primary: '#303030',
      secondary: '#787586',
      disabled: '#ffffff',
    },
    primary: {
      main: '#303030',
      light: '#787586',
    },
    secondary: {
      main: '#8685EF',
      light: '#C6C0F8',
    },
    divider: '#787586',
    background: {
      default: '#fff',
      paper: '#ededed',
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

lightTheme = responsiveFontSizes(lightTheme);

export default lightTheme;
