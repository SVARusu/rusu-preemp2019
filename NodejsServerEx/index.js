const fs = require('fs');
const http = require("http");  
http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'Content-Type': 'application/json'});
    //let html = '';
    if(req.url.includes('products')){
        html = fs.readFile(__dirname + '/products.json', (err, html) =>{
            if(err) console.log(err);
            if(/(\/)products(\/)([0-9]+)/.test(req.url)){
                singleProduct(req.url, html, res);
                return;
            }
            let prod = JSON.parse(html);
            let newObj = prod.slice(0, 10);
            res.end(JSON.stringify(newObj));
            
        });
        
    }else if(req.url.includes('categories')){
        html = fs.readFile(__dirname+'/categories.json', (err, html)=>{
            if(err) console.log(err);
            res.end(html.toString());
        });
    }
}).listen(5000, "127.0.0.1");


function singleProduct(url, html, res){
    let id = parseInt(url.split("/").pop());
    let prod = JSON.parse(html);
    const found = prod.filter(element => {
        //console.log(element)
        return (element.id === id);
    }).pop();
    res.end(JSON.stringify(found))
}