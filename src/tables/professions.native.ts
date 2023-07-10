import { Knex } from "knex"
import * as app from "../app.js"
import * as logger from "../app/logger.js"

export interface Profession {
  profession_id: number
  profession_name: string
}

const PROFESSION_LIST: Profession[] = [
  { profession_id: 755, profession_name: "jewelcrafting" },
  { profession_id: 164, profession_name: "blacksmithing" },
  { profession_id: 165, profession_name: "leatherworking" },
  { profession_id: 197, profession_name: "tailoring" },
  { profession_id: 333, profession_name: "enchanting" },
  { profession_id: 202, profession_name: "engineering" },
  { profession_id: 171, profession_name: "alchemy" },
  { profession_id: 773, profession_name: "inscription" },
]

export default new app.Table<Profession>({
  name: "professions",
  description: "Represent a profession",
  priority: 0,
  setup: (table) => {
    table.integer("profession_id").primary()
    table.string("profession_name").notNullable()
  },
  postSetup: async (query: Knex.QueryBuilder<Profession>) => {
    const results = await query
      .insert(PROFESSION_LIST)
      .onConflict("profession_id")
      .ignore()
    logger.log(`inserted ${results} new professions into professions table...`)
  },
})
