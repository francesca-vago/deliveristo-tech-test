import { createGlobalTheme, globalFontFace } from "@vanilla-extract/css";

const contentFont = "Poppins";

export const theme = createGlobalTheme(":root", {
  colors: {
    lightGray: "#F2F2F2",
    gray: "#E6E6E6",
    darkGray: "#BEBEBE",
    text: {
      dark: "#171717",
      light: "#736F6F",
    },
  },
  font: {
    text: contentFont,
    weight: {
      light: "300",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    size: {
      small: "0.875rem",
      medium: "1rem",
      large: "1.5rem",
    },
  },
  spacing: {
    xsmall: "0.25rem",
    small: "0.5rem",
    medium: "1rem",
    large: "1.5rem",
    xlarge: "2rem",
  },
});