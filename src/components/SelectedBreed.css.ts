import { style } from "@vanilla-extract/css";
import { theme } from "../style/theme.css";
import { breakpoints } from "../style/breakpoints.css";

export const imageContainer = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: theme.spacing.large,
});

export const fullHeightImageContainer = style({
  "@media": {
    [breakpoints.desktop]: {
      height: "100vh",
    },
  },
});
