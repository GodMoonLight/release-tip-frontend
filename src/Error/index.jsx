import React from 'react'
import { Button } from '../components'
import './index.scss'
import { Result } from 'antd'
import { Link } from 'react-router-dom'

const Error = () => (
  <div className="manage-error">
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Link to="/"><Button type="primary">Back Home</Button></Link>}
    />
  </div>
)

export default Error
