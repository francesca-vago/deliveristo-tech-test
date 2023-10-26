import { style } from "@vanilla-extract/css";
import { fullCenteredContainer } from "../style/common.css";
import { theme } from "../style/theme.css";

export const container = style([
  fullCenteredContainer,
  {
    height: "80vh",
    position: "relative",
  },
]);

export const welcomeMessage = style({
  fontSize: theme.font.size.large,
});

export const gettingStartedMessage = style({
  marginTop: theme.spacing.medium,
});

export const arrow = style({
  position: "absolute",
  transform: `rotateX(-180deg) rotate(-20deg)`,
  width: "10vw",
  left: "clamp(50px, 30%, 30%)",
  top: "55%",
});
