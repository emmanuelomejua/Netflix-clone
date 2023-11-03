const ListsReducer = (state, action) => {
    switch(action.type){
        case 'GET_LISTS_START':
            return {
                lists: [],
                fetching: true,
                error: false,
            }
        case 'GET_LISTS_SUCCESS':
            return {
                lists: action.payload,
                fetching: false,
                error: false,
            }
        case 'GET_LISTS_FAIL':
            return {
                lists: [],
                fetching: false,
                error: true,
            }

        //delete
        case 'DELETE_LISTS_START':
            return {
                ...state,
                fetching: true,
                error: false,
            }
        case 'DELETE_LISTS_SUCCESS':
            return {
                lists: state.lists.filter((list) => list._id !== action.payload),
                fetching: false,
                error: false,
            }
        case 'DELETE_LISTS_FAIL':
            return {
                ...state,
                fetching: false,
                error: true,
            }
        default: 
            return state
    }
}

export default ListsReducer
