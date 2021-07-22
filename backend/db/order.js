const {Model,DataTypes} =require('sequelize');

const sequelize=require('./db');


class Orders extends Model{};

Orders.init({

  userid:{
      type:DataTypes.STRING
  },
  products:{
      type:DataTypes.ARRAY
  }

},{

sequelize,
modelName:"orders"

})


module.exports=Orders;