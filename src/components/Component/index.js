import React from 'react'
import PropTypes from 'prop-types'
import { Input, Select } from 'antd'

const Type = {
  INPUT: Input,
  SELECT: Select,
  TEXT: Text
}

const Element = props => {
  const { type, options, children } = props

  const ShowType = Type[type]

  return <ShowType {...options}>{children}</ShowType>

}

Element.propTypes = {
  type: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  children: PropTypes.object
}

export default Element
