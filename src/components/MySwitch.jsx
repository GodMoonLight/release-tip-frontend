import React from 'react'
import { Route, Routes } from 'react-router'
import Error from '../Error'

const MySwitch = props => (
  <Routes>
    {props.children}
  </Routes>
)
export default MySwitch

