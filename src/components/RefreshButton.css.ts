import { style } from "@vanilla-extract/css";
import { theme } from "../style/theme.css";
import { button } from "../style/common.css";

export const refreshButton = style([
  button,
  {
    background: theme.colors.primary,
    alignSelf: "center",
  },
]);
