import { combineReducers } from 'redux'

import auth from './auth'

const rootReducer = combineReducers({
    app: (state = {}, action = {}) => {
        return {}
    },
    auth
});

export default rootReducer;
