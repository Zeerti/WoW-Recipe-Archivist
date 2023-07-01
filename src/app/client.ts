import discord, { Client, GatewayIntentBits } from "discord.js"

export const client = new discord.Client({
  intents: process.env.BOT_INTENTS
    ? process.env.BOT_INTENTS.split(/[;|.,\s+]+/).map(
        (intent) => GatewayIntentBits[intent as keyof typeof GatewayIntentBits]
      )
    : [],
})

export function getClient() {
  if (!client.isReady()) throw new Error("The Discord client is not yet ready.")

  return client
}

export default client
