import { actionTypes } from "../action/actionTypes"

// const initialState = {
//     temp: []
// }


export const userInfo = (state = [], action) => {
    switch (action.type) {
        case actionTypes.TEMP:
            return action.payload

        default:
            return state
    }
}

const initState = {
    error: "",
    success: "",
    info: {}
}

export const User = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER:
            return { success: action.payload}

        case actionTypes.LOGIN:
            localStorage.setItem("login", true)
            return { success: action.payload }

        case actionTypes.LOGOUT:
            localStorage.clear("login")
            return { error: "", success: action.payload, info: {} }

        case actionTypes.ERROR:
            return { error: action.payload }

        default:
            return state
    }
}



