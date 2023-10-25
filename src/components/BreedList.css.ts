import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

const toggleButtonWidth = 15;

export const breedList = style({
  listStyle: "none",
  margin: 0,
  padding: 0,
  marginLeft: toggleButtonWidth,
});

export const subBreedList = style([
  breedList,
  {
    marginLeft: theme.spacing.medium,
  },
]);

const textButton = style({
  background: "none",
  border: "none",
  cursor: "pointer",
});

export const breedButton = style([
  textButton,
  {
    marginBottom: theme.spacing.medium,
    ":hover": {
      textDecoration: "underline",
    },
  },
]);

export const toggleSubBreedsButton = style([
  textButton,
  {
    fontSize: theme.font.size.small,
    width: toggleButtonWidth,
    padding: 0,
    marginLeft: -toggleButtonWidth,
  },
]);
