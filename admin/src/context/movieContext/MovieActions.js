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

//create
export const createMovieStart = () => ({
    type: 'CREATE_MOVIE_START'
})

export const createMovieSuccess = (movie) => ({
    type: 'CREATE_MOVIE_SUCCESS',
    payload: movie
})

export const createMovieFail = () => ({
    type: 'CREATE_MOVIE_FAIL'
})

//update
export const updateMovieStart = () => ({
    type: 'UPDATE_MOVIE_START'
})

export const updateMovieSuccess = (movie) => ({
    type: 'UPDATE_MOVIE_SUCCESS',
    payload: movie
})

export const updateMovieFail = () => ({
    type: 'UPDATE_MOVIE_FAIL'
})

//delete
export const deleteMoviesStart = () => ({
    type: 'DELETE_MOVIES_START'
})

export const deleteMoviesSuccess = (id) => ({
    type: 'DELETE_MOVIES_SUCCESS',
    payload: id
})

export const deleteMoviesFail = () => ({
    type: 'DELETE_MOVIES_FAIL'
})