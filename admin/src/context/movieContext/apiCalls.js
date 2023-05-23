import axios from "axios"
import { getMoviesFail, getMoviesStart, getMoviesSuccess } from "./MovieActions"
import { apiRoute } from "../../utils/apiRoute"

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjYzNDBkYTEzODE0NmM5MmMyYjM4YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NDY4NzcxNywiZXhwIjoxNjg1MjkyNTE3fQ.8qzclHh2Fau29pI6rLdQ3vsaa17mECOUEnnzAw5woy4'


export const getMovieCalls = async (dispatch) => {
    dispatch(getMoviesStart())

    try {
        const res = await axios.get(apiRoute + 'movies', {
            headers: {
                token: `Bearer ${TOKEN}`
            }
        })
       dispatch(getMoviesSuccess(res.data))
    } catch (error) {
        dispatch(getMoviesFail())
    }
}
