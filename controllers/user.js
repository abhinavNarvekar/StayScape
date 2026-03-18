

const User=require("../models/user");
module.exports.signup = async (req, res, next) => {
    try {
        let { username, email, password } = req.body;

        const newUser = new User({ email, username });
        let registeredUser = await User.register(newUser, password);

        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }

            req.flash("success", "Welcome to StayScape");

            let redirectUrl = req.session.redirectUrl || "/listings";
            delete req.session.redirectUrl;

            res.redirect(redirectUrl);
        });

    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

module.exports.renderSignupForm=(req,res)=>{
    res.render("users/signup.ejs");
}

module.exports.renderLoginForm=(req,res)=>{
    res.render("users/login.ejs");
}

module.exports.login=async(req,res)=>{
    // res.render("users/login.ejs");
     req.flash("success","Welcome to StayScape! You are logged in!");
     let redirectUrl=res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};
module.exports.logout=(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","Logged You out");
        res.redirect("/listings");
    })
}

