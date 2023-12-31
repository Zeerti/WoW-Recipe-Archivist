import * as app from "../app.js"

export interface Character {
  character_id: number
  user_id: number
  character_name: string
  profession_1: number
  profession_2?: number
  created_at: Date
  updated_at: Date
}

export default new app.Table<Character>({
  name: "characters",
  description: "Represent a character",
  // Must come after professions!
  priority: 1,
  setup: (table) => {
    table.integer("character_id").primary()
    table.integer("user_id").notNullable().references("users.user_id")
    table.string("character_name").notNullable()
    table
      .integer("profession_1")
      .notNullable()
      .references("professions.profession_id")
    table
      .integer("profession_2")
      .nullable()
      .references("professions.profession_id")
    table.timestamps(false, true)
  },
})
