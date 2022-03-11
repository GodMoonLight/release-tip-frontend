import React from 'react'
import PropTypes from 'prop-types'
import * as Actions from '../action'
import { connect } from 'react-redux'
import { Button } from '../../../components'
import { Badge, Descriptions, Space } from 'antd'
import { bindActionCreators } from 'redux'
import { CheckCircleTwoTone, CloseCircleTwoTone, EditOutlined } from '@ant-design/icons'

import moment from 'moment'
import './Env.scss'
import Service from './Service'
import InstructionList from './InstructionList'
import EnvEditor from './EnvEditor'

const mapState = (state) => ({
  detail: state.env.detail
})
const mapAction = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
})
const columns = (show) => [
  {
    title: 'Date',
    dataIndex: 'modifiedAt',
    width: 180,
    render(date) {
      return moment(date).format('YYYY-MM-DD HH:mm:SS')
    }
  },
  {
    title: 'name',
    dataIndex: 'name',
    width: 100,
  },
  {
    title: 'branch',
    dataIndex: 'branch',
    width: 100,
  },
  {
    title: 'address',
    dataIndex: 'address',
    width: 100,
  },
  {
    title: 'username',
    dataIndex: 'username',
    width: 100,
  },
  {
    title: 'status',
    dataIndex: 'status',
    width: 100,
    render(status) {
      return status === 'UP' ? <CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: '24px' }} /> :
        <CloseCircleTwoTone twoToneColor="red" style={{ fontSize: '24px' }} />
    }
  },
  {
    title: 'Action',
    key: 'action',
    render(data) {
      return <Space size="middle"><Button onClick={() => show(data)}>View Detail</Button><Button>Edit</Button></Space>
    }
  },
]

class Env extends React.Component {
  constructor(props) {
    super(props)
    this.state = { visible: false }
    this.showDrawer = this.showDrawer.bind(this)
    this.onClose = this.onClose.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    const name = this.props.match.params.name
    this.props.actions.getEnvDetail(name)
  }

  showDrawer(service) {
    this.setState({
      visible: true,
      service
    })
  }

  onClose() {
    this.setState({
      visible: false,
    })
  }

  onSubmit(data) {
    console.log(data)
    const { actions } = this.props
    actions.updateEnv(data)
    this.onClose()
  }

  render() {
    const { data = {}, loading } = this.props.detail
    const services = data.services || []


    return (
      <div className="manage-env">
        <Descriptions title={data.name} size="small" bordered
                      extra={<Button type="primary" icon={<EditOutlined />} onClick={this.showDrawer}>Edit</Button>}>
          <Descriptions.Item label="Env">
            {data.name}
          </Descriptions.Item>
          <Descriptions.Item label="Owner">
            {data.username}
          </Descriptions.Item>
          <Descriptions.Item label="Address">
            {data.address}
          </Descriptions.Item>
          <Descriptions.Item label="Last modified time">
            {moment(data.modifiedAt).format('YYYY-MM-DD HH:mm:SS')}
          </Descriptions.Item>
          <Descriptions.Item label="Status" span={2}>
            <Badge status="processing" text="Running" />
          </Descriptions.Item>
          <Descriptions.Item label="Description" span={3}>
            {data.context}
          </Descriptions.Item>
          <Descriptions.Item
            label={(<div>
              <div>Recent Update:</div>
              <br />
              <InstructionList.Desc />
            </div>)}
          >
            <InstructionList data={data.recentInstructions} />
          </Descriptions.Item>
        </Descriptions>
        {this.state.visible && <EnvEditor data={data} visible={this.state.visible} onClose={this.onClose} onSubmit={this.onSubmit} />}
        <br />
        <br />
        <br />
        <Service loading={loading} env={data.name} services={services} />
      </div>
    )
  }
}

Env.propTypes = {
  actions: PropTypes.any.isRequired,
  detail: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default connect(mapState, mapAction)(Env)
