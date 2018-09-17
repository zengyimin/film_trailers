const {sequelize} = require('../db/index');

async function createUser(username,password){
  let result = await sequelize.import('../schema/user').create({
    name : username,
    password : password,
  })

  return result;
}

async function getUser(username,password){
  let result =await sequelize.import('../schema/user').findOne({
    where : { 
      name : username,
      password : password,
    }
  })
  return result;
}

module.exports = {
  createUser,
  getUser,
}