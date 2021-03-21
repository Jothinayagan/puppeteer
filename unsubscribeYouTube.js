// This code is used to unsubscribe from all the
// YouTube channels you have subscribed

const puppeteer = require("puppeteer");

(async () => {
  const URL = "https://www.youtube.com/";

  const browser = await puppeteer.launch();
  //   const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(URL, { waitUntil: "networkidle2" });
  const res = await page.$$eval(
    ".yt-simple-endpoint.style-scope.ytd-button-renderer",
    (options) =>
      options.map((data) => {
        return data.href !== "" && data.href;
      })
  );
  let unique = res.filter((r) => Boolean(r));
  console.log(unique);

  await browser.close();
})();
