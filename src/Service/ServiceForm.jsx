import React, { useState } from 'react';

import { Modal, Form, Input, message } from 'antd';
import PropTypes from "prop-types";


const ServiceForm = (props) => {
  const [form] = Form.useForm();
  const { record ,onCancel} = props;
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    setLoading(true);
    const formData = form.getFieldsValue();
    formData['id'] = record.id;
  }

  return (
    <Modal
      visible
      maskClosable={false}
      title={record.id ? '编辑服务' : '新建服务'}
      onCancel={onCancel}
      confirmLoading={loading}
      onOk={handleSubmit}>
      <Form form={form} initialValues={record} labelCol={{ span: 6 }} wrapperCol={{ span: 14 }}>
        <Form.Item required name="name" label="服务名称">
          <Input placeholder="请输入服务名称，例如：订单数据库"/>
        </Form.Item>
        <Form.Item
          required
          name="key"
          label="唯一标识符"
          tooltip="服务的唯一标识符，会作为生成配置的前缀。"
          extra="可以由字母、数字、-和下划线组成。">
          <Input placeholder="请输入唯一标识符，例如：mysql_order"/>
        </Form.Item>
        <Form.Item name="desc" label="备注信息">
          <Input.TextArea placeholder="请输入备注信息"/>
        </Form.Item>
      </Form>
    </Modal>
  )
};

ServiceForm.defaultProps = {
  record: {},
};
ServiceForm.propTypes = {
  record: PropTypes.object,
  onCancel: PropTypes.func.isRequired,

}
export default ServiceForm;
