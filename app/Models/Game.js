"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Game extends Model {
  static get table() {
    return "gamesWithRandomName";
  }

  users() {
    return this.belongsToMany("App/Models/User", "gameId", "userId").pivotModel(
      "App/Models/UserGame"
    );
  }
}

module.exports = Game;
