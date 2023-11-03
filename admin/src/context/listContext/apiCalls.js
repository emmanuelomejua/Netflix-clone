import axios from "axios"
import { apiRoute } from "../../utils/apiRoute"
import { deleteListsFail, deleteListsStart, deleteListsSuccess, getListsFail, getListsStart, getListsSuccess } from "./listActions"


export const getListCalls = async (dispatch) => {
    dispatch(getListsStart())

    try {
        const res = await axios.get(apiRoute + 'lists', {
            headers: {
                token: `Bearer ` + JSON.parse(localStorage.getItem('user')).accessToken
            }
        })
       dispatch(getListsSuccess(res.data))
    } catch (error) {
        dispatch(getListsFail())
    }
}

//delete operation
export const deleteListCalls = async (id, dispatch) => {
    dispatch(deleteListsStart())

    try {
        await axios.get(apiRoute + `lists/${id}`, {
            headers: {
                token: `Bearer ` + JSON.parse(localStorage.getItem('user')).accessToken
            }
        })
       dispatch(deleteListsSuccess(id))
    } catch (error) {
        dispatch(deleteListsFail())
    }
}