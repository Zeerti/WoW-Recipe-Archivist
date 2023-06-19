import { Knex } from "knex"
import * as app from "../app.js"
import * as logger from "../app/logger.js"

export interface Profession {
  profession_id: number
  name: string
}

const PROFESSION_LIST: Profession[] = [
  { profession_id: 755, name: "jewelcrafting" },
  { profession_id: 164, name: "blacksmithing" },
  { profession_id: 165, name: "leatherworking" },
  { profession_id: 197, name: "tailoring" },
  { profession_id: 333, name: "enchanting" },
  { profession_id: 202, name: "engineering" },
  { profession_id: 171, name: "alchemy" },
  { profession_id: 773, name: "inscription" },
]

export default new app.Table<Profession>({
  name: "professions",
  description: "Represent a profession",
  priority: 0,
  setup: (table) => {
    table.integer("profession_id").primary()
    table.string("name").notNullable()
  },
  postSetup: async (query: Knex.QueryBuilder<Profession>) => {
    const results = await query
      .insert(PROFESSION_LIST)
      .onConflict("profession_id")
      .ignore()
    logger.log(`inserted ${results} new professions into professions table...`)
  },
})
