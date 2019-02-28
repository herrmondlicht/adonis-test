"use strict";

class SigninController {
  async login({ request, auth }) {
    const { email, password } = request.all();
    return await auth.withRefreshToken().attempt(email, password);
  }

  async refreshToken({ request, auth }) {
    const refreshToken = request.input("refreshToken");
    console.log(refreshToken);
    return await auth.newRefreshToken().generateForRefreshToken(refreshToken);
  }
}

module.exports = SigninController;
