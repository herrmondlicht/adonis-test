"use strict";
const UserRoutes = require("../app/Routes/user.route");
const GameRoute = require("../app/Routes/game.route");
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.group("users", UserRoutes).prefix("users");
Route.group("games", GameRoute).prefix("games");
