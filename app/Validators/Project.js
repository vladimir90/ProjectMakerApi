'use strict'

class Project {
  get rules () {
    return {
      // validation rules
      name: 'required',
      description: 'required'
    }
  }

  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = Project