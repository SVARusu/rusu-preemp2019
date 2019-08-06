const allProducts = require('../products/products.json')
const getProducts = (req, res) =>{
    if(Object.keys(req.query).length !== 0 ){
        console.log(req.query.category + " " + req.query.manufacturer);
        
        const found = allProducts.filter(element => {
            return element.category === parseInt(req.query.category) && element.rating === parseInt(req.query.manufacturer);
        })
        if(Object.keys(found).length === 0){
            const error = { errors: [{message:"product was not found"}] }
            res.status(200).json(error);
            return;
        }
        res.status(200).json({data:found});
    }else{
        res.status(200).json({data:allProducts});
        console.log(allProducts)
    }
   
}
module.exports = getProducts;