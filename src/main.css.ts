import { globalStyle } from "@vanilla-extract/css";
import { theme } from "./theme.css";

globalStyle("body", {
  backgroundColor: theme.colors.lightGray,
  fontFamily: theme.font.text,
  fontSize: theme.font.size.medium,
  color: theme.colors.text.dark,
});

globalStyle("img", {
  display: "block",
});

globalStyle("#root", {
  padding: theme.spacing.xlarge,
});
