import { EmbedBuilder } from "discord.js";
import { Command } from "./types";

export const config: Command = {
    json: {
        name: 'config',
        description: 'Configures the bot'
    },
    run: async (interaction) => {
        const embed = new EmbedBuilder()
            .setTitle('Configuration Details')
            .setDescription(`Head over to the [web panel](${process.env.PANEL_URL}) to configure the bot.`)
        await interaction.reply({ embeds: [embed] })
    }
}