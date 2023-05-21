import { createContext, useReducer } from "react"
import AuthReducer from "./AuthReducer"

const INITIAL_STATE = {
    name: 'user',
    state: {
        error: null,
        user: null,
        fetching: false,
    }
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

    return(
        <AuthContext.Provider value={{
            error: state.error, 
            user: state.user, 
            fetching: state.fetching, 
            dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
