import { globalStyle } from "@vanilla-extract/css";
import { theme } from "./theme.css";

globalStyle("*", {
  boxSizing: "border-box",
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
  // Prevents the appearance of the scrollbar from causing the content to shift
  scrollbarGutter: "stable",
});

globalStyle("img", {
  display: "block",
});
