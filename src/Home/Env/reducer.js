import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  list: {
    loading: true,
    data: []
  },
  detail: {
    loading: true,
    date: {}
  },
  service: {
    loading: true,
    data: {}
  }
}

const reducer = createReducer(initialState, {
  ENV_LIST_LOADING: (state, action) => ({
    ...state,
    list: {
      loading: action.payload,
      data: state.list.data
    }
  }),
  ENV_LIST: (state, action) => ({
    ...state,
    list: {
      loading: false,
      data: action.payload
    }
  }),
  ENV_DETAIL_LOADING: (state, action) => ({
    ...state,
    detail: {
      loading: action.payload,
      data: state.detail.data
    }
  }),
  ENV_DETAIL: (state, action) => ({
    ...state,
    detail: {
      loading: false,
      data: action.payload
    }
  }),
  SERVICE_DETAIL_LOADING: (state, action) => ({
    ...state,
    service: {
      loading: action.payload,
      data: state.service.data
    }
  }),
  SERVICE_DETAIL: (state, action) => ({
    ...state,
    service: {
      loading: false,
      data: action.payload
    }
  })
})

export default reducer
