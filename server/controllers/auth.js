'use strict';

require('dotenv').config()


const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

const encryptPassword = (password) => {
    const hashedPassword =  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    return hashedPassword ;
};

//Register
const Register = async (req, res) => {
    const {username, email, password} = req.body

    const isExist = await User.findOne({email: req.body.email})
    if(!isExist){
        try {
            const newUser =  new User({
                username,
                email,
                password: encryptPassword(password),
            })
            const user = await newUser.save()
             res.status(201).json(user)
        } catch (err) {
            res.status(500).json(err.message)
        }
    } else {
        res.status(400).json('A user with this email already exist')
    }
    
}


//Login
const Login = async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        if(!user){
            res.status(400).json('Invalid username or password')
        } else {
            const validate = await bcrypt.compare(req.body.password, user.password)
            if(!validate){
                res.status(400).json('Invalid username or password')
            } else {
                const accessToken = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT_KEY, {expiresIn: '7days'})
                const {password, ...info} = user._doc
                res.status(200).json({...info, accessToken})
            }
        }

    } catch (err) {
         res.status(500).json(err) 
    }
}

module.exports = { Register, Login }
