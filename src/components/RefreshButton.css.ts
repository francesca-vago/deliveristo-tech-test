import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const refreshButton = style({
  border: "none",
  background: theme.colors.primary,
  borderRadius: theme.spacing.medium,
  padding: `${theme.spacing.small} ${theme.spacing.medium}`,
  cursor: "pointer",
  alignSelf: "center",
});
