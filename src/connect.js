import { onChangeHandler, signOut, submitDetails } from "./redux/login/action"

export const mapStateToProps = state => {
    return {
        state: state
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        submitHandler: (value) => dispatch(submitDetails(value)),
        onChangeEvent: (value, field) => dispatch(onChangeHandler(value, field)),
        signOutHandler: ()=> dispatch(signOut())
    }
}