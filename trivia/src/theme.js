import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        size: "large",
      },
      styleOverrides: {
        root: {
            width: "100%",
            height: "80px"
        },
      },
    },
  },
});

export default theme;