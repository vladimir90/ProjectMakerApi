'use strict'

class UserLogin {
  get rules () {
    return {
      email: 'required|email',
      password: 'required'
    }
  }

  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}

module.exports = UserLogin
