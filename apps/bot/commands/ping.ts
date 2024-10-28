import { Command } from "./types";

export const ping: Command = {
    json: {
        name: 'ping',
        description: 'Pings the bot'
    },
    run: async (interaction) => {
        await interaction.reply('pong')
    }
}