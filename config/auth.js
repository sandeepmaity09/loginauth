// config/auth.js

// expose our config directly to our application using module.exports 

module.exports = {
	'facebookAuth' : {
		'clientID'		: "value",
		'clientSecret'	: "value",
		'callbackURL'	: 'http://localhost:8080/auth/facebook/callback',
		'profileURL'	: 'http://graph.facebook.com/v2.11/me?fields=first_name,last_name,email',
		'profileFields'	: ['id','email','name'] // for requesting permission from facebook API
	},

	'twitterAuth' : {
		'consumerKey' : 'value',
		'consumerSecret' : 'value',
		'callbackURL' : 'http://localhost:8080/auth/twitter/callback'
	}

	'googleAuth' : {
		'clientID' : 'value',
		'clientSecret' : 'value',
		'callbackURL' : 'http://localhost:8080/auth/google/callback'
	}
}