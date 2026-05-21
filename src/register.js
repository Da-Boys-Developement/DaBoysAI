import { Command, Option, register } from 'discord-hono'

const commands = [
  new Command('prompt', "Ask a prompt").options(new Option('prompt', 'Your prompt'))
]

register(
  commands,
  process.env.DISCORD_APPLICATION_ID,
  process.env.DISCORD_TOKEN,
)