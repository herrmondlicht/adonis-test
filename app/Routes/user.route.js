"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

module.exports = () => {
  Route.get("/", "UserController.index");
  Route.post("/", "UserController.createUser");
  Route.get("/:userId", "UserController.getById");
  Route.post("/:userId/favorite_games", "UserController.addUserFavoriteGame");
};
