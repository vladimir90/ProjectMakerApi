'use strict'

class Team {
  get rules () {
    return {
      // validation rules
      name: 'required'
    }
  }

  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = Team
