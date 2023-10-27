import { Admin, defaultTheme } from "react-admin";
import indigo from "@mui/material/colors/indigo";
import pink from "@mui/material/colors/pink";
import red from "@mui/material/colors/red";

export const myTheme = {
  ...defaultTheme,
  palette: {
    mode: "dark",
    primary: indigo,
    secondary: pink,
    error: red,
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
  components: {
    ...defaultTheme.components,
    MuiTextFiled: {
      defaultProps: {
        variant: "outlined",
      },
    },
  },
};
export default myTheme;