import { style } from "@vanilla-extract/css";
import { theme } from "./theme.css";

export const fullCenteredContainer = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const button = style({
  border: "none",
  borderRadius: theme.spacing.medium,
  padding: `${theme.spacing.small} ${theme.spacing.medium}`,
  cursor: "pointer",
});
