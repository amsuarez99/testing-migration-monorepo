import { test, expect } from "vitest";
import { add } from "./add.js";

test("add", () => {
  expect(add(1, 1)).toBe(2);
});
