import { parse } from "csv-parse"
import fs from "fs"
import path from "path"
import { Knex } from "knex"

import * as app from "../app.js"
import * as logger from "../app/logger.js"

const dataDirectory = path.join(process.cwd(), "data")

if (!fs.existsSync(dataDirectory)) fs.mkdirSync(dataDirectory)

export interface Recipe {
  recipe_id: number
  profession_id: number
  name: string  
  link: string
}

export default new app.Table<Recipe>({
  name: "recipes",
  description: "Represent a recipe",
  priority: 0,
  setup: (table) => {
    table.integer("recipe_id").primary()
    table.integer("profession_id").notNullable().references("professions.profession_id")
    table.string("name").notNullable()
    table.string("link").notNullable()
  },
  postSetup: async (query: Knex.QueryBuilder<Recipe>) => {
    const recipes: Recipe[] = []
    const parser = fs
      .createReadStream(path.join(dataDirectory, "RecipeData.csv"))
      .pipe(parse({ delimiter: ",", from_line: 2 }))
    for await (const record of parser) {
      recipes.push({
        recipe_id: parseInt(record[0]),
        profession_id: record[1],
        name: record[2],
        link: record[3],
      })
    }
    const chunkSize = 100
    for (let i = 0; i < recipes.length; i += chunkSize) {
      const chunk = recipes.slice(i, i + chunkSize)
      const results = await query.insert(chunk).onConflict("recipe_id").ignore()
      logger.log(`inserted ${results} new recipes into recipes table...`)
    }
  },
})
