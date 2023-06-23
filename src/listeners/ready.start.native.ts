import figlet from "figlet"
import boxen from "boxen"
import chalk from "chalk"

import * as app from "../app.js"

import { filename } from "dirname-filename-esm"

const __filename = filename(import.meta)

const listener: app.Listener<"ready"> = {
  event: "ready",
  description: "Put slash commands to all guilds",
  once: true,
  async run(client) {
    await app.deploySlashCommand(client)

    app.log(
      `Ok i'm ready! ${chalk.blue(
        "My default prefix is"
      )} ${chalk.bgBlueBright.black(process.env.BOT_PREFIX)}`
    )

    figlet(app.fetchPackageJson().name, (err, value) => {
      if (err) return app.error(err, __filename, true)

      console.log(
        boxen(chalk.blueBright(value), {
          float: "center",
          borderStyle: {
            topLeft: " ",
            topRight: " ",
            bottomLeft: " ",
            bottomRight: " ",
            top: " ",
            left: " ",
            right: " ",
            bottom: " ",
          },
        })
      )
    })
  },
}

export default listener