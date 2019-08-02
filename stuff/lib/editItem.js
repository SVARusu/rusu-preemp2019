const fs = require('fs');

let data = fs.readFileSync(__dirname + '/images.json');
let items = JSON.parse(data);
//console.log(items.product_1);

module.exports.editItem = function(name, title, desc, price){
    
    console.log(items);
    
}