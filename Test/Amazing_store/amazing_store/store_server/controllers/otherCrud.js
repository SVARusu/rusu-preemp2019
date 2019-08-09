const fs = require('fs');
const path = require('path');
const body = require('body-parser')
//const products = fs.readFile(__dirname + '../products/images.json', );
const createProduct = (req, res) => {
    console.log(req.body.id);
    
    fs.readFile(path.join(__dirname, '../products/images.json'), function(err, data) {
       
        if(err){
            console.log(err)
        }
        const currentProds = JSON.parse(data);
        let newId = currentProds.length
        
        let newProd = {
            "id" : newId+1,
            //"id" : parseInt(req.body.id),
            "location": req.body.location,
            "title": req.body.title,
            "price": parseInt(req.body.price)
        }
        const newList = [...currentProds, newProd];
        //console.log(newList);
        const finalList = JSON.stringify(newList);
        console.log*=(finalList);
        fs.writeFile(path.join(__dirname, '../products/images.json'), finalList,  function(err){
            if(err) throw err;
        });
    });
}



const deleteProduct = (req, res) => {
    /* fs.readFile(path.join(__dirname, '../products/images.json'), function(err, data){
        if(err) console.log(err);
        let currentProds = JSON.parse(data);
        //console.log(typeof(req.params.id));
        //console.log(typeof(currentProds));
        let id = parseInt(req.params.id)
        //let removeId = 0;
        // currentProds.forEach(element => {+
        //     console.log(element.id === parseInt(req.params.id));
        //     if(element.id === id){
        //         console.log(element);
        //         currentProds.splice(id, 1); 
        //         //removeId = element.id
        //     }
        // });
        for(let i = 0; i < currentProds.length; i++){
            if(currentProds[i].id === id){
                // delete currentProds[i];
                currentProds.splice(i, 1);
            }
        }
         
        //console.log(currentProds);
        const finalList = JSON.stringify(currentProds);
        fs.writeFile(path.join(__dirname, '../products/images.json'), finalList,  function(err){
            if(err) throw err;
        });
        
        
    
    }); */
    //debugger;
    readfile()
            .then((data) => {
                let currentProds = JSON.parse(data);
                console.log(currentProds);
                let id = parseInt(req.params.id);
                for(let i = 0; i < currentProds.length; i++){
                    if(currentProds[i].id === id){
                        // delete currentProds[i];
                        currentProds.splice(i, 1);
                    }
                }
                const finalList = JSON.stringify(currentProds);
                return finalList;
            })
            .then(writefile)
            .catch(err => {
                console.log(err)
            })
            .then(() => res.status(204).json({}))
            
}

function readfile(){
    return new Promise(( resolve, reject) => {
        fs.readFile(path.join(__dirname, '../products/images.json'), (err, data) =>{
            if(err) reject(err);
            resolve(data);
        })
    })
}

function writefile(finalList){
    return new Promise(( resolve, reject) => {
        fs.writeFile(path.join(__dirname, '../products/images.json'), finalList,  function(err){
            if(err) reject(err);
            resolve(true);
        });
    })
}

const updateProduct = (req, res) => {
    // fs.readFile(path.join(__dirname, '../products/images.json'), function(err, data){
    //     if(err) console.log(err);
    //     let currentProds = JSON.parse(data);
    //     //console.log(req.body.location);
    //     let id = parseInt(req.params.id);
    //     currentProds.forEach(element => {
    //         //console.log(element.id === parseInt(req.params.id));
    //         if(element.id === id){
    //             //console.log(element.location);
    //             element.location = req.body.location;
    //             element.title = req.body.title;
    //             element.price = req.body.price;
    //             //console.log(element.location);
    //         }
    //     });
    //     console.log(currentProds);
    //     const finalList = JSON.stringify(currentProds);
    //     fs.writeFile(path.join(__dirname, '../products/images.json'), finalList,  function(err){
    //         if(err) throw err;
    //     });

    // })
    asyncRead().then((data) => {
        //console.log(data);
        let currentProds = JSON.parse(data);
        //console.log(req.body.location);
        let id = parseInt(req.params.id);
        currentProds.forEach(element => {
            //console.log(element.id === parseInt(req.params.id));
            if(element.id === id){
                //console.log(element.location);
                element.location = req.body.location;
                element.title = req.body.title;
                element.price = req.body.price;
                //console.log(element.location);
            }
        });
        //console.log(currentProds);
        const finalList = JSON.stringify(currentProds);
        return finalList;
        })
        .then(asyncWrite)
        .catch(err => {
                    console.log(err)
                })
        .then(() => res.status(204).json({}))
}

async function asyncRead() {
    try{
         return await readfile();
    }catch(error){
        console.log(error);
        
    }
}

async function asyncWrite(finalList){
    try{
        console.log("final list:" + finalList);
        
        await writefile(finalList);
    }catch(error){
        console.log(error);
    
}
}

module.exports = {createProduct, deleteProduct, updateProduct};