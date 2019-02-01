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
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
