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
          .setColor("Blurple")
          .setAuthor({name: "Recipe", iconURL: "https://wow.zamimg.com/images/wow/icons/large/inv_knife_1h_primalistraid_d_02.jpg",  url: "https://www.wowhead.com/item=190495/primal-molten-breastplate" })
          .addFields({name: "Character Name: ", value: characterList.map((character) => { return character.character_name }).join(", \n"), inline: false})
          .addFields({name: "Recipe Link: ", value: retrievedRecipe.link, inline: false})  
      ],
    })
  },
})
