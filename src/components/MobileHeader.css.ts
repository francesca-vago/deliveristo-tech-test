import { style } from "@vanilla-extract/css";
import { button } from "../style/common.css";
import { breakpoints } from "../style/breakpoints.css";
import { theme } from "../style/theme.css";

export const header = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `0 ${theme.spacing.large}`,
  "@media": {
    [breakpoints.desktop]: {
      display: "none",
    },
  },
});

export const logo = style({
  height: 70,
});

export const searchButton = style([button]);
