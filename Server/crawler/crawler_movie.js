const puppeteer = require('puppeteer');
//获取电影基本信息的url
const url = 'https://movie.douban.com/explore#!type=movie&tag=%E6%9C%80%E6%96%B0&page_limit=20&page_start=0';
const {sleep} = require('../utils/index.js');

const movies = async ()=>{
  const browser = await puppeteer.launch({
    /* headless: false, */
  });
  const page = await browser.newPage();
  await page.goto(url,{
    waitUntil:'networkidle2',
  });

  //等待30s
  await sleep(3000);
  await page.waitForSelector('.more');
  await page.click('.more');

  await sleep(3000);
  console.log("开始爬取电影基本信息中......");
  const movieInfo = await page.evaluate(()=>{
    
    /* var movies = document.querySelectorAll('.item'); */
    var movies = [document.querySelector('.item')];
    var movieList = [];
    var num = 0;

    if(movies.length >= 1){
      movies.forEach((movie)=>{
        num++
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
          num,
        })
      })
    }
    return movieList;
  })

  /* movieInfo.forEach((item) => {
    (async ()=>{
      await page.goto(item.href,{
        waitUntil:'networkidle2',
      });
      const video = await page.evaluate(() => {
        if(document.querySelector('.related-pic-video')){
          let dom = document.querySelector('.related-pic-video');
          let videoHref = dom.getAttribute('href');
          return videoHref;
        }else{
          return false;
        }
      })
      if(video){
        console.log(video);
      }
    })();
  }) */
  return movieInfo;
  /* console.log(movieInfo); */
};

module.exports = {
  movies,
}