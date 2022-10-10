import { ON_CHANGE, SIGN_OUT, SUBMIT_DETAILS } from "./type"

export const submitDetails=(value)=> {
    
    return {
        type: SUBMIT_DETAILS,
        payload: value
    }
}

export const onChangeHandler=(value, field)=> {
    return {
        type: ON_CHANGE,
        payload: {
            value: value,
            field: field
        }
    }
}

export const signOut=()=> {
    return {
        type: SIGN_OUT,
    }
}