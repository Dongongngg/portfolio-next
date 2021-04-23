import { createMuiTheme, responsiveFontSizes, Theme } from '@material-ui/core/styles';

let theme: Theme = createMuiTheme({
  spacing: 8,
  palette: {
    text: {
      primary: '#303030',
      secondary: '#787586',
      disabled: '#fff',
    },
    primary: {
      main: '#989898',
      light: '#B3B1C3',
    },
    secondary: {
      main: '#8685EF',
      light: '#F2ECFF',
    },
    divider: '#787586',
    background: {
      default: '#fff',
      paper: '#ededed',
    },
  },
  typography: {
    fontSize: 14,
    //  h1: title
    h1: {
      marginBottom: '0.75rem',
      fontFamily: "'Roboto Slab', serif",
    },
    //  h2: subtitle
    h2: {
      marginBottom: '1.5rem',
      fontFamily: "'Roboto Slab', serif",
      '@media(max-width:960px)': {
        marginBottom: '1rem',
      },
    },
    h3: {
      fontWeight: 400,
      marginBottom: '0.5rem',
      fontFamily: "'Roboto Slab', serif",
    },
    //  h4: 3rd title
    h4: { fontWeight: 400, fontFamily: "'Catamaran', sans-serif" },
    //  h5: card title or non-paper/card content, display as p
    h5: {
      fontWeight: 400,
      lineHeight: 1.5,
      fontFamily: "'Catamaran', sans-serif",
    },
    //  h6: card sub-title
    h6: { fontFamily: "'Catamaran', sans-serif", fontWeight: 400 },
    body1: { fontFamily: "'Catamaran', sans-serif" },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
