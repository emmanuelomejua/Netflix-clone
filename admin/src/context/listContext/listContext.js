import { createContext, useReducer } from 'react'
import ListsReducer from './listReducer';

const INITIAL_STATE = {
    lists: [],
    fetching: false,
    error: false
}

export const ListConntext = createContext(INITIAL_STATE);


export const ListConntextProvider = ({children}) => {

    const [stste, dispatch] = useReducer(ListsReducer, INITIAL_STATE)

    return(
        <ListConntext.Provider value={{
            lists: stste.lists,
            fetching: stste.fetching,
            error: stste.error,
            dispatch
        }}>
            {children}
        </ListConntext.Provider>
    )
}