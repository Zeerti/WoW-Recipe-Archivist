import * as app from "../app.js"

export interface User {
  user_id: number
  username: string
}

export default new app.Table<User>({
  name: "users",
  description: "Represent a user",
  priority: 0,
  setup: (table) => {
    table.integer("user_id").primary()
    table.string("username").notNullable()
  },
})
