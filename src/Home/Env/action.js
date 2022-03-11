import { createAction } from '@reduxjs/toolkit'
import request from '../../utils/request'

export const envListLoading = createAction('ENV_LIST_LOADING', loading => ({ payload: loading }))
export const setEnvList = createAction('ENV_LIST', data => ({ payload: data }))

export const getRequest = () => ((dispatch) => {
  dispatch(envListLoading(true))
  request.get('/env/info').then(data => {
    dispatch(setEnvList(data))
    dispatch(envListLoading(false))
  })
})

export const envDetailLoading = createAction('ENV_DETAIL_LOADING')
export const setEnvDetail = createAction('ENV_DETAIL')

export const getEnvDetail = (name) => ((dispatch) => {
  dispatch(envDetailLoading(true))
  request.get('/env/detail', { name }).then(data => {
    dispatch(setEnvDetail(data))
    dispatch(envDetailLoading(false))
  })
})

export const updateEnv = (data) => ((dispatch) => {
  dispatch(envDetailLoading(true))
  request.patch(`/env/${data.name}`, data).then(() => {
    dispatch(getEnvDetail(data.name))
  })
})

export const serviceDetailLoading = createAction('SERVICE_DETAIL_LOADING')
export const serviceDetail = createAction('SERVICE_DETAIL')
export const getServiceDetail = (env, service) => ((dispatch) => {
  dispatch(serviceDetailLoading(true))
  request.get(`/env/${env}/service/${service}`).then(data => {
    dispatch(serviceDetail(data))
    dispatch(serviceDetailLoading(false))
  })
})
