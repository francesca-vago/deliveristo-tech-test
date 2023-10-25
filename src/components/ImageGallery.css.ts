import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const gridContainer = style({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
  gap: theme.spacing.small,
  justifyItems: "center",
  listStyle: "none",
  padding: `0 ${theme.spacing.medium}`,
});

export const dogImage = style({
  borderRadius: theme.spacing.small,
  width: "100%",
  aspectRatio: "3 / 4",
  objectFit: "cover",
});
