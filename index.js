const connectToMongo = require('./db');
const express = require('express')

var cors = require('cors')
const corsOption = {
    origin: '*',
    credentials: true,
}
connectToMongo();
const app = express()
const port = process.env.PORT || 5000
    // app.use(cors(corsOption))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json())

//Available Routes
app.use('/api/auth', require('./router/auth'))
app.use('/api/note', require('./router/notes'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})