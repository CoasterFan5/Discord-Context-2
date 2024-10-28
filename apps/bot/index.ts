import { currencyTable } from "@repo/database/schema"
import { commands } from "./commands"
import { db } from "@repo/database"
import { Client } from "discord.js";

const client = new Client({
    intents: [
        "GuildMessages",
    ]
})

client.on('ready', () => {
    console.log('Bot is ready')
})

const currencies = await db.select().from(currencyTable)
console.log(currencies)

client.login(process.env.TOKEN!)
