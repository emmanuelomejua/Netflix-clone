import axios from "axios"
import { createMovieFail, createMovieStart, createMovieSuccess, deleteMoviesFail, deleteMoviesStart, deleteMoviesSuccess, getMoviesFail, getMoviesStart, getMoviesSuccess } from "./MovieActions"
import { apiRoute } from "../../utils/apiRoute"


export const getMovieCalls = async (dispatch) => {
    dispatch(getMoviesStart())

    try {
        const res = await axios.get(apiRoute + 'movies', {
            headers: {
                token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken
            }
        })
       dispatch(getMoviesSuccess(res.data))
    } catch (error) {
        dispatch(getMoviesFail())
    }
}

export const createMovieCalls = async (movie, dispatch) => {
    dispatch(createMovieStart())

    try {
        const res = await axios.post(apiRoute + 'movies', movie, {
            headers: {
                token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken
            }
        })
       dispatch(createMovieSuccess(res.data))
    } catch (error) {
        dispatch(createMovieFail())
    }
}


export const deleteMovieCalls = async (id, dispatch) => {
    dispatch(deleteMoviesStart())

    try {
         await axios.delete(apiRoute + 'movies/' + id, {
            headers: {
                token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken
            }
        })
       dispatch(deleteMoviesSuccess(id))
    } catch (error) {
        dispatch(deleteMoviesFail())
    }
}
