import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const form = style({
  display: "flex",
  gap: theme.spacing.small,
});

export const radio = style({
  display: "none",
});

export const radioLabel = style({
  display: "block",
  color: theme.colors.text.dark,
  padding: theme.spacing.small,
  borderRadius: theme.spacing.small,
  cursor: "pointer",
  selectors: {
    "input:checked + &": {
      cursor: "default",
      background: theme.colors.darkGray,
      color: theme.colors.text.light,
    },
  },
});
