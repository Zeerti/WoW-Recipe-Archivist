
import { Client, Intents } from 'discord.js';

const botIntents = process.env.BOT_INTENTS?.split(/[;|.,\s+]+/);
const intents = botIntents
  ? botIntents.map((intent) => {
      const intentName = intent.toUpperCase();
      return Intents.FLAGS[intentName as keyof typeof Intents.FLAGS];
    })
  : [];

export const client = new Client({ intents });
