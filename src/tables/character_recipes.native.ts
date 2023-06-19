import * as app from "../app.js"

export interface CharacterRecipe {
  character_id: number
  recipe_id: number
}

export default new app.Table<CharacterRecipe>({
  name: "character_recipes",
  description: "Represent a character -> recipe mapping",
  // Must come after characters and recipes!
  priority: 2,
  setup: (table) => {
    table
      .integer("character_id")
      .notNullable()
      .references("characters.character_id")
    table.integer("recipe_id").notNullable().references("recipes.recipe_id")
    table.primary(["character_id", "recipe_id"])
  },
})
