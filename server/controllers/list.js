const List = require('../models/List')

//create list
const createList = async (req, res) => {
    if(req.user.isAdmin){
        try {
            const list = new List(req.body)
            const newList =  await list.save()
            res.status(201).json(newList)
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(401).json('You are not allowed to do this')
    }
  
}

//delete
const deleteList = async (req, res) => {
    if(req.user.isAdmin){
        try {
            const list = await List.findByIdAndDelete(req.params.id)
            res.status(200).json('The list has been deleted successfuly')
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json('Sorry, you are not allowed to do this')
    }
}

//get
const getList = async (req, res) => {
    const typeQuery = req.query.type
    const genreQuery = req.query.genre

    let list = [];
    try {
        if(typeQuery){
            if(genreQuery){
                list = await List.aggregate([
                    { $sample: { size: 10 }},
                    { $match: { type: typeQuery, genre: genreQuery }}
                ])
            } else {
                list =  await List.aggregate([
                    { $sample: { size: 10 }},
                    { $match: { type: typeQuery }}
                ])
            }
        } else {
            list = await List.aggregate([
                { $sample: { size: 10 }}
            ])
        }
        res.status(200).json(list)
    } catch (error) {
         res.status(500).json(error)
    }
}


module.exports = { createList, deleteList, getList }
