import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const dogImageContainer = style({
  width: "100%",
  height: "100%",
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  // This is necessary to prevent the container from growing beyond the maximum height
  // https://css-tricks.com/preventing-a-grid-blowout/
  minHeight: "0",
});

export const dogImage = style({
  maxHeight: `calc(100% - 2 * ${theme.spacing.xlarge})`,
  minHeight: "50%",
  maxWidth: "100%",
  objectFit: "contain",
  margin: theme.spacing.xlarge,
  borderRadius: theme.spacing.medium,
});
