import { describe, expect, test } from "vitest";
import { formatBreed, upperCaseWords } from "./string";

describe("utils/string", () => {
  describe("upperCaseWords", () => {
    test("should do nothing if the text is empty", () => {
      const result = upperCaseWords("");

      expect(result).toBe("");
    });

    test("should do nothing if the text is only whitespaces", () => {
      const result = upperCaseWords("   ");

      expect(result).toBe("   ");
    });

    test("should makes the first letter of every word uppercase", () => {
      const result = upperCaseWords("australian shepherd");

      expect(result).toBe("Australian Shepherd");
    });
  });
  describe("formatBreed", () => {
    test("should format a breed name with first letter upper cased", () => {
      const result = formatBreed({ breed: "bulldog", subBreed: "french" });

      expect(result).toBe("French Bulldog");
    });

    test("should format a breed name without sub breed without trailing spaces", () => {
      const result = formatBreed({ breed: "shiba", subBreed: null });

      expect(result).toBe("Shiba");
    });
  });
});
