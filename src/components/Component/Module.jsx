import React from 'react'
import PropTypes from 'prop-types'
import { Card, Col, Input, Row, Select, Typography } from 'antd'

const { Title } = Typography

const Type = {
  INPUT: Input,
  SELECT: Select,
  MODULE: Module
}

class Module extends React.Component {
  render() {

    const { title, options, level } = this.props
    return (
      <Card>
        {title && <Title level={level}>{title.value}</Title>}
        {options.forEach(a => {

          const ShowType = Type[a.type]
          if (a.type === Type.MODULE) {
            return <Module {...a} />
          }

          return (<Row><Col span={6}>a.title</Col><Col><ShowType {...a.options} value={a.value} /></Col></Row>)
        })}

      </Card>
    )
  }
}

Module.propTypes = {
  title: PropTypes.object.isRequired,
  level: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Module
