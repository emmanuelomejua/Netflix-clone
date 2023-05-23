import { createContext, useReducer, useEffect } from "react"
import AuthReducer from "./AuthReducer"

const INITIAL_STATE = {
    name: 'user',
    state: {
        user: localStorage.getItem('user') ||  null,
        error: null,
        fetching: false,
    }
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user))
    }, [state.user])

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
