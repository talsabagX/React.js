import {UserActionTypes } from './user.types'

const initialState = {
    currentUser: null
}
const userReducer = (prevState = initialState, action)=>{
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
        return{
            ...prevState,
            currentUser: action.payload
        }
        default: return prevState
    }
}

export default userReducer;