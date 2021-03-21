// This code is used to unsubscribe from all the
// YouTube channels you have subscribed

const puppeteer = require("puppeteer");

(async () => {
  try {
    const GoogleAccountURL = "https://accounts.google.com//";
    const YouTubeURL = "https://www.youtube.com/";

    //   const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({
      executablePath:
        "C:/Program Files/BraveSoftware/Brave-Browser/Application/brave",
      headless: false,
    });
    const page = await browser.newPage();
    await page.goto(GoogleAccountURL, { waitUntil: "networkidle2" });
    await page.$eval(
      "input[type=email]",
      (email) => (email.value = "v.i.jothinayagan.307@gmail.com")
    );

    await page.click('div[class="VfPpkd-Jh9lGc"]');

    //   await page.goto(YouTubeURL, { waitUntil: "networkidle2" });
    //   const res = await page.$$eval(
    //     ".yt-simple-endpoint.style-scope.ytd-button-renderer",
    //     (options) =>
    //       options.map((data) => {
    //         return data.href !== "" && data.href;
    //       })
    //   );
    //   let unique = res.filter((r) => Boolean(r));
    //   console.log(unique);

    //   const accountPage = await browser.newPage();
    //   await accountPage.goto();

    //   await browser.close();
  } catch (error) {
    console.error(error);
  }
})();
