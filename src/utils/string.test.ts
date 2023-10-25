import { describe, expect, test } from "vitest";
import { upperCaseWords } from "./string";

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
});
