// app/routes.js
module.exports = function(app,passport){

	//=============================
	// HOME PAGE (with login links)
	//=============================

	app.get('/',function(req,res){
		res.render('index.ejs');
	});

	//=============================
	// LOGIN ======================
	//=============================

	app.get('/login',function(req,res){
		res.render('login.ejs',{message:req.flash('login')});
	});

	// process the login form
	// app.post('/login',do all the passport stuff here);

	app.post('/login',passport.authenticate('local-login',{
		successRedirect: '/profile',
		failureRedirect: '/login',
		failureFlash: true
	}));

	//=================================
	// SIGNUP =========================
	//=================================
	// show the signup form

	app.get('/signup',function(req,res){
		res.render('signup.ejs',{message:req.flash('signup')});
	});

	// process the sign up form
	// app.post('/signup',do all the passport stuff here);

	app.post('/signup',passport.authenticate('local-signup',{
		successRedirect: '/profile', // redirect to the secure profile section
		failureRedirect: '/signup', // redirect back to the signup page if there is an error
		failureFlash: true // allow flash messages
	}))

	//===================================
	// PROFILE SECTION ==================
	//===================================
	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)

	app.get('/profile',isLoggedIn,function(req,res){
		res.render('profile.ejs',{
			user: req.user // get the user out of session and pass to template
		});
	});


	//======================================
	// LOGOUT ==============================
	//======================================

	app.get('/logout',function(req,res){
		req.logout();
		res.redirect('/');
	})

	app.get('/flash',function(req,res){
		req.flash('info','Flash is back!')
		res.redirect('/flash');
	})
}

function isLoggedIn(req,res,next){
	// if user is authenticated in the session, carry on
	if(req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');

}