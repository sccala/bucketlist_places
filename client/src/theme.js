import { createTheme } from '@material-ui/core/styles'

export const fontFamily = [
  'Roboto',
  'sans-serif',
 
].join(',')

export const theme = createTheme({
  typography: {
    fontFamily: fontFamily,
  },
  mixins: {
    // ツールバーの高さ
    toolbar: {
      minHeight: 64,
    },
  },
  props: {
    MuiCheckbox: {
      color: 'primary',
    },
    MuiList: {
      dense: true,
    },
    MuiTable: {
      size: 'small',
    },
    MuiTextField: {
      variant: 'outlined',
    },
  },
})

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#ad7800',
    },
    secondary: {
      main: '#740606',
    },
    text: {
      primary: '#23263A',
      secondary: '#8e8e8e',
    },
    background: {
      default: '#C7C7C7',
      paper: '#e0e0e0',
    },
  },
})

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#a87103',
    },
    secondary: {
      main: '#740606',
    },
    text: {
      primary: '#c7c7c7',
      secondary: '#8e8e8e',
    },
    background: {
      default: '#1b1c29',
      paper: '#141623',
    },
  },
})
