import fs from "node:fs/promises";
import path from "node:path";

import subscription from "../src/subscription.ts";

await fs.writeFile(
  path.join(import.meta.dirname, "..", "dist", "gkd.json"),
  JSON.stringify(subscription),
);

await fs.writeFile(
  path.join(import.meta.dirname, "..", "dist", "gkd.version.json"),
  JSON.stringify({ id: subscription.id, version: subscription.version }),
);
