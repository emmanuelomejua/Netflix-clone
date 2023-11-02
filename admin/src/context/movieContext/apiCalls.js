import axios from "axios"
import { deleteMoviesFail, deleteMoviesStart, deleteMoviesSuccess, getMoviesFail, getMoviesStart, getMoviesSuccess } from "./MovieActions"
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

export const createMovieCalls = async (dispatch) => {
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
