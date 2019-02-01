/* eslint-disable */
const uuidv4 = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: () => uuidv4()
    },
    userId: DataTypes.UUID,
    currency: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    coupon: DataTypes.STRING,
    discount: DataTypes.JSON,
    amountToBePaid: DataTypes.FLOAT,
    status: DataTypes.STRING,
    meta: DataTypes.ARRAY(DataTypes.JSON)
  }, {});
  // Order.associate = function(models) {
    // associations can be defined here
  // };
  return Order;
};