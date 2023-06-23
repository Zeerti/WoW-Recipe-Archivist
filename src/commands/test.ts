import * as app from "../app.js"
import { ModalBuilder } from "@discordjs/builders"

export default new app.Command({
  name: "test",
  description: "The test command",
  channelType: "all",
  isSlash: true,
  aliases: ["this"],
  async run(message) {
    // todo: code here
    const modal = new ModalBuilder()
      .setCustomId("Test")
      .setTitle("Test")
    return message.send("something")
  },
})