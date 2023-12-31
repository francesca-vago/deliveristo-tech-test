import { style } from "@vanilla-extract/css";
import { theme } from "../style/theme.css";

const toggleButtonWidth = 15;

export const breedList = style({
  listStyle: "none",
  margin: 0,
  padding: theme.spacing.large,
  paddingTop: 0,
  marginLeft: toggleButtonWidth,
});

export const subBreedList = style([
  breedList,
  {
    padding: 0,
    marginLeft: theme.spacing.medium,
  },
]);

const textButton = style({
  background: "none",
  border: "none",
  cursor: "pointer",
});

export const selectedBreedButton = style({
  textDecoration: "underline",
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
