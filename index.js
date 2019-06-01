var express = require('express');
var morgan = require('morgan');

var app = express();
var port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.use('/', (req, res) => {
	res.send('Our First Express program. And then update. More update!!!');
})

app.listen(port);