import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const gridContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
  gap: theme.spacing.small,
  justifyItems: "center",
  listStyle: "none",
  padding: `0 ${theme.spacing.medium}`,
});
