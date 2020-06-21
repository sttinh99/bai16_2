var db = require('../db');
module.exports.requireAuth = function(req,res,next){
    if(!req.cookies.user){
        res.redirect('/auth/login');
        return;
    }
    next();
}