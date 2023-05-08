const User = require('../models/User')
const bcrypt = require('bcrypt')

//Update user
const updateUser = async (req, res) => {
    if(req.user.id === req.params.id || req.user.isAdmin){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }

        try {
            const updated = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            },
            {
                new: true
            });
            res.status(200).json(updated)
        } catch (err) {
            res.status(500).json(err.message)
        }
    } else{
        res.status(403).json('Not allowed to perform this action')
    }
} 

//Delete user
const deleteUser = async (req, res) => {
        if(req.user.id === req.params.id || req.user.isAdmin){

        try {
        await User.findByIdAndDelete(req.params.id)   
            res.status(200).json('User deleted successfully')
        } catch (error) {
            res.status(500).json(error.message)
        }
    } else{
        res.status(500).json('You can only delete your account')
    }
} 

//Get user
const getUser = async (req, res) => {
       try {
        const user = await User.findById(req.params.id);
        const {password, ...info} = user._doc
            res.status(200).json(...info)
        } catch (error) {
            res.status(500).json(error.message)
        }
} 

//All users
const getAllUsers = async (req, res) => {
        const query = req.query.new;
    if(req.user.isAdmin){

        try {
            const users = query ? await User.find().sort({_id: -1}).limit(5) : await User.find()
         
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json(error.message)
        }
    } else{
        res.status(403).json('You are not allowed to do this')
    }
} 

//Users stats
const getStats = async (req, res) => {
    const today = new Date()
    const lastYear = today.setFullYear(today.setFullYear() - 1)
    const monthsArr = [
        'January',
        'Febuary',
        'March',
        'April',
        'May',
        'June',
        'July',
        'Septemper',
        'October',
        'November',
        'December'
    ];

    try {
        const data = await User.aggregate([
            {
                $project: {
                    month: {$month: '$createdAt'}
                }
            }, {
                $group: {
                    _id: '$month',
                    total: {$sum: 1}
                }
            }
        ])
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


module.exports = { updateUser, deleteUser, getUser, getAllUsers, getStats }