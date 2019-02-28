"use strict";
const User = use("App/Models/User");
const Game = use("App/Models/Game");
const favoriteGames = "favoriteGames";

class UserController {
  async index({ auth }) {
    const { id } = await auth.getUser();
    console.log(id);
    return await User.query()
      .with(favoriteGames)
      .fetch();
  }

  async getById({ params }) {
    return await User.query()
      .with("favoriteGames")
      .where({ id: params.userId })
      .fetch();
  }

  async createUser({ request }) {
    const { name, email, username, password } = request.body;
    const user = new User();
    user.username = username;
    user.email = email;
    user.password = password;
    return await user.save();
  }

  async addUserFavoriteGame({ request }) {
    const { gameId } = request.body;
    const { userId } = request.params;
    const user = await User.find(userId);
    const game = await Game.find(gameId);
    return await user.favoriteGames().save(game);
  }
}

module.exports = UserController;
