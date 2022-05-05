var express = require('express');
var path = require('path')
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(path.resolve(),'public')));

app.listen(PORT);