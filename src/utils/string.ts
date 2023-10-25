export const upperCaseWords = (text: string) =>
  text
    .split(" ")
    .map((word) => {
      const firstLetter = word.substring(0, 1);
      const rest = word.substring(1);

      return `${firstLetter.toUpperCase()}${rest}`;
    })
    .join(" ");
