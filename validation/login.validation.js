var db = require('../db');
var md5 = require('md5');
var bcrypt = require('bcrypt');

var saltRounds = 10;

module.exports.postLogin = function(req,res,next){
    var email = req.body.email;
    var password = req.body.pass;
    //var hasdPass = md5(password);

    // var hasdPass = bcrypt.compareSync(password,hash)
    // console.log(hasdPass);
    var user = db.get('users').find({email: email}).value();
    var hasdPass = bcrypt.compareSync(password,user.pass);
    
    if(!user){
        res.render('auth/login',{errors:["user doesn't exists"]});
        return;
    }
    if(!hasdPass){
        res.render('auth/login',{errors:["Wrong password!!!"]});
        return;
    }

    res.cookie("user",user.id);
    next();
}