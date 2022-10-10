import { ON_CHANGE, SIGN_OUT, SUBMIT_DETAILS } from "./type"

const initialState = {
    name: '',
    userName: '',
    password: '',
    status: null
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_DETAILS:
            return {
                ...state,
                status: action.payload
            }
            
        case ON_CHANGE:
                return {
                    ...state,
                    [action.payload.field]: action.payload.value
                }
        case SIGN_OUT:
            return {
                ...state,
                name: '',
                userName: '',
                password: '',
                status: false
            }

        default:
            return state
    }
}