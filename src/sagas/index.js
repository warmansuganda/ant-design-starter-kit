import { fork } from 'redux-saga/effects'

import watchAuth from './auth'

export default function* startForman() {
  yield fork(watchAuth)
}
