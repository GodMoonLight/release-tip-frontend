import React from 'react'
import PropTypes from 'prop-types'
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select } from 'antd'

const { Option } = Select

function EnvEditor(props) {
  const [form] = Form.useForm();

  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      console.log('Success:', values);
      props.onSubmit(values)
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };

  const { onClose, onSubmit, visible, data } = props
  console.log(data)
  return (
    <Drawer
      title="Edit the Env"
      width={720}
      onClose={onClose}
      visible={visible}
      bodyStyle={{ paddingBottom: 80 }}
      footer={
        <div
          style={{
            textAlign: 'right',
          }}
        >
          <Button onClick={onClose} style={{ marginRight: 8 }}>
            Cancel
          </Button>
          <Button onClick={onCheck} type="primary">
            Submit
          </Button>
        </div>
      }
    >
      <Form
        form={form}
        layout="vertical"
        hideRequiredMark
        onFinish={onSubmit}
        initialValues={{
          ...data
        }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Please enter env name' }]}
            >
              <Input placeholder="Please enter env name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="address"
              label="Url"
              rules={[{ required: true, message: 'Please enter url' }]}
            >
              <Input
                style={{ width: '100%' }}
                addonBefore="http://"
                placeholder="Please enter url"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="username"
              label="Owner"
              rules={[{ required: true, message: 'Please select an owner' }]}
            >
              <Select placeholder="Please select an owner">
                <Option value="xiao">Xiaoxiao Fu</Option>
                <Option value="xiao">Xiaoxiao Fu</Option>
                <Option value="mao">Maomao Zhou</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="type"
              label="Type"
              rules={[{ required: true, message: 'Please choose the type' }]}
            >
              <Select placeholder="Please choose the type">
                <Option value="private">Private</Option>
                <Option value="public">Public</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        {/*<Row gutter={16}>*/}
        {/*  <Col span={12}>*/}
        {/*    <Form.Item*/}
        {/*      name="status"*/}
        {/*      label="Status"*/}
        {/*      rules={[{ required: true, message: 'Please choose the status' }]}*/}
        {/*    >*/}
        {/*      <Select placeholder="Please choose the status">*/}
        {/*        <Option value="UP">Running</Option>*/}
        {/*        <Option value="Down">Down</Option>*/}
        {/*      </Select>*/}
        {/*    </Form.Item>*/}
        {/*  </Col>*/}
        {/*  <Col span={12}>*/}
        {/*    <Form.Item*/}
        {/*      name="dateTime"*/}
        {/*      label="DateTime"*/}
        {/*      rules={[{ required: true, message: 'Please choose the dateTime' }]}*/}
        {/*    >*/}
        {/*      <DatePicker.RangePicker*/}
        {/*        style={{ width: '100%' }}*/}
        {/*        getPopupContainer={trigger => trigger.parentElement}*/}
        {/*      />*/}
        {/*    </Form.Item>*/}
        {/*  </Col>*/}
        {/*</Row>*/}
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="context"
              label="Description"
              rules={[
                {
                  required: true,
                  message: 'please enter  description',
                },
              ]}
            >
              <Input.TextArea rows={4} placeholder="please enter description" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  )
}

EnvEditor.propTypes = {
  data: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}
export default EnvEditor
