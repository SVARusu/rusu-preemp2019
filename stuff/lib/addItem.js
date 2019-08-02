const fs = require('fs');

let data = fs.readFileSync(__dirname + '/images.json');
let items = JSON.parse(data);

module.exports.addItem = function(name, title, desc, price){
    //items.table.push(`${title}`:{title: `${name}`, description:`${desc}`, price:`${price}`});
    let obj = {
            "title": `${title}`,
            "description": `${desc}`,
            "price": `${price}`
    }
   
    items[`${name}`] = obj;
    //let text = `{"${name}":{` + `"title": "${title}",` + `"description": "${desc}",` + `"price": "${price}"}},`;
    let final = JSON.stringify(items);
    console.log(final)
    fs.writeFile(__dirname + '/images.json', final,  function(err){
        console.log(err);
        
    });
    //obj.property=name;
    /* var s=JSON.stringify(obj)
    console.log(s) */
    /* let json = JSON.stringify(items);
    fs.writeFile(__dirname + '/images.json', json); */
}