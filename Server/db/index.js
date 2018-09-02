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
  define: {
    timestamps : false
  }
});

let result = async ()=>{
  let msg = await sequelize.import('../schema/movielist').findAll({
    attributes: ['id', 'name', 'img_src', 'trailer_img', 'video', 'video_url']
  });

  return msg;
}

(async ()=>{
  var res = await result();
  if(res.length > 0){
    console.log("数据库已有数据，请启动后端服务！")
  }else{
    (async ()=>{
      movieList = await movie();
      for(let i = 0; i < movieList.length; i++){
        movieList[i]['createdAt'] = new Date();
        movieList[i]['updatedAt'] = new Date();
        await sequelize.import('../schema/movielist').create(movieList[i]);
      }
      console.log("数据库存储数据完毕！");
    })();
  }
})

module.exports = {
  sequelize,
}

