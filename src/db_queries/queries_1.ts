import { Character } from "../tables/characters.native";
import { Profession } from "../tables/professions.native";
import { Recipe } from "../tables/recipes.native";
import { User } from "../tables/users.native";
import * as database from "../app/database.js"

export const recipe = async (id: number | undefined, name: string | undefined): Promise<Recipe | null> => {
  if (!id && !name) throw new Error('Must provide either an id or a name to retrieve a recipe.');
  let recipeData = null;
  if (id) {
    recipeData = await database.db<Recipe>('recipes')
      .select('recipe_id', 'profession_id', 'recipe_name', 'link')
      .where('recipe_id', id)
      .first();
  } else if (name) {
    recipeData = await database.db<Recipe>('recipes')
      .select('recipe_id', 'profession_id', 'recipe_name', 'link')
      .where('recipe_name', name)
      .first();
  }
  return recipeData as Recipe;
};

export const character = async (id: number): Promise<Character> => {
  const characterData = await database.db<Character>('characters')
    .select('character_id', 'user_id', 'character_name', 'profession_1', 'profession_2', 'created_at', 'updated_at')
    .where('character_id', id)
    .first();

  return characterData as Character;
}

export const user = async (id: number): Promise<User> => {
  const userData = await database.db<User>('users')
    .select('user_id', 'username',)
    .where('user_id', id)
    .first();

  return userData as User;
};

export const profession = async (id: number): Promise<Profession> => {
  const professionData = await database.db<Profession>('professions')
    .select('profession_id', 'profession_name')
    .where('profession_id', id)
    .first();

  return professionData as Profession;
}

export const recipeCharacters = async (id: number): Promise<number[] | null> => {
  try {
    const characterIds = await database.db<number>('character_recipes')
      .select('character_id')
      .where('recipe_id', id)
    return characterIds.map((character) => character.character_id);
  } catch (error) {
    console.error('Error retrieving crafting characters: ', error);
    return [];
  }
}

export async function getCharactersByRecipeName(recipeName: string): Promise<Character[] | null> {
  try {
    const recipe = await getRecipeByName(recipeName);
    if (!recipe) {
      return null;
    }

    const craftingCharacterIds = await recipeCharacters(recipe.recipe_id);
    if (!craftingCharacterIds) {
      return null;
    }

    const retrievedCharacters: Array<Character> | null = [];

    for (const characterId of craftingCharacterIds) {
      const character = await getCharacterById(characterId);
      if (character) {
        retrievedCharacters.push(character);
      }
    }
    return retrievedCharacters;
  } catch (error) {
    console.error('Error retrieving characters:', error);
    return null;
  }
}


export async function getRecipeByName(name: string): Promise<Recipe | null> {
  try {
    const fetchedRecipe = await recipe(undefined, name);
    return fetchedRecipe;
  } catch (error) {
    console.error('Error retrieving recipe:', error);
    return null;
  }
}

export async function getRecipeById(id: number): Promise<Recipe | null> {
  try {
    const fetchedRecipe = await recipe(id, undefined);
    return fetchedRecipe;
  } catch (error) {
    console.error('Error retrieving recipe:', error);
    return null;
  }
}

export async function getCharacterById(id: number): Promise<Character | null> {
  try {
    const fetchedCharacter = await character(id);
    return fetchedCharacter;
  } catch (error) {
    console.error('Error retrieving character:', error);
    return null;
  }
}

export async function getProfessionById(id: number): Promise<Profession | null> {
  try {
    const fetchedProfession = await profession(id);
    return fetchedProfession;
  } catch (error) {
    console.error('Error retrieving profession:', error);
    return null;
  }
}

export async function getUserById(id: number): Promise<User | null> {
  try {
    const fetchedUser = await user(id);
    return fetchedUser;
  } catch (error) {
    console.error('Error retrieving user:', error);
    return null;
  }
}


// Copied from recipes.native.ts for the format Darth created

//  const chunkSize = 100
// for (let i = 0; i < recipes.length; i += chunkSize) {
//     const chunk = recipes.slice(i, i + chunkSize)
//     const results = await query.insert(chunk).onConflict("recipe_id").ignore()
//     logger.log(`inserted ${results} new recipes into recipes table...`)
//   }
