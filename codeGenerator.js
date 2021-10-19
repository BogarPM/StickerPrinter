const fs = require('fs');
//const {PNG} =  require('pngjs');
var JsBarcode = require('jsbarcode');
const { Image, createCanvas } = require("canvas");

const pth = './img';

const mmtopx = 3.779527607;

var generator = {};

function createPngBarcode(code, path){      //Function for creating barcode png image
    var canvas = createCanvas(100,100);
    JsBarcode(canvas, code, {
        format: 'CODE39',
        height: 50,
    });
    const buf = canvas.toBuffer('image/png');
    fs.writeFileSync(path + '/' + code + '.png',buf);
}

function createPdfBarcode(code, desc){
    createPngBarcode(code,pth);
    var canvas = createCanvas(63*mmtopx, 50 * mmtopx, 'pdf');
    var ctx = canvas.getContext('2d');
    const img = new Image();
    const logo = new Image();
    logo.src = pth + '/src/ciclarislogo.png';
    //console.log(logo.height/mmtopx);
    var logorel = logo.width/logo.height;
    img.src = pth + '/' + code + '.png';
    ctx.font = '18px Aldrich';
    var meas = ctx.measureText(desc);
    //console.log(meas);
    ctx.fillText(desc,1.5*mmtopx,21*mmtopx);
    ctx.drawImage(logo, 6.5*mmtopx, 1*mmtopx, 50*mmtopx, 50*mmtopx/logorel);
    ctx.drawImage(img, 0, 26*mmtopx);
    ctx.addPage();


    var buf = canvas.toBuffer('application/pdf');
    fs.writeFile(pth + '/out/' + code + 'out.pdf',buf, ()=>{
        //console.log('asdas');
    });
}

generator.mmtopx = mmtopx;
generator.createPngBarcode = createPngBarcode;
generator.createPdfBarcode = createPdfBarcode;

module.exports = generator;