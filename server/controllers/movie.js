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

const updateMovie = async (req, res) => {
    if(req.user.isAdmin){
        try {
            const movie = await Movie.findById(req.params.id, {$set: req.body}, {new: true})
            await movie.save()
            res.status(200).json(movie)
        } catch (error) {
            res.status(500).json(error)
        }
    } else{
        res.status(403).json('Not allowed to do this')
    }
}

const deleteMovie = async (req, res) => {
    if(req.user.isAdmin){
        try {
            const movie = await Movie.findByIdAndDelete(req.params.id)
            res.status(200).json('Movie has been deleted')
        } catch (error) {
            res.status(500).json(error)
        }
    } else{
        res.status(403).json('Not allowed to do this')
    }
}

const getMovie = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id)
        res.status(200).json(movie)
    } catch (error) {
        res.status(500).json(error)
    }
}


//will fetch random movies
const getRandom = async (req, res) => {
    const type = req.query.type;
    let movie;
    try {
       if(type === 'series'){
        movie = await Movie.aggregate([
            {$match: {isSeries: true} },
            {$sample: { size: 1 } }
        ])
       } else {
        movie = await Movie.aggregate([
            {$match: {isSeries: false} },
            {$sample: { size: 1 } }
        ])
       }
       res.status(200).json(movie)
    } catch (error) {
        res.status(500).json(error)
    }

}

//will getall movies
const getAll = async (req, res) => {
    if(req.user.isAdmin){
        const latest = req.body.latest
        try {
        const movie = latest ? await Movie.find().sort({_id: -1}).limit(10) : await Movie.find()
        res.status(200).json(movie.reverse())
        } catch (error) {
            res.status(500).json(error)
        }
    }
}


module.exports = { createMovie, updateMovie, deleteMovie, getMovie, getRandom, getAll }
