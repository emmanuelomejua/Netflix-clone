export const getListsStart = () => ({
    type: 'GET_LISTS_START'
})

export const getListsSuccess = (lists) => ({
    type: 'GET_LISTS_SUCCESS',
    payload: lists
})

export const getListsFail = () => ({
    type: 'GET_LISTS_FAIL'
})

//delete
export const deleteListsStart = () => ({
    type: 'DELETE_LISTS_START'
})

export const deleteListsSuccess = (id) => ({
    type: 'DELETE_LISTS_SUCCESS',
    payload: id
})

export const deleteListsFail = () => ({
    type: 'DELETE_LISTS_FAIL'
})
