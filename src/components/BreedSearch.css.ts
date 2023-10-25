import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const breedSearchContainer = style({
  height: "100vh",
  overflowY: "auto",
  overflowX: "hidden",
  padding: theme.spacing.large,
  paddingTop: 0,
  flexShrink: 0,
  position: "sticky",
  top: 0,
  scrollbarGutter: "stable",
});
