import { style } from "@vanilla-extract/css";
import { fullCenteredContainer } from "../style/common.css";
import { theme } from "../style/theme.css";
import { breakpoints } from "../style/breakpoints.css";

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
  width: "30vw",
  top: 10,
  right: "10%",
  transform: "rotate(65deg)",
  "@media": {
    [breakpoints.desktop]: {
      width: "10vw",
      transform: `rotateX(-180deg) rotate(-20deg)`,
      left: "clamp(50px, 30%, 30%)",
      top: "55%",
    },
  },
});
