'use strict'

/*
|--------------------------------------------------------------------------
| UserAdminSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const User = use('App/Models/User')

class UserAdminSeeder {
  async run () {
    await User.query()
      .where('role', 'admin')
      .delete()

    await User.create({
      fullname: 'valdir coxev',
      password: '123456',
      email: 'valcox.russo@gmail.com',
      role: 'admin'
    })
  }
}

module.exports = UserAdminSeeder
