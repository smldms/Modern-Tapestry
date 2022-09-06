/////////KEYS
function keyTyped() {
    /////////////////////CC CAPTURE
    if (keyCode === 82) { // if "r" is pressed
        capturer.capture(cnv.canvas);
        capturer.start();
        print('go');
    } else if (keyCode === 90) { // if "z" to zip is pressed
        capturer.stop();
        capturer.save();
        noLoop();
    }
    /////////////////////PIXEL DENSITY
    else if (keyCode === 49) {
        pD = 1 // if "1" is pressed
        setup()
    } else if (keyCode === 50) {
        pD = 2 // if "2" is pressed
        setup()

    } else if (keyCode === 52) {
        pD = 4 // if "4" is pressed
        setup()
    }
    /////////SAVE
    else if (keyCode === 83) { // if "s" is pressed
        save(myTitle + "_" + fxhash + '.png');
    }
}

////////////////////////////CHANGE MODE
function keyReleased() {
    if (key == '1') drawMode = 1;
    if (key == '2') drawMode = 2;
    if (key == '3') drawMode = 3;
    if (keyCode == DOWN_ARROW) tileCountY = max(tileCountY - 1, 1);
    if (keyCode == UP_ARROW) tileCountY += 1;
    if (keyCode == LEFT_ARROW) tileCountX = max(tileCountX - 1, 1);
    if (keyCode == RIGHT_ARROW) tileCountX += 1;
}

///////////////PREVIEW /// SAVE & RELOAD
function myPreview() {
    setTimeout(fxpreview, 2000);
}

function timer() {
    setTimeout(function () {
        location.reload(true);
    }, 5000);
}

function saver() {
    save(myTitle + "_" + fxhash + '.png');
}

/////////////PROGRESS
async function progress(message) {
    document.body.style.cursor = 'progress';
    document.getElementById("progress").innerHTML = message;
    await new Promise((fn => setTimeout(fn, 1)));
}

async function progressClear() {
    document.body.style.cursor = 'default';
    document.getElementById("progress").style.display = 'none';
    await new Promise((fn => setTimeout(fn, 1)));
}

async function progressShow() {
    document.body.style.cursor = 'default';
    document.getElementById("progress").style.display = 'block';
    await new Promise((fn => setTimeout(fn, 1)));
}