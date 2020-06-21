var db = require('../db');
module.exports.login = function(req,res){
    res.render('auth/login');
}
module.exports.postLogin = function(req, res){
    res.redirect("/users");
}