const puppeteer = require('puppeteer');

async function electricGuitar(){
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    console.log("Electric guitars :")
    for (let i=1;i<3;i++){
    await page.goto(`https://musicplus.tn/en/4-electric-guitars?page=${i}`);
    const guitars = await page.evaluate(()=>{
        let electricGuitars = [];
        let elements = document.querySelectorAll("div.dor-display-product-info");
        for (element of elements){
            electricGuitars.push({
                img : element.querySelector("img.img-responsive").src,
                name : element.querySelector("h5.product-title-item a").text.trim(),
                price: element.querySelector("div.review-price-product div.dor-show-value-product div.content_price div.product-price-and-shipping span.price").textContent,
                description: element.querySelector("div.product-description-short p").textContent,
                url : element.querySelector("h5.product-title-item a").getAttribute("href"),
            })
        }
        return electricGuitars;
    });
    console.log(guitars);
}
    console.log('----------------------------------------------');

    await browser.close();
};

async function electricBass(){
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto("https://musicplus.tn/en/19-electric-bass-guitars");
    const guitars = await page.evaluate(()=>{
        let electricGuitars = [];
        let elements = document.querySelectorAll("div.dor-display-product-info");
        for (element of elements){
            electricGuitars.push({
                img : element.querySelector("img.img-responsive").src,
                name : element.querySelector("h5.product-title-item a").text.trim(),
                price: element.querySelector("div.review-price-product div.dor-show-value-product div.content_price div.product-price-and-shipping span.price").textContent,
                description: element.querySelector("div.product-description-short p").textContent,
                url : element.querySelector("h5.product-title-item a").getAttribute("href"),
            })
        }
        return electricGuitars;
    });
    console.log("Electric bass guitars :")
    console.log(guitars);
    console.log('\n\n\n----------------------------------------------\n\n\n');

    await browser.close();
};

async function AcousticGuitars(){
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto("https://musicplus.tn/en/16-acoustic-guitars");
    const guitars = await page.evaluate(()=>{
        let electricGuitars = [];
        let elements = document.querySelectorAll("div.dor-display-product-info");
        for (element of elements){
            electricGuitars.push({
                img : element.querySelector("img.img-responsive").src,
                name : element.querySelector("h5.product-title-item a").text.trim(),
                price: element.querySelector("div.review-price-product div.dor-show-value-product div.content_price div.product-price-and-shipping span.price").textContent,
                description: element.querySelector("div.product-description-short p").textContent,
                url : element.querySelector("h5.product-title-item a").getAttribute("href"),
            })
        }
        return electricGuitars;
    });
    console.log("Acoustic guitars :")
    console.log(guitars);
    console.log('\n\n\n----------------------------------------------\n\n\n');

    await browser.close();
};



async function electricGuitarsSono(){
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    console.log("Electric guitars :")
    for (let i=2;i<5;i+=2){
    await page.goto(`https://store.sonomusic.tn/fr/1203-guitares-electriques?page=${i}`);
    const guitars = await page.evaluate(()=>{
        let electricGuitars = [];
        let elements = document.querySelectorAll("div.item-product");
        for (element of elements){
            electricGuitars.push({
                title : element.querySelector("div.product_desc h4 a.product_name").text,
                img : element.querySelector("article.js-product-miniature div.img_block img").src,
                url : element.querySelector("div.product_desc h4 a.product_name").getAttribute("href"),
                price : element.querySelector("article.js-product-miniature div.product_desc div.product-price-and-shipping span.price.price_sale").textContent
            })
        }
        return electricGuitars;
    });
    console.log(guitars);
}
    console.log('\n\n\n----------------------------------------------\n\n\n');
    await browser.close();
};


async function electricGuitarsZer(){
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    console.log("Electric guitars :")
    await page.goto(`https://www.zeryebmusique.com/guitars/guitar-electrique`);
    const guitars = await page.evaluate(()=>{
        let electricGuitars = [];
        let elements = document.querySelectorAll("div.product");
        for (element of elements){
            electricGuitars.push({
                price : element.querySelector("div.spacer div.vm3pr-1 div.product-price div.PricesalesPrice .PricesalesPrice").textContent,
                titles : element.querySelector("div.spacer div.vm-product-descr-container-1 h4 a").text
            })
        }
        return electricGuitars;
    });
    console.log(guitars);
    console.log('\n\n\n----------------------------------------------\n\n\n');
    await browser.close();
};

electricGuitarsZer()
//electricGuitar()
//electricBass()
//AcousticGuitars()
//electricGuitarsSono()



