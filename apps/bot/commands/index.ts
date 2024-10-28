import { config } from "./config";
import { ping } from "./ping";
import { Command } from "./types";





export const commands: Command[] = [
    ping,
    config
]


