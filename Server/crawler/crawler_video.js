const puppeteer = require('puppeteer');
const {movies} = require('./crawler_movie.js');
const {sleep} = require('../utils/index.js');
let movieList = []; //组成电影列表信息的数组

let results = async () => {
  console.log("开始爬取电影预告片信息中......");
  let moviesInfo = await movies();
  const browser = await puppeteer.launch({
    /* headless: false, */
  });

  for(let i = 0; i < moviesInfo.length; i += 5){
    let moviesItem = moviesInfo.slice(i, i+5);
    await sleep(10000); //减少cpu压力，不然性能不好的cpu就炸了
    for(let i = 0; i < moviesItem.length; i++){
      let item = async () => {
        let page = await browser.newPage();
        await page.goto(moviesItem[i].href,{
          waitUntil:'networkidle2',
        });
        
        let video = await page.evaluate(() => {
          if(document.querySelector('.related-pic-video')){
            let dom = document.querySelector('.related-pic-video');
            let href = dom.getAttribute('href');
            let trailer_img = dom.style.backgroundImage.slice(5,-3);
            return {
              href,
              trailer_img,
            };
          }else{
            return false;
          }
        })
        if(video){
          moviesItem[i]['trailer_img'] = video.trailer_img;
          moviesItem[i]['video_page'] = video.href;
          return moviesItem[i];
        }else{
          return moviesItem[i];
        }
      }
      let result = await item();
      movieList.push(result);
    }
  }

  return movieList;
};

/* results().then(res => {console.log(movieList)}); */

module.exports = {
  results,
}
