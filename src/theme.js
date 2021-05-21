import { createMuiTheme } from "@material-ui/core/styles";
import { faIR } from '@material-ui/core/locale';

export const colors = {
  primary: {
    main: "#ce1919",
    dark: "#901111",
    light: "#ff8f8f",
    lighter: "#ffc7c7"
  }
};

export const sizing = {
  space: "12px",
  doubleSpace: "24px",
  metric: "px",
  phone: "600px"
};

const theme = createMuiTheme({
  direction: "rtl",
  palette: {
    ...colors
  },
  typography: {
    fontFamily: 'BBCNassim'
  },
  faIR
});

theme.spacing(2);

export default theme;