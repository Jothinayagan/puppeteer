// import puppeteer library
const puppeteer = require('puppeteer');

// IIFE
(async () => {

    // const URL = 'https://www.flipkart.com/motorola-edge-thunder-grey-256-gb/p/itm89c1f91a0a0e3?pid=MOBFQMAAHRRGMHFH&lid=LSTMOBFQMAAHRRGMHFHLPPYPL&fm=neon%2Fmerchandising&iid=M_a5af1307-3fbf-4570-865b-79cceab018e6_1.D7X0VY507QGY&ppt=hp&ppn=homepage&ssid=6huwfg31ds0000001615257964165&otracker=dynamic_omu_infinite_Best%2BBattery%2BPhones_1_1.dealCard.OMU_INFINITE_D7X0VY507QGY&cid=D7X0VY507QGY';
    const URL = 'https://www.flipkart.com/offers-list/best-battery-phones?screen=dynamic&pk=themeViews%3DBest-Battery-Phones-Covid%3ADTDealcard~widgetType%3DdealCard~contentType%3Dneon&wid=13.dealCard.OMU_9&otracker=hp_omu_Best%2BBattery%2BPhones_9&otracker1=hp_omu_WHITELISTED_neon%2Fmerchandising_Best%2BBattery%2BPhones_NA_wc_view-all_9';

    // Launch chromium and want to see the what's happening, so make headless to false
    // const browser = await puppeteer.launch({ headless: false });
    const browser = await puppeteer.launch();

    // launch a new tab/page in chromium
    const page = await browser.newPage();

    // redirect to the below URL
    await page.goto(URL, { waitUntil: 'networkidle2' });

    // Pick an image source url from page using class name
    // const result = await page.evaluate(() => document.querySelector('div[class="CXW8mj _3nMexc"] > img').src);
    // const result = await page.evaluate(() => document.querySelectorAll('div[class="_5_K_qG"] > div[class="_1FNrEw"]'));
    // const result = await page.$$eval(() => Array.from(document.querySelectorAll('div[class="_5_K_qG"] > div[class="_1FNrEw"] > a[class="_6WQwDJ"]')));
    const result = await page.$$eval('div[class="_5_K_qG"] > div[class="_1FNrEw"] > a[class="_6WQwDJ"]', options => options.map(option => option.href));

    console.log("Source ==> ");
    for(let i=0; i<result.length; i++) {
        console.log(`\nElement ${i+1} is \n ${result[i]}`);
    }

    await browser.close();
})();