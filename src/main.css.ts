import { globalStyle } from "@vanilla-extract/css";
import { theme } from "./style/theme.css";

globalStyle("*", {
  boxSizing: "border-box",
  "@media": {
    "(prefers-reduced-motion)": {
      transitionDuration: "0s !important",
      animationDuration: "0s !important",
    },
  },
});

globalStyle("*:before, *:after", {
  boxSizing: "inherit",
});

globalStyle("body", {
  backgroundColor: theme.colors.lightGray,
  fontFamily: theme.font.text,
  fontSize: theme.font.size.medium,
  color: theme.colors.text.dark,
});

globalStyle("body, html", {
  // Prevents the appearance of the scrollbar from shifting the content
  scrollbarGutter: "stable",
});

globalStyle("img", {
  display: "block",
});
