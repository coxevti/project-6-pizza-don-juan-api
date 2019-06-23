'use strict'

const Order = use('App/Models/Order')

class OrderController {
  async index () {
    const orders = await Order
      .query()
      .with('orderProduct.sizeType.type')
      .with('orderProduct.sizeType.size')
      .with('orderProduct.product')
      .with('user', user => {
        user.select('users.id', 'users.fullname')
      })
      .select('orders.id', 'orders.user_id', 'orders.observation', 'orders.created_at')
      .orderBy('orders.created_at', 'desc')
      .fetch()
    return orders
  }
}

module.exports = OrderController
