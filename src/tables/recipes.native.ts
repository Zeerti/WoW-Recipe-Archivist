import * as app from "../app.js"

export interface Recipe {
  recipe_id: number
  name: string
  link: string
}

export default new app.Table<Recipe>({
  name: "recipes",
  description: "Represent a recipe",
  priority: 0,
  setup: (table) => {
    table.integer("recipe_id").primary()
    table.string("name").notNullable()
    table.string("link").notNullable()
  },
})
