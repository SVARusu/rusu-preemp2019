const express = require('express');
const app = express();
const http = require('http');
const userRouter = require('./routes/users');
const server = http.createServer(app);
const bodyParser = require('body-parser')


app.use('/', userRouter)
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

server.listen(5000, 'localhost')

// module.exports = router;
// module.exports = app;