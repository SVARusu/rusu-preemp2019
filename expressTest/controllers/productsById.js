const allProducts = require('../products/products.json')
const getProductsById = (req, res) =>{
    console.log(req.params.id)
    let id = parseInt(req.params.id);
    console.log(id);
    const found = allProducts.filter(element => {
        //console.log(element)
        return (element.id === id);
    });
    const error = {
        errors: [{message:"product not found"}]
    }
    if(Object.keys(found).length === 0){
        res.status(200).json(error);
        return;
    }
    res.status(200).json({data:found});
}

module.exports = getProductsById;