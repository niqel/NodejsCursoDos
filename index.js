const os = require('os');
const fs = require('fs');


console.log(os.platform());
console.log(os.release());
console.log(os.freemem());
console.log(os.totalmem());

// fs.writeFile('./texto.txt', 'lineaUno', function(err){
//     if(err){
//         console.log(err);
//     }
//     console.log('archivo creado');
// });

console.log('ultima linea de codigo');

fs.readFile('./texto.txt', function(eror, data){
    if(eror){
        console.log(eror);
    }
    console.log(data.toString());
});