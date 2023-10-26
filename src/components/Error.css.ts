import { style } from "@vanilla-extract/css";
import { button, fullCenteredContainer } from "../style/common.css";
import { theme } from "../style/theme.css";

export const errorContainer = fullCenteredContainer;
export const retryButton = style([
  button,
  {
    marginTop: theme.spacing.large,
    background: theme.colors.darkGray,
    color: theme.colors.text.light,
  },
]);
