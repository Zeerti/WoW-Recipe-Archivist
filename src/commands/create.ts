import * as app from "../app.js"
// import { recipe } from "../db_queries/queries_1.js";
// import { Recipe } from "../tables/recipes.native.js";
// import { character } from "../db_queries/queries_1.js";
// import { Character } from "../tables/characters.native.js";
// import { profession } from "../db_queries/queries_1.js";
// import { Profession } from "../tables/professions.native.js";
// import { user } from "../db_queries/queries_1.js";
// import { User } from "../tables/users.native.js";
// import { recipeCharacters } from "../db_queries/queries_1.js";

// const recipeId = 190495;
// const retrievedRecipe = await getRecipeById(recipeId);
// const characterId = 1
// const retrievedCharacter = await getCharacterById(characterId);
// const professionId = 164
// const retrievedProfession = await getProfessionById(professionId);
// const userId = 1
// const retrievedUser = await getUserById(userId);

export default new app.Command({
  name: "create",
  description: "The create command",
  channelType: "all",
  async run(message) {
    return message.send("Testing")},
})

// async function getCharactersByRecipeName(recipeName: string): Promise<Character[] | null> {
//   try {
//     const recipe = await getRecipeByName(recipeName);

//     if (!recipe) {
//       return null;
//     }

//     const craftingCharacterIds = await recipeCharacters(recipe.recipe_id);

//     if (!craftingCharacterIds) {
//       return null;
//     }

//     const retrievedCharacters: Character[] = [];

//     for (const characterId of craftingCharacterIds) {
//       const character = await getCharacterById(characterId);

//       if (character) {
//         retrievedCharacters.push(character);
//       }
//     }

//     return retrievedCharacters;
//   } catch (error) {
//     console.error('Error retrieving characters:', error);
//     return null;
//   }
// }


// async function getRecipeByName(name: string): Promise<Recipe | null> {
//   try {
//     const fetchedRecipe = await recipe(undefined, name);
//     return fetchedRecipe;
//   } catch (error) {
//     console.error('Error retrieving recipe:', error);
//     return null;
//   }
// }

// async function getRecipeById(id: number): Promise<Recipe | null> {
//   try {
//     const fetchedRecipe = await recipe(id);
//     return fetchedRecipe;
//   } catch (error) {
//     console.error('Error retrieving recipe:', error);
//     return null;
//   }
// }

// async function getCharacterById(id: number): Promise<Character | null> {
//   try {
//     const fetchedCharacter = await character(id);
//     return fetchedCharacter;
//   } catch (error) {
//     console.error('Error retrieving character:', error);
//     return null;
//   }
// }

// async function getProfessionById(id: number): Promise<Profession | null> {
//   try {
//     const fetchedProfession = await profession(id);
//     return fetchedProfession;
//   } catch (error) {
//     console.error('Error retrieving profession:', error);
//     return null;
//   }
// }

// async function getUserById(id: number): Promise<User | null> {
//   try {
//     const fetchedUser = await user(id);
//     return fetchedUser;
//   } catch (error) {
//     console.error('Error retrieving user:', error);
//     return null;
//   }
// }

