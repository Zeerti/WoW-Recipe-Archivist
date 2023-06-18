DROP TABLE IF EXISTS character_recipe;
DROP TABLE IF EXISTS recipe;
DROP TABLE IF EXISTS character;
DROP TABLE IF EXISTS profession;
DROP TABLE IF EXISTS user;


CREATE TABLE user (
  user_id INTEGER PRIMARY KEY,
  username VARCHAR
);

CREATE TABLE profession (
  profession_id INTEGER PRIMARY KEY,
  profession_name VARCHAR
);

CREATE TABLE character (
  character_id INTEGER PRIMARY KEY,
  user_id INTEGER,
  character_name VARCHAR,
  profession_1 INTEGER,
  profession_2 INTEGER,
  created_on DATE,
  last_modified DATE,
  FOREIGN KEY(user_id) REFERENCES user(user_id),
  FOREIGN KEY(profession_1) REFERENCES profession(profession_id),
  FOREIGN KEY(profession_2) REFERENCES profession(profession_id)
);

CREATE TABLE recipe (
  recipe_id INTEGER PRIMARY KEY,
  recipe_name VARCHAR
);

CREATE TABLE character_recipe (
  character_id INTEGER,
  recipe_id INTEGER,
  PRIMARY KEY(character_id, recipe_id),
  FOREIGN KEY(character_id) REFERENCES character(character_id),
  FOREIGN KEY(recipe_id) REFERENCES recipe(recipe_id)
);
