const fs = require('fs');

module.exports = () => {
    fs.readFile(__dirname + '/images.json', function(err, data){
        if(err){
            return console.log(err)
        }
        console.log(JSON.parse(data));
        return JSON.parse(data);
    });
}