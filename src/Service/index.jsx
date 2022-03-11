import React, { useState } from 'react';
import { Input } from 'antd';
import { SearchForm, AuthDiv, Breadcrumb } from '../components';
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
        <Breadcrumb.Item>配置中心</Breadcrumb.Item>
        <Breadcrumb.Item>应用配置</Breadcrumb.Item>
      </Breadcrumb>
      <SearchForm placeholder="请输入服务名称" loading={false} onSearch={handleSearch}>
      </SearchForm>
      <ComTable editRecord={show}/>
      {formVisible && <ComForm record={record} onCancel={() => setFormVisible(false)}/>}
    </AuthDiv>
  );
};


export default Service;
