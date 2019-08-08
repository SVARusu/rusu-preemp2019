const cat = require('../products/categories.json');
const allProducts = require('../products/products.json');

const getProdByCat = (req, res) =>{
    console.log(req.params.id);
    let id = parseInt(req.params.id);
    const found = allProducts.filter(element => {
        //console.log(typeof(element.category));
        return (element.category === id)
    });
    const error = {
        errors: [{message:"product which is part of that category was not found"}]
    }
    if(Object.keys(found).length === 0){
        res.status(200).json(error);
        return;
    }
    res.status(200).json({data:found});
}

module.exports = getProdByCat;