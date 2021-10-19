const generator = require('./codeGenerator');


var code = '10239';
var descrip = 'Tenis prueba 17/21'

var csvsim = [];

csvsim.push({
    id: '10231',
    desc: 'Tenis prueba 1',
    cant: 1
});
csvsim.push({
    id: '10234',
    desc: 'Tenis prueba 2',
    cant: 1
});
csvsim.push({
    id: '10237',
    desc: 'Tenis prueba 3',
    cant: 1
});
csvsim.push({
    id: '10520',
    desc: 'Tenis prueba 4',
    cant: 1
});
csvsim.push({
    id: '10721',
    desc: 'Tenis prueba 5',
    cant: 1
});




//console.log(csvsim);

for(field in csvsim){
    //console.log(csvsim[field].id);
    //console.log(csvsim[field].desc);

    generator.createPdfBarcode(csvsim[field].id, csvsim[field].desc);
}




