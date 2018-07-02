'use strict'

class Project {
  get rules () {
    return {
      // validation rules
      name: 'required',
      team_id: 'required'
    }
  }

  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}

module.exports = Project
