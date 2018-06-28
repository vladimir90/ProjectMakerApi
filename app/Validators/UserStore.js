'use strict'

class UserStore {
  get rules () {
    return {
      email: 'required|email|unique:users',
      username: 'required',
      password: 'required',
      firstname: 'required',
      lastname: 'required'
    }
  }

  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = UserStore
