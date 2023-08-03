import { defineConfig, mergeConfig } from "vitest/config";
import configShared from "../../vitest.shared.js";

export default mergeConfig(configShared, defineConfig({}));
