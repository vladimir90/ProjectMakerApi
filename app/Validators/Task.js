'use strict'
const { validateAll } = use('Validator')

class Task {
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

module.exports = Task
