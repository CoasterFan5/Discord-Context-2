import { REST, Routes } from "discord.js"
import { commands } from "../commands"

export const commandDeployDev = async () => {
    console.log('Deploying to development')

    const commandList = commands.map(command => {
        return command.json
    })

    const rest = new REST({ version: '10' }).setToken(process.env.TOKEN!)

    await rest.put(Routes.applicationGuildCommands(process.env.BOT_ID!, process.env.DEV_SERVER_ID!), { body: commandList })

    console.log('Deployed to development')

}

await commandDeployDev()