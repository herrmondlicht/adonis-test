"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

module.exports = () => {
  Route.get("/", "GameController.index");
};
