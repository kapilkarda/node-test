const express = require('express');
const app = express();
const api = require('./Router/route');



app.use('/api',api);

app.listen(3000,console.log('Server Run 3000'))
