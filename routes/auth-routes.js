const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
	res.render('login');
});

// auth logout
router.get('/logout', (req, res) => {
	// handle with passport
	res.send('logging out')
});

// auth with google
router.get('/google', 
	passport.authenticate('google', 
		{scope:['profile']}
	));

// callback route for google to redirect to
// after google authenticate the user, it will send the code back
// passport will use that code to interact with Google
// to get the profile information
router.get('/google/redirect', passport.authenticate('google'),(req, res) => {
	res.send('you reached the callback URI')
});

module.exports = router;

