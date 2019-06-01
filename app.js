const express = require('express');
const authRoutes = require('./routes/auth-routes.js');
const app = express();
const port = process.env.PORT || 3000

// setup view engine
app.set('view engine', 'ejs');

// set up routes
app.use('/auth',authRoutes);

// create home route
app.get('/', (req, res) => {
	res.render('home');
})

app.listen(port, () => {
	console.log('app now listen')
});