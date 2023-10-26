import { style } from "@vanilla-extract/css";
import { theme } from "../style/theme.css";

export const logoHeading = style({
  margin: theme.spacing.small,
});

export const logo = style({
  height: 70,
});

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

export const breedSearchHeader = style({
  position: "sticky",
  top: 0,
  paddingTop: theme.spacing.large,
  background: theme.colors.lightGray,
});
