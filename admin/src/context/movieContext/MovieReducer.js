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

            //create
        case 'CREATE_MOVIE_START':
            return {
                ...state,
                fetching: true,
                error: false,
            }
        case 'CREATE_MOVIE_SUCCESS':
            return {
                movies: [...state.movies, action.payload],
                fetching: false,
                error: false,
            }
        case 'CREATE_MOVIE_FAIL':
            return {
                ...state,
                fetching: false,
                error: true,
            }


            //update
        case 'UPDATE_MOVIE_START':
            return {
                ...state,
                fetching: true,
                error: false,
            }
        case 'UPDATE_MOVIE_SUCCESS':
            return {
                movies: state.movies.map((movie) => movie._id === action.payload._id && action.payload),
                fetching: false,
                error: false,
            }
        case 'UPDATE_MOVIE_FAIL':
            return {
                ...state,
                fetching: false,
                error: true,
            }

            //delete operation
        case 'DELETE_MOVIES_START':
        return {
            ...state,
            fetching: true,
            error: false,
        }
        case 'DELETE_MOVIES_SUCCESS':
            return {
                movies: state.movies.filter((movie) => movie._id !== action.payload),
                fetching: false,
                error: false,
            }
        case 'DELETE_MOVIES_FAIL':
            return {
                ...state,
                fetching: false,
                error: true,
            }
        default: 
            return state
    }
}

export default MoviesReducer
