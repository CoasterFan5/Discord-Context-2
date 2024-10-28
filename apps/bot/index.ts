import { currencyTable } from "@repo/database/schema"
import { commands } from "./commands"
import { db } from "@repo/database"
import { Client } from "discord.js";
import { Command } from "./commands/types";

const client = new Client({
    intents: [
        "GuildMessages",
    ]
})

const commandMap: { [key: string]: Command } = {}
for (const command of commands) {
    commandMap[command.json.name] = command
}

client.on('ready', () => {
    console.log('Bot is ready')
})

client.on('interactionCreate', async (interaction) => {
    if (interaction.isCommand()) {
        try {
            const command = commandMap[interaction.commandName]
            await command.run(interaction)
        } catch (e) {
            interaction.reply('An error occurred')
        }
    }
})

const currencies = await db.select().from(currencyTable)
console.log(currencies)

client.login(process.env.TOKEN!)
