import { style } from "@vanilla-extract/css";
import { breakpoints } from "../style/breakpoints.css";

export const main = style({
  "@media": {
    [breakpoints.desktop]: {
      display: "flex",
    },
  },
});
