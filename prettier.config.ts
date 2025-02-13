import { type Config } from "prettier";

const config: Config = {
  trailingComma: "none",
  tabWidth: 2,
  useTabs: false,
  bracketSameLine: true,
  astroOrganizeImportsMode: "RemoveUnused" // or "SortAndCombine" or "RemoveUnused"
};

export default config;
