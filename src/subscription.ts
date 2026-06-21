import { defineGkdSubscription } from "@gkd-kit/define";
import { batchImportApps } from "@gkd-kit/tools";

import categories from "./categories.ts";
import globalGroups from "./globalGroups.ts";

export default defineGkdSubscription({
  id: 55676,
  name: "gkd-subscription",
  version: 20260615,
  author: "jhongyu",
  checkUpdateUrl: "./gkd.version.json",
  supportUri: "https://github.com/jhongyu/gkd-subscription",
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
