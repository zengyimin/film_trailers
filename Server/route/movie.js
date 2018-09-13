const Router = require('koa-router');
const {sequelize} = require('../db/index');
const {toTime} = require('../utils/index')
const router = new Router();

router.get('/api/movie/getList', async(ctx) => {
  let data = [];
  if(ctx.query.offset){
    let result = await sequelize.import('../schema/movielist').findAndCount({
      limit:5,
      offset:parseInt(ctx.query.offset)
    });
    result.rows.forEach((item) => {
      if(item.trailer_img){
        data.push(item)
      }
    })
    ctx.body = {
      success: true,
      num: result.count,
      data: data,
    }
  }else{
    ctx.status = '400';
    ctx.body = {
      success: false,
      msg: "参数错误",
    }
  }
})

exports.movieList = router;