import React from 'react'
import PropTypes from 'prop-types'
import * as Actions from '../action'
import { connect } from 'react-redux'
import { AuthDiv, Breadcrumb, Button, SearchForm } from '../../../components'
import { Table } from 'antd'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

const mapState = (state) => ({
  list: state.env.list
})
const mapAction = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
})
const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: 'username',
    dataIndex: 'username',
    width: 200,
  },
  {
    title: 'address',
    dataIndex: 'address',
    width: 200,
  },
  {
    title: 'context',
    dataIndex: 'context',
    width: 400
  },
  {
    title: 'Action',
    dataIndex: 'name',
    render(name) {
      return <Link to={`/env/${name}`}><Button>View Detail</Button></Link>
    }
  },
]

class EnvList extends React.Component {

  componentDidMount() {
    this.props.actions.getRequest()
  }

  handleSearch = (value) => {
    console.log(value);
  }

  render() {
    const { data, loading } = this.props.list
    return (
      <AuthDiv auth="config.src.view">
        <Breadcrumb>
          <Breadcrumb.Item>首页</Breadcrumb.Item>
          <Breadcrumb.Item>配置中心</Breadcrumb.Item>
          <Breadcrumb.Item>环境配置</Breadcrumb.Item>
        </Breadcrumb>
        <SearchForm placeholder="请输入环境名称" loading={false} onSearch={this.handleSearch}>
        </SearchForm>
        <Table
          bordered
          rowKey="name"
          columns={columns}
          dataSource={data}
          loading={loading}
          pagination={{ pageSize: 20 }}
        />
      </AuthDiv>
    )
  }
}

EnvList.propTypes = {
  actions: PropTypes.any.isRequired,
  list: PropTypes.object.isRequired
}
export default connect(mapState, mapAction)(EnvList)
