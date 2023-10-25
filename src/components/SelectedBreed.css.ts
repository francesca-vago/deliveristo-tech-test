import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const imageContainer = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: theme.spacing.large,
});

export const fullHeightImageContainer = style({
  height: "100vh",
});

export const header = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: theme.spacing.large,
});
