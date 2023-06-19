
import * as app from "../app.js"

export interface Profession {
  profession_id: number
  name: string
}

export default new app.Table<Profession>({
  name: "professions",
  description: "Represent a profession",
  setup: (table) => {
    table.integer("profession_id").primary()
    table.string("name").notNullable()
  },
})

