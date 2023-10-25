import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const loaderContainer = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing.medium,
});

export const loader = style({
  width: 50,
});
