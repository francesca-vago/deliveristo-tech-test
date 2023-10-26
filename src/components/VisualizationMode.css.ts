import { style } from "@vanilla-extract/css";
import { theme } from "../style/theme.css";
import { button } from "../style/common.css";

export const form = style({
  display: "flex",
  gap: theme.spacing.small,
});

export const radio = style({
  display: "none",
});

export const radioLabel = style([
  button,
  {
    display: "block",
    color: theme.colors.text.dark,
    selectors: {
      "input:checked + &": {
        cursor: "default",
        background: theme.colors.darkGray,
        color: theme.colors.text.light,
      },
    },
  },
]);
