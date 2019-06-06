'use strict'

const User = use('App/Models/User')

class AuthController {
  async register ({ request, response }) {
    const data = await request.only(['fullname', 'password', 'email'])
    const user = await User.create(data)
    return response
      .status(201)
      .json({ user, message: 'Cadastro realizado com sucesso.' })
  }
  async login ({ request, response, auth }) {
    try {
      const { email, password } = request.all()
      const token = await auth.attempt(email, password)
      return token
    } catch (err) {
      return response.status(401).json({ message: 'Credenciais inválidas.' })
    }
  }
}

module.exports = AuthController
