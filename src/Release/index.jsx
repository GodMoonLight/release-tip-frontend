import React, { useState } from 'react';
import { Input } from 'antd';
import { SearchForm, AuthDiv, Breadcrumb, Button } from '../components';
import ComTable from './ServiceTable';
import ComForm from './ServiceForm';

const Service = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [record, setRecord] = useState(false);
  const [name, setName] = useState(false);
  const show = (record) => {
    setFormVisible(true);
    setRecord(record);
  };
  const handleSearch = (value) => {
    console.log(value);
  }
  return (
    <AuthDiv auth="config.src.view">
      <Breadcrumb>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item>发布管理</Breadcrumb.Item>
        <Breadcrumb.Item>发布计划</Breadcrumb.Item>
        <Button>新建</Button>
      </Breadcrumb>
      <SearchForm placeholder="请输入" loading={false} onSearch={handleSearch}>
      </SearchForm>
      <ComTable editRecord={show}/>
      {formVisible && <ComForm record={record} onCancel={() => setFormVisible(false)}/>}
    </AuthDiv>
  );
};


export default Service;
