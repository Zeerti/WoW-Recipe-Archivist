import * as app from "../app.js"

export default new app.Command({
  name: "create",
  description: "The create command",
  channelType: "all",
  async run(message) {
    // todo: code here
    return message.send("This is a command to create something!")
  },
})
