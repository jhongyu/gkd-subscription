import { checkSubscription, checkApiVersion } from "@gkd-kit/tools";

import subscription from "../src/subscription.ts";

await checkApiVersion();

checkSubscription(subscription);
