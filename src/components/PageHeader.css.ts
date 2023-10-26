import { style } from "@vanilla-extract/css";
import { theme } from "../style/theme.css";
import { breakpoints } from "../style/breakpoints.css";

export const header = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
  marginBottom: theme.spacing.large,
  "@media": {
    [breakpoints.desktop]: {
      flexDirection: "row",
    },
  },
});
