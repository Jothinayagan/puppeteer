// import puppeteer library
const puppeteer = require('puppeteer');

(async () => {

    const URL = 'https://www.flipkart.com/motorola-edge-thunder-grey-256-gb/p/itm89c1f91a0a0e3?pid=MOBFQMAAHRRGMHFH&lid=LSTMOBFQMAAHRRGMHFHLPPYPL&fm=neon%2Fmerchandising&iid=M_a5af1307-3fbf-4570-865b-79cceab018e6_1.D7X0VY507QGY&ppt=hp&ppn=homepage&ssid=6huwfg31ds0000001615257964165&otracker=dynamic_omu_infinite_Best%2BBattery%2BPhones_1_1.dealCard.OMU_INFINITE_D7X0VY507QGY&cid=D7X0VY507QGY';

    // Launch chromium and want to see the what's happening, so make headless to false
    // const browser = await puppeteer.launch({ headless: false });
    const browser = await puppeteer.launch();

    // launch a new tab/page in chromium
    const page = await browser.newPage();

    // redirect to the below URL
    await page.goto(URL, { waitUntil: 'networkidle2'});

    // const IMAGE_SELECTOR = '#'
    // const result = await page.evaluate(() => {
    //     return Array.from(document.querySelector('img'));
    // });

    // const result = await page.$$eval('.header blog-title-wrapper avatar-wrapper a img[src]', imgs => imgs.map(img => img.getAttribute('src')));
    const result = await page.evaluate(() => document.querySelector('div[class="CXW8mj _3nMexc"] > img').src);
    console.log("Source ==> ", result);

})();


// const IMAGE_SELECTOR = '#tsf > div:nth-child(2) > div > div.logo > a > img';

// const imageUrl = await page.evaluate(
//     // here we got the image url from the selector.
//     () => document.querySelector('img.image')
//   );