import { actionTypes } from "./actionTypes";
import * as api from '../../api'

export const getTempData = () => async(dispatch) =>{
    try{
        const { data } = await api.getTemp();
        dispatch({
            type: actionTypes.TEMP,
            payload: data
        })
    } catch(err){
        alert(err)
    }
}