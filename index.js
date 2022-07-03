const connectToMongo = require('./db');
const express = require('express')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});
var cors = require('cors')
const corsOption = {
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}
connectToMongo();
const app = express()
const port = process.env.PORT || 5000
app.use(cors(corsOption))
app.use(express.json())

//Available Routes
app.use('/api/auth', require('./router/auth'))
app.use('/api/note', require('./router/notes'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})