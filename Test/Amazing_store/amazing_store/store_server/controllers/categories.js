const cat = require('../products/categories.json');

const getCategories = (req, res) =>{
    //res.end(JSON.stringify(cat));
    res.status(200).json({data:cat});
}

module.exports = getCategories;