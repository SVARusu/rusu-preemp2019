function NotFound(msg){
    this.name  ='NotFound';
    Error.call(this, msg);
    Error.captureStackTrace(this, arguments.callee);
}
NotFound.prototype.__proto__  =  Error.prototype;

function errorHandler (err, req, res, next) {
    console.log('bubulina');
    if (err instanceof NotFound) {
        res.status(404).json({message:"what you are looking for is not here"});
    }
    else{
        next(err)
    }
    // res.status(500)
    // res.render('error', { error: err })
}
module.exports = {NotFound, errorHandler};