import { defineProject } from "vitest/config";

export default {
  /** Or some other shared config, can even be a package */
  test: {
    environment: "node",
  },
};
