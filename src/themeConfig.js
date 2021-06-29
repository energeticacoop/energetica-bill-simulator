import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: 36,
      marginTop: 50,
      marginBottom: 50
    },
    h3: {
      fontSize: 26,
      marginTop: 20,
      fontWeight: 500

    },
    body2: {
      color: "grey"
    }
  },
  palette: {
    primary: {
      main: '#499944'
    }
  },
  props: {
    MuiTextField: {
      variant: 'outlined',
      placeholder: '0',
      margin: 'normal',
      fullWidth: true
    },
    MuiBox: {
      margin: 100
    }
  },
  overrides: {
    MuiDivider: {
      root: {
        marginBottom: 20
      }
    },
    MuiPaper: {
      root: {
        padding: 30
      }
    }
  }
})


export default theme
