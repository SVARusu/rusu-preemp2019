const express = require('express');
const fs = require('fs')
const app = express();
const https = require('https');
const userRouter = require('./routes/users');
const bodyParser = require('body-parser')

//const {errorHandler} = require('./middleware/errorHandler');

//app.use(errorHandler);
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', userRouter)
app.use(express.urlencoded({extended: false}));



const server = https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, app);
server.listen(5000)

// module.exports = router;
module.exports = app;