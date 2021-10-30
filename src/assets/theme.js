import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

const theme = createTheme ({
    typography: {
      h1: {
        fontSize: "5rem",
        fontWeight: 800,
        lineHeight: "4rem"
      },
      h2: {
        fontSize: "3.5rem",
        fontStyle: "bold",
      },
      h3: {
        fontSize: "2.5rem",
      },
    },
    palette: {
      background: {
        default: "#b196e9",
      },
      primary: {
        main: "#bb44e2",
      },
      secondary: {
        main: "#e32bb1",
      },
      text: {
        primary: "#000000",
        secondary: "#FFFFFF",
      },
    },
  }
);

export default theme;
