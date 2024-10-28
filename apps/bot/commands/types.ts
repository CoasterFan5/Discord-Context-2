import type { CommandInteraction } from "discord.js"

export type Command = {
    json: {
        name: string
        description: string
    },
    run: (interaction: CommandInteraction) => Promise<void>
}