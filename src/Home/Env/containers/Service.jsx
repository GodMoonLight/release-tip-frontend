import React from 'react'
import PropTypes from 'prop-types'
import * as Actions from '../action'
import { connect } from 'react-redux'
import { Descriptions, Drawer, PageHeader, Space, Table, Tag } from 'antd'
import moment from 'moment'
import { bindActionCreators } from 'redux'
import './Env.scss'
import InstructionList from './InstructionList'
import { CheckCircleTwoTone, CloseCircleTwoTone, PlusOutlined } from '@ant-design/icons'
import { Button } from '../../../components'

const mapState = (state) => ({
  service: state.env.service
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

class Service extends React.Component {
  constructor(props) {
    super(props)
    this.state = { visible: false }
    this.showDrawer = this.showDrawer.bind(this)
    this.onClose = this.onClose.bind(this)
  }

  showDrawer(service) {
    this.setState({
      visible: true,
      service
    })
    this.fetchServiceDetail(service.env, service.name)
  }

  onClose() {
    this.setState({
      visible: false,
    })
  }

  fetchServiceDetail(env, name) {
    if (env || name) {
      this.props.actions.getServiceDetail(env, name)
    }
  }

  render() {
    const { data = {}, loading } = this.props.service
    console.log(this.props.service, 'service')
    console.log(loading)

    return (
      <PageHeader
        title="Services"
        className="site-page-header"
        subTitle="This is a subtitle"
        tags={<Tag color="blue">Running</Tag>}
        extra={[
          <Button key="1" type="primary" icon={<PlusOutlined />}>
            New
          </Button>,
        ]}
        avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
        // breadcrumb={{ routes }}
      >
        <Table
          header="Services"
          bordered
          rowKey="name"
          columns={columns(this.showDrawer)}
          dataSource={this.props.services}
          loading={this.props.loading}
          pagination={{ pageSize: 30 }}
        />
        <Drawer
          width={640}
          placement="right"
          closable={false}
          destroyOnClose
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Descriptions bordered title={data.name} column={2} layout="vertical">
            <Descriptions.Item label="UserName">{data.username}</Descriptions.Item>
            <Descriptions.Item label="Address">{data.address}</Descriptions.Item>
            <Descriptions.Item label="Branch">{data.branch}</Descriptions.Item>
            <Descriptions.Item label="Last Modify Time">
              {moment(data.modifiedAt).format('YYYY-MM-DD HH:mm:SS')}
            </Descriptions.Item>
            <Descriptions.Item label="Recent Updates">
              <InstructionList data={data.instructions} />
            </Descriptions.Item>
          </Descriptions>
        </Drawer>
      </PageHeader>

    )
  }
}

Service.propTypes = {
  actions: PropTypes.any.isRequired,
  service: PropTypes.object.isRequired,
  services: PropTypes.arrayOf(PropTypes.any).isRequired,
  env: PropTypes.string,
  loading: PropTypes.bool.isRequired,
}

export default connect(mapState, mapAction)(Service)
