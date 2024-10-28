import { currencyTable } from "@repo/database/schema"
import { commands } from "./commands"
import { db } from "@repo/database"

const currencies = await db.select().from(currencyTable)
console.log(currencies)