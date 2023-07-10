import * as app from "../app.js"

export default new app.SlashCommand({
  builder: {
    name: "ping",
    description: "Ping pong command",
  },
  deploy: {
    global: false,
    guilds: ["1119534086848008252"],
  },
  run: (context) => {
    context.reply("🏓 Pong")
  },
})