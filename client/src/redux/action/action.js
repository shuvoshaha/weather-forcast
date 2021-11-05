import { actionTypes } from "./actionTypes";
import * as api from '../../api'

export const getUserIN = () => async (dispatch) => {
    try {
        const { data } = await api.getUserInfo();
        dispatch({
            type: actionTypes.TEMP,
            payload: data
        })
    } catch (err) {
        alert(err.response.data.message)
    }
}
    // User Register    
    export const userRegister = (datas) => async (dispatch) => {
        try {

            const { data } = await api.Register(datas);
            console.log(data)
            dispatch({ type: actionTypes.REGISTER, payload: data.message })

        } catch (err) {
            dispatch({ type: actionTypes.ERROR, payload: err.response.data.message })


        }
    }

    // User Login
    export const userLogin = (datas) => async (dispatch) => {
        try {

            const { data } = await api.Login(datas);
            dispatch({ type: actionTypes.LOGIN, payload: data })
            window.location.href ="/"

        } catch (err) {
            dispatch({ type: actionTypes.ERROR, payload: err.response.data.message })

        }
    }


// User Logout
export const userLogout = () => async (dispatch) => {
    try {

        const { data } = await api.Logout();
        dispatch({ type: actionTypes.LOGOUT, payload: data })
        window.location.href ="/login"


    } catch (err) {
        dispatch({ type: actionTypes.ERROR, payload: err.response.data.message })
        
    }
}    


