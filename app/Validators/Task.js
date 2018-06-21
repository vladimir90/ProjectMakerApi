'use strict'
const { validateAll } = use('Validator')

class Task {
  get rules () {
    return {
      // validation rules
      name: 'required',
      list_id: 'required',
      project_id: 'required'
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = Task
