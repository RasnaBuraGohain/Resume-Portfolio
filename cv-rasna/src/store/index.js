import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createBrowserHistory, routerReducer, routerMiddleware, startListener } from 'redux-first-routing'
import { composeWithDevTools } from 'redux-devtools-extension';

const history = createBrowserHistory()

const rootReducer = combineReducers({

    location: routerReducer,
})

const middleware = applyMiddleware(routerMiddleware(history))

const store = createStore(rootReducer, composeWithDevTools(middleware))

startListener(history, store)

export default store