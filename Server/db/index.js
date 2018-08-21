const Sequelize = require('sequelize');
const {movie} = require('../crawler/index.js');
let movieList;
/* const test = require('./schema/tests'); */

const sequelize = new Sequelize('movie_list', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

(async ()=>{
  movieList = await movie();
  for(let i = 0; i < movieList.length; i++){
    movieList[i]['createdAt'] = new Date();
    movieList[i]['updatedAt'] = new Date();
    await sequelize.import('../schema/movielist').create(movieList[i]);
  }
})();

