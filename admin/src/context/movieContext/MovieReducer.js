const MoviesReducer = (state, action) => {
    switch(action.type){
        case 'GET_MOVIES_START':
            return {
                movies: [],
                fetching: true,
                error: false,
            }
        case 'GET_MOVIES_SUCCESS':
            return {
                movies: action.payload,
                fetching: false,
                error: false,
            }
        case 'GET_MOVIES_FAIL':
            return {
                movies: [],
                fetching: false,
                error: true,
            }
        default: 
            return state
    }
}

export default MoviesReducer
