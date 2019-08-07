
const validateParamsPath = (schema) => (req, res, next) =>{
    const result = schema.validate(req.params);
    if(result.error === null)
        next();
    else  
        res.status(400).json({data: "that is obviously not an id, darling"});
} 

module.exports = validateParamsPath;