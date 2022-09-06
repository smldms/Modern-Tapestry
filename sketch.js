////////////////INFO & FEATURES
let myTitle = "Chevron";
let present = '<h2>' + myTitle + '</h2><h3>by smldms</h3><hr>'
console.log(myTitle + " | smldms 2022.08"), console.log("HASH: " + fxhash);
console.log(window.$fxhashFeatures = {
    "Format": format.name,
})
////////////////////////////////////////
let seed = Math.floor(999999 * fxrand());
let globalW = window.innerWidth;
let globalH = window.innerHeight;
let globalSize = 1280 / 2;
let cnv;
let pD = 1;
let gen;
let count = fxrandBetween(50, 150);
let para = fxrandBetween(-1, 1);
let tileCountX = 6 * format.ww;
let tileCountY = 6 * format.hh;
let r, g, b, a;
let xoff = 0.01

let drawMode = 2;
// let drawMode = Math.floor(fxrandBetween(1,3.99999));
// rValue = 1000;
rValue = fxrand() * 3600;



function setup() {
    randomSeed(seed);
    noiseSeed(seed);
    cnv = createCanvas(globalSize * format.ww, globalSize * format.hh);
    cnv.parent('fullScreen');
    maxSize();
    pixelDensity(pD)
    background(5);
    angleMode(DEGREES)
    rectMode(CENTER)
    r = 200 * fxrand();
    g = 200 * fxrand();
    b = 200 * fxrand();
    a = 150 * fxrand() + 10;
    // fill(r,g,b,a/2)
    stroke(r, g, b)
    strokeWeight(longSide / 2500)
    let tileWidth = width / tileCountX;
    let tileHeight = height / tileCountY;

    for (let gridY = 0; gridY <= tileCountY + tileHeight / 2; gridY++) {
        for (let gridX = 0; gridX <= tileCountX + tileWidth / 2; gridX++) {
            let drawMode = Math.floor(fxrandBetween(1, 3.99999));

            let posX = tileWidth * gridX + tileWidth / 2;
            let posY = tileHeight * gridY + tileHeight / 2;

            push();
            translate(posX, posY);


            // switch between modules
            switch (drawMode) {
                case 1:
                    translate(-tileWidth / 2, -tileHeight / 2);
                    dropShad(0, -5, longSide / 150, color(0), a)
                    for (let i = 0; i < count; i++) {
                        // rotate(rValue)
                        line(0, para * tileHeight, tileWidth, i * tileHeight / count);
                        line(0, i * tileHeight / count, tileWidth, tileHeight - (para) * tileHeight);
                        // bezier(para * tileWidth, para * tileHeight, tileWidth / 2, (i / count - 0.5) * tileHeight,
                        // para * tileWidth, para * tileHeight, -tileWidth / 2, (i / count - 0.5) * tileHeight)
                    }
                    break;
                case 2:
                    translate(-tileWidth / 2, -tileHeight / 2);
                    dropShad(0, -5, longSide / 150, color(0), a)
                    for (let i = 0; i < count; i++) {
                        rotate(rValue)
                        bezier(para * tileWidth, para * tileHeight, tileWidth / 2, (i / count) * tileHeight, para * tileWidth, para * tileHeight, -tileWidth / 2, (i / count) * tileHeight)
                    }
                    break;
                case 3:
                    translate(-tileWidth / 2, -tileHeight / 2);

                    for (let i = 0; i <= count; i++) {
                        rotate(rValue / 10)
                    dropShad(0, -5, longSide / 150, color(0), a/2)
                        line(0, para * tileHeight, tileWidth / 2, (i / count) * tileHeight);
                        line(0, para * tileHeight, -tileWidth / 2, (i / count) * tileHeight);
                        // line(0, para * tileHeight, (i / count) * tileWidth, tileHeight / 2);
                        // line(0, para * tileHeight, (i / count) * tileWidth, -tileHeight / 2);
                    }
                    break;
            }

            pop();

        }
    }
    grainy(15 * pD)
    fxpreview()
    // saver()
    // timer()
}




let longSide;

function maxSize() {
    if (globalSize * format.ww > globalSize * format.hh) {
        print(width + " > " + height)
        longSide = width;

    } else {
        print(width + " < " + height)
        longSide = height;
    }
}