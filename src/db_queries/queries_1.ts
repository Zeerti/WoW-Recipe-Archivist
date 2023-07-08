// import { Character } from "../tables/characters.native";
// import { Profession } from "../tables/professions.native";
// import { Recipe } from "../tables/recipes.native";
// import { User } from "../tables/users.native";
// import { Knex } from "knex";
// import * as database from "../app/database.js"

// // export const recipe = async (id?: number, name?: string): Promise<Recipe | null> => {
// //   let recipeData = null;
// //   if (id) {
// //     recipeData = await database.db<Recipe>('recipes')
// //       .select('recipe_id', 'profession_id', 'recipe_name', 'link')
// //       .where('recipe_id', id)
// //       .first();
// //   } else if (name) {
// //     recipeData = await database.db<Recipe>('recipes')
// //       .select('recipe_id', 'profession_id', 'recipe_name', 'link')
// //       .where('recipe_name', name)
// //       .first();
// //   }
// //   return recipeData as Recipe;
// // };


// export const character = async (id: number): Promise<Character> => {
//   const characterData = await database.db<Character>('characters')
//     .select('character_id', 'user_id', 'name', 'profession_1', 'profession_2', 'created_at', 'updated_at')
//     .where('character_id', id)
//     .first();

//   return characterData as Character;
// }

// export const user = async (id: number): Promise<User> => {
//   const userData = await database.db<User>('users')
//     .select('user_id', 'username',)
//     .where('user_id', id)
//     .first();

//   return userData as User;
// };

// export const profession = async (id: number): Promise<Profession> => {
//   const professionData = await database.db<Profession>('professions')
//     .select('profession_id', 'name')
//     .where('profession_id', id)
//     .first();

//   return professionData as Profession;
// }

// export const recipeCharacters = async (id: number): Promise<number[] | null> => {
//   try {
//     const characterIds = await database.db<number>('character_recipes')
//       .select('character_id')
//       .where('recipe_id', id)
//       .pluck('character_id')
//       return characterIds;
//   } catch (error) {
//     console.error('Error retrievig crafting characters: ', error);
//     return[];
//   }
// }

// Copied from recipes.native.ts for the format Darth created
//
//  const chunkSize = 100
// for (let i = 0; i < recipes.length; i += chunkSize) {
//     const chunk = recipes.slice(i, i + chunkSize)
//     const results = await query.insert(chunk).onConflict("recipe_id").ignore()
//     logger.log(`inserted ${results} new recipes into recipes table...`)
//   }
//