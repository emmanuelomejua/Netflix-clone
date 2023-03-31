const Movie = require('../models/Movie');

//create movie
const createMovie = async (req, res) => {
    if(req.user.isAdmin){
       try {
        const newMovie = await Movie.create(req.body)
        const savedM = await newMovie.save()
        res.status(201).json(savedM)
       } catch (error) {
        res.status(500).json(error)
       }
    } else {
        res.status(403).json('Not allowed')
    }
}

const updateMovie = async (req, res) = {
    
}


module.exports = { createMovie }