import React from 'react';
import { Table, Modal, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Action, TableCard, AuthButton } from '../components';


const ServiceTable = (props) => {

  const { isFetching, dataSource, fetchRecords, editRecord } = props;

  const handleDelete = (text) => {
    Modal.confirm({
      title: '删除确认',
      content: `将会同步删除服务的配置信息，确定要删除服务【${text['name']}】? `,
      onOk: () => {
      }
    })
  };

  const toConfig = (info) => {

  }

  const edit = (record) => {
    editRecord(record)
  }


  return (
    <TableCard
      tKey="cs"
      rowKey="id"
      title="服务列表"
      loading={isFetching}
      dataSource={dataSource}
      onReload={fetchRecords}
      actions={[
        <AuthButton
          key="1"
          auth="config.src.add"
          type="primary"
          icon={<PlusOutlined/>}
          onClick={() => edit({})}
        >
          新建
        </AuthButton>
      ]}
      pagination={{
        showSizeChanger: true,
        showLessItems: true,
        showTotal: total => `共 ${total} 条`,
        pageSizeOptions: ['10', '20', '50', '100']
      }}>
      <Table.Column title="服务名称" dataIndex="name"/>
      <Table.Column title="标识符" dataIndex="key"/>
      <Table.Column ellipsis title="描述信息" dataIndex="desc"/>

      <Table.Column title="操作" render={info => (
        <Action>
          <Action.Button auth="config.src.edit" onClick={() => edit(info)}>编辑</Action.Button>
          <Action.Button auth="config.src.view_config" onClick={() => toConfig(info)}>配置</Action.Button>
          <Action.Button danger auth="config.src.del" onClick={() => handleDelete(info)}>删除</Action.Button>
        </Action>
      )}/>
    </TableCard>
  );
};

export default ServiceTable;
