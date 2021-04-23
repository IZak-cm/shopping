const db = require("../models");
const config = require("../config/auth.config")
const User = db.user

let jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    // Save User to Database
    User.create({
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, 8),
      email: req.body.email,
      phone: req.body.pone,
      country: req.body.country,
      city: req.body.city,
      postcode:req.body.postcode,
      name: req.body.name,
      address: req.body.address
    })
    
}