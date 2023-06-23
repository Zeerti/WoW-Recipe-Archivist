import discord, {  } from "discord.js"


export const client = new discord.Client({
  // intents: process.env.BOT_INTENTS
  //   ? process.env.BOT_INTENTS.split(/[;|.,\s+]+/).map(
  //       (intent) => {
  //         console.log("Flags:" + discord.Intents.FLAGS)
  //         return discord.Intents.FLAGS[intent as discord.IntentsString]
  //         // return discord.GatewayIntentBits[intent as discord.IntentsString]
  //       }
  //     )
  //   : [],
  intents: 517543971904
    
})

export function getClient() {
  if (!client.isReady()) throw new Error("The Discord client is not yet ready.")

  return client
}

export default client
