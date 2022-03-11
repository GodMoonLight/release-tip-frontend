import React from 'react'
import { Button } from 'antd'
import PropTypes from 'prop-types'
import './Mybutton.scss'

const MyButton = props => {
  const { children, className, ...rest } = props
  return <Button className={`manage-button ${className}`} shape="round" {...rest}> {children}</Button>
}

MyButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}
export default MyButton

