import React from 'react'

import Logo from './logo.png'
import DashBoardNotActive from './home.svg'
import DashBoardActive from './home-blue.svg'
import EnvActive from './list-blue.svg'
import EnvNotActive from './list.svg'

import './index.scss'
import Icon from "@ant-design/icons";


// eslint-disable-next-line react/prop-types
export const DashBoard = ({ active = false }) => (
  <div className="scaling-svg-container">
    <Icon component={active ? DashBoardActive : DashBoardNotActive}/>
  </div>
);
// eslint-disable-next-line react/prop-types
export const EnvIcon = ({ active = false }) => (
  <div className="scaling-svg-container">
    <Icon component={active ? EnvActive : EnvNotActive}/>
  </div>
)

export { Logo }
