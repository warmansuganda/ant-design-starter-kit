import { put, call, takeLatest } from 'redux-saga/effects'

import history from '@src/history'
import api from '@src/api'
import {USER_AUTHENTICATION, USER_SIGNOUT, USER_SIGNIN} from '@src/types'

const authService = () => api.get('/auth').then(res => res.data)

function* authSaga() {
    try {
        const auth = yield call(authService)
        const user = {
            id: '029485029348502',
            name: 'Warman Suganda'
        }
        yield put({type: USER_SIGNIN, user: user})
    } catch (e) {
        yield put({type: USER_SIGNOUT})
    }
}

function* logoutSaga() {
    yield history.push("/login")
}

export default function* watchUserAuthentication() {
  yield takeLatest(USER_AUTHENTICATION, authSaga);
  yield takeLatest(USER_SIGNOUT, logoutSaga);
}
