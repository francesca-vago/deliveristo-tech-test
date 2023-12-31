import { style } from "@vanilla-extract/css";
import { theme } from "../style/theme.css";
import { fullCenteredContainer } from "../style/common.css";

export const loaderContainer = style([
  fullCenteredContainer,
  {
    margin: theme.spacing.medium,
    gap: theme.spacing.medium,
  },
]);

export const loader = style({
  width: 50,
});
