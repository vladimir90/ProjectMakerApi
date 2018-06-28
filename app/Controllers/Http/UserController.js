'use strict'
const User = use('App/Models/User')

class UserController {
  async register({request, response}) {

    const {firstname, lastname, email, password, username} = request.post()

    const user = await User.create({firstname, lastname, email, password, username})

    response.status(200).json({
      message: 'User Register'
    })
  }
  async login({request, response, auth}) {
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)

    // const token = await auth.generate(user)

    response.status(200).json({
      message: 'Logged in successfully',
      data: {
        token: token
      }
    })
  }
  async logout({auth,response}) {
    const user = auth.current.user
    const token = auth.getAuthHeader()

    await user
      .tokens()
      .where('token', token)
      .update({ is_revoked: true })

    response.status(200).json({
      message: 'User logged out'
    })

  }
  async show({response, auth}) {

    if (!auth.user) {
      return response.status(400).json({
        message: 'You cannot see someone else\'s profile'
      })
    }
    return response.status(200).json({
      data: auth.user
    })
  }
}

module.exports = UserController
