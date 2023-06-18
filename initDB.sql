DROP TABLE IF EXISTS character_recipe;
DROP TABLE IF EXISTS recipe;
DROP TABLE IF EXISTS character;
DROP TABLE IF EXISTS profession;
DROP TABLE IF EXISTS user;

CREATE TABLE user (
  user_id INTEGER PRIMARY KEY,
  username VARCHAR NOT NULL
);

CREATE TABLE profession (
  profession_id INTEGER PRIMARY KEY,
  profession_name VARCHAR NOT NULL
);

CREATE TABLE character (
  character_id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL,
  character_name VARCHAR NOT NULL,
  profession_1 INTEGER NOT NULL,
  profession_2 INTEGER,
  created_on DATE NOT NULL,
  last_modified DATE NOT NULL,
  FOREIGN KEY(user_id) REFERENCES user(user_id),
  FOREIGN KEY(profession_1) REFERENCES profession(profession_id),
  FOREIGN KEY(profession_2) REFERENCES profession(profession_id)
);

CREATE TABLE recipe (
  recipe_id INTEGER PRIMARY KEY,
  recipe_name VARCHAR NOT NULL
);

CREATE TABLE character_recipe (
  character_id INTEGER NOT NULL,
  recipe_id INTEGER NOT NULL,
  PRIMARY KEY(character_id, recipe_id),
  FOREIGN KEY(character_id) REFERENCES character(character_id),
  FOREIGN KEY(recipe_id) REFERENCES recipe(recipe_id)
);
