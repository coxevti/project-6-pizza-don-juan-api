'use strict'

class AuthRegister {
  get rules () {
    return {
      email: 'required|email|unique:users',
      fullname: 'required',
      password: 'required'
    }
  }

  get messages () {
    return {
      'email.required': 'Você deve fornecer um endereço de e-mail.',
      'email.email': 'Você deve fornecer um endereço de email válido.',
      'email.unique': 'Este e-mail já está cadastrado.',
      'fullname.required': 'Você deve fornecer um nome completo.',
      'password.required': 'Você deve fornecer uma senha.'
    }
  }
}

module.exports = AuthRegister
