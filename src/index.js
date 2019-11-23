import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { IntlProvider } from 'react-intl'

import App from './App'
import * as serviceWorker from './serviceWorker'

import reducer from './reducers'
import sagas from './sagas'
import jwt from './utils/jwt'

import { USER_AUTHENTICATION } from './types'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
   reducer,
   composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(sagas)

// validate token when reload the pages
if (jwt.getToken()) {
    store.dispatch({type: USER_AUTHENTICATION})
}

ReactDOM.render(
    <Provider store={store}>
        <IntlProvider locale='en'>
            <App />
        </IntlProvider>
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
