const puppeteer = require('puppeteer');
const {results} = require('./crawler_video.js');
const {sleep} = require('../utils/index.js');
let movieInfo = [];

let movie = async ()=>{
  console.log("开始爬取电影预告片中......");
  let movieList = await results();
  const browser = await puppeteer.launch({
    /* headless: false, */
  });
  for(let i = 0; i < movieList.length; i += 8){
    let moviesItem = movieList.slice(i, i+8);
    await sleep(10000); //减少cpu压力，不然性能不好的cpu就炸了
    for(let j = 0; j < moviesItem.length; j++){
      let item = async ()=> {
        let page = await browser.newPage();
        if(moviesItem[j].video_page){
          await page.goto(moviesItem[j].video_page,{
            waitUntil:'networkidle2',
          });
          let video_url = await page.evaluate(() => {
            let url = document.querySelector('source').getAttribute('src');
            return url;
          })
          moviesItem[j]['video_url'] = video_url;
          return  moviesItem[j];
        }else{
          return moviesItem[j];
        }
      }
      let result = await item();
      movieInfo.push(result);
    }
  }
  console.log("爬取完毕！");
  return movieInfo;
};


module.exports = {
  movie,
}