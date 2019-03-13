import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1600,
    },
  },
  typography: { useNextVariants: true },
  palette: { background: { secondary: '#f5f5f5' } },
});
