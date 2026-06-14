import { defineGkdSubscription } from "@gkd-kit/define";
import { batchImportApps } from "@gkd-kit/tools";

import categories from "./categories";
import globalGroups from "./globalGroups";

export default defineGkdSubscription({
  id: 55676,
  name: "gkd-subscription",
  version: 20260602,
  author: "jhongyu",
  checkUpdateUrl: "./gkd.version.json5",
  supportUri: "https://github.com/jhongyu/gkd-subscription",
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
