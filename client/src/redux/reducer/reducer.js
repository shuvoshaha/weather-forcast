import { actionTypes } from "../action/actionTypes"

// const initialState = {
//     temp: []
// }


export const temp = (state = [], action) =>{
    switch(action.type){
        case actionTypes.TEMP: 
            return action.payload

            default:
                return state
    }
}