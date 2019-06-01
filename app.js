const express = require('express');

const app = express();
const port = process.env.PORT || 3000

// setup view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.send('hello world');
})

app.listen(port, () => {
	console.log('app now listen')
});