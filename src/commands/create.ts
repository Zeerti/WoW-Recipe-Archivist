import * as app from "../app.js"
import logger from "fancy-log";
import * as core from "../app/core.js"
import { getRecipeById, getCharactersByRecipeName } from "../db_queries/queries_1.js";

const recipeId = 190495;
const retrievedRecipe = await getRecipeById(recipeId);

export default new app.Command({
  name: "create",
  description: "The create command",
  channelType: "all",
  async run(message) {
    const characterList = await getCharactersByRecipeName("Primal Molten Breastplate")
    if (!characterList || !retrievedRecipe) return;

    logger("Sending message")
    await message.channel.send({
      embeds: [
        new core.SafeMessageEmbed()
          .setColor("BLURPLE")
          .setAuthor(
            `Primal Molten Breastplate`
          )
          .addField("Character Name: ", characterList.map((character) => { return character.character_name }).join(", "), false)
          .addField("Recipe Link: ", retrievedRecipe.link, false)
      ],
    })
  },
})
