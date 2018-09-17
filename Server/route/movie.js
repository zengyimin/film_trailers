const Router = require('koa-router');
const {sequelize} = require('../db/index');
const {getList} = require('../controller/movie.js');
const router = new Router();

router.get('/api/movie/getList', async(ctx) => getList(ctx));

exports.movieList = router;