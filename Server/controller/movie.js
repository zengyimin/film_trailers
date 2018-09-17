const movie = require('../model/movie');

async function getList(ctx){
  let data = [];
  if(ctx.query.offset){
    let result = await movie.getMovies(parseInt(ctx.query.offset));
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
}

module.exports = {
  getList,
}