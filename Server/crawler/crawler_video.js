const puppeteer = require('puppeteer');
const {movies} = require('./crawler_movie.js');
const {sleep} = require('../utils/index.js');

(async () => {
  let moviesInfo = await movies();
  const browser = await puppeteer.launch({
    /* headless: false, */
  });

  for(let i = 0; i < moviesInfo.length; i += 10){
    var moviesItem = moviesInfo.slice(i, i+10);
    await sleep(10000); //减少cpu压力，不然性能不好的cpu就炸了
    moviesItem.forEach((movie) => {
      (async () => {
        let page = await browser.newPage();
        await page.goto(movie.href,{
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
          console.log(video);
        }else{

        }
      })()
    })
  }

})()
