'use strict'

class Team {
  get rules () {
    return {
      // validation rules
      name: 'required',
      user_id: 'required'
    }
  }

  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}

module.exports = Team
