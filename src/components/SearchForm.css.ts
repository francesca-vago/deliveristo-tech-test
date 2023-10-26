import { style } from "@vanilla-extract/css";
import { theme } from "../style/theme.css";
import { breakpoints } from "../style/breakpoints.css";

export const formContainer = style({
  background: "white",
  padding: `${theme.spacing.medium} 0`,
  "@media": {
    [breakpoints.desktop]: {
      backgroundColor: theme.colors.lightGray,
      padding: `${theme.spacing.xlarge} 0 ${theme.spacing.medium}`,
    },
  },
});

export const searchForm = style({
  backgroundColor: theme.colors.gray,
  borderRadius: theme.spacing.small,
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
});

export const searchInput = style({
  backgroundColor: "inherit",
  border: "none",
  padding: `${theme.spacing.small} ${theme.spacing.medium}`,
  borderRadius: `${theme.spacing.small}`,
  flexGrow: 1,
  outline: "none",
  selectors: {
    "&::-ms-clear, &::-ms-reveal": {
      display: "none",
      width: 0,
      height: 0,
    },
    "&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":
      {
        display: "none",
      },
  },
});

export const searchButton = style({
  border: "none",
  backgroundColor: "transparent",
});
