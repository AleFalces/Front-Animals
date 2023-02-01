import { extendTheme } from "@chakra-ui/react";
import "./styles.css";

export const theme = extendTheme({
  colors: {
    brand: {
      green: {
        100: "#bae8e8",
        200: "#e3f6f5",
        300: "#40c2bb"
      },
      orange: "#f9bc60",
      background: "#fffffe",
      darkBlue: "#272343",
    },
  },

  fonts: {
    heading: "Montserrat",
    body: "Inter",
   
  },

  linkTheme: {
    variant: {
      custom: {
        textDecoration: "none",
      },
    },
  },
});
