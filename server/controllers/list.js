const List = require('../models/List')

//create list
const createList = async (req, res) => {
    if(req.user.isAdmin){

    } else {
        res.status(403).json('Not allowed to do this')
    }
}