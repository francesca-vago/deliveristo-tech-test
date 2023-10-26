import { createVar, fallbackVar, style } from "@vanilla-extract/css";
import { theme } from "../style/theme.css";
import { breakpoints } from "../style/breakpoints.css";

export const logoHeading = style({
  margin: theme.spacing.small,
});

export const logo = style({
  height: 70,
  "@media": {
    [breakpoints.mobile]: {
      display: "none",
    },
  },
});

const maskVar = createVar("mask");
const mask = `radial-gradient(at 100% 0, #000 70%, #0000 71%) content-box 100% 0/${fallbackVar(
  maskVar,
  "0vh 0vh"
)} no-repeat`;

export const breedSearchContainer = style({
  background: "white",
  zIndex: 1,
  width: "100%",
  height: "100vh",
  overflowY: "auto",
  overflowX: "hidden",
  flexShrink: 0,
  position: "fixed",
  top: 0,
  scrollbarGutter: "stable",
  mask,
  maskComposite: "exclude",
  WebkitMask: mask,
  WebkitMaskComposite: "xor",
  pointerEvents: "none",
  transition: "500ms",
  "@media": {
    [breakpoints.desktop]: {
      background: "none",
      pointerEvents: "all",
      width: "auto",
      position: "sticky",
      mask: "none",
      WebkitMask: "none",
      transition: "none",
    },
  },
});

export const breedSearchContainerOpen = style({
  pointerEvents: "all",
  vars: {
    [maskVar]: "150vh 150vh",
  },
});

export const breedSearchHeader = style({
  position: "sticky",
  top: 0,
  padding: `${theme.spacing.large} ${theme.spacing.large} 0`,
  background: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  "@media": {
    [breakpoints.desktop]: {
      background: theme.colors.lightGray,
    },
  },
});

export const closeButton = style({
  background: "none",
  border: "none",
  alignSelf: "flex-end",
  "@media": {
    [breakpoints.desktop]: {
      display: "none",
    },
  },
});
