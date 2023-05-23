export const getMoviesStart = () => ({
    type: 'GET_MOVIES_START'
})

export const getMoviesSuccess = (movies) => ({
    type: 'GET_MOVIES_SUCCESS',
    payload: movies
})

export const getMoviesFail = () => ({
    type: 'GET_MOVIES_FAIL'
})