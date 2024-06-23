const express = require('express');
// const routes = require('./routes/api/v1/index');
const routes = require('./routes/api/v1/index')
var cors = require('cors')
const app = express();
app.use(express.json())

app.use(cors());
// app.routes('')

app.use('/api/v1', routes);

app.listen(8000, () => {
    console.log("server start at port 8000.");
});

