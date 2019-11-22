import {USER_AUTHENTICATION, USER_SIGNOUT, USER_SIGNIN} from '@src/types'

export default (state = {}, action = {}) => {
    switch (action.type) {
        case USER_AUTHENTICATION:
            return {...state, processing: true}
        case USER_SIGNIN:
            return {...state, user: action.user, status: true, processing: false}
        case USER_SIGNOUT:
            return {}
        default:
            return state
    }
}
