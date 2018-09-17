const {sequelize} = require('../db/index');

async function getMovies(offset){
  let result = await sequelize.import('../schema/movielist').findAndCount({
    limit:5,
    offset: offset,
  });

  return result;
}

module.exports = {
  getMovies,
}