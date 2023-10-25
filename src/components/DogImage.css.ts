import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const dogImage = style({
  borderRadius: theme.spacing.small,
  width: "100%",
  aspectRatio: "3 / 4",
  objectFit: "cover",
});
