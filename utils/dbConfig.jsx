import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon('postgresql://fundfolio_owner:CLDm08XyVtcp@ep-muddy-morning-a540a5xl.us-east-2.aws.neon.tech/fundfolio?sslmode=require');
export const db = drizzle(sql, { schema });
