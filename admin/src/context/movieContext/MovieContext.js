import { createContext, useReducer } from "react"
import MoviesReducer from './MovieReducer'

const INITIAL_STATE = {
    name: 'movies',
    state: {
        movies: [],
        fetching: true,
        error: true,
    }
}

export const MoviesContext = createContext(INITIAL_STATE)

export const MoviesContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(MoviesReducer, INITIAL_STATE)

    return (
        <MoviesContext.Provider value={{
            movies: state.movies,
            fetching: state.fetching,
            error: state.error,
            dispatch
        }}>
            {children}
        </MoviesContext.Provider>
    )
}