import { Badge, List, Space } from 'antd'
import moment from 'moment'
import PropTypes from 'prop-types'

import React from 'react'
const StatusMap = {
  PACKAGING: 'processing',
  SUCCESS: 'success',
  FAILED: 'error'
}

function InstructionList(props) {
  return <List
    dataSource={props.data}
    renderItem={item => (
      <List.Item>
        <Space size="large">
          <Badge status={StatusMap[item.result]} text={item.serviceName} />

          {moment(item.modifiedAt).format('YYYY-MM-DD HH:mm:SS')}
        </Space>
      </List.Item>
    )} />
}

const Desc = () => Object.keys(StatusMap).map(status => <div key={status}><Badge status={StatusMap[status]} text={status} /></div>)

InstructionList.propTypes = {
  data: PropTypes.array,
}

InstructionList.Desc = Desc
export default InstructionList
