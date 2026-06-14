import { checkSubscription, checkApiVersion } from "@gkd-kit/tools";

import subscription from "../src/subscription";

await checkApiVersion();

checkSubscription(subscription);
