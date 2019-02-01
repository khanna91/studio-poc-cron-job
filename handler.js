'use strict';
const { Order } = require('./models');

module.exports.confirmOrder = async (event, context, callback) => {
  try {
    const orders = await Order.findAll({ where: { status: 'CONFIRMED' }, attributes: ['id'] });
    const orderIds = orders.map(order => order.id);
    const result = await Order.update({ status: 'DELIVERED' }, { where: { id: { in: orderIds } } });
    console.log(`${result[0]} rows affected`);
  } catch (err) {
    console.log('Failed to update the orders', err);
  }
  callback(null, { message: 'Finished Job' , event });
};
