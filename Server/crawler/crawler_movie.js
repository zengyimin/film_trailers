const puppeteer = require('puppeteer');
//获取电影基本信息的url
const url = 'https://movie.douban.com/explore#!type=movie&tag=%E7%83%AD%E9%97%A8&sort=time&page_limit=20&page_start=0';
const {sleep} = require('../utils/index.js');

(async ()=>{
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url,{
    waitUntil:'networkidle2',
  });

  //等待30s
  sleep(3000);

  await page.waitForSelector('.more');
  await page.click('.more');

  const movieInfo = await page.evaluate(()=>{
    var movies = document.querySelectorAll('.item');
    var movieList = [];

    if(movies.length >= 1){
      movies.forEach((movie)=>{
        //获取电影详情的链接
        var href = movie.getAttribute('href');
        var item = movie.querySelector('.cover-wp');
        //获取电影id
        var id = item.getAttribute('data-id');
        var img = item.querySelector('img');
        //获取电影海报的链接
        var img_src = img.getAttribute('src');
        //获取电影名称
        var name = img.getAttribute('alt');
        movieList.push({
          id,
          href,
          img_src,
          name,
        })
      })
    }
    return movieList;
  })

  console.log(movieInfo);
})();