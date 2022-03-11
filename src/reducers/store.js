// import { createBrowserHistory } from 'history'
import envReducer from '../Home/Env/reducer'

import { configureStore } from '@reduxjs/toolkit'

// import thunk from 'redux-thunk'
//
// const createRootReducer = (history) => combineReducers({
//   router: connectRouter(history),
//   // rest of your reducers
//   env: envReducer
// })

// export const history = createBrowserHistory()

export default function configureStore2(preloadedState) {
  const store = configureStore({
      ...preloadedState,
      reducer: {
        env: envReducer
      }
    }
  )

  return store
}

// let store = createStore(combineReducers({}))
//
// export default store
