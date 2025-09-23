import React, { useState } from "react";
import { Card, Form, Input, InputNumber, Button, Typography } from "antd";

const { Title } = Typography;

function CreateTest() {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log("New Test Data:", values);
    alert("Test Created! Check console for data.");
    form.resetFields();
  };

  return (
    <div style={{ padding: 20 }}>
      <Card>
        <Title level={3}>Create New Test</Title>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          style={{ maxWidth: 600 }}
        >
          <Form.Item
            label="Test Name"
            name="testName"
            rules={[{ required: true, message: "Please enter test name" }]}
          >
            <Input placeholder="Enter test name" />
          </Form.Item>

          <Form.Item
            label="Total Questions"
            name="totalQuestions"
            rules={[{ required: true, message: "Please enter total questions" }]}
          >
            <InputNumber min={1} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Time (minutes)"
            name="time"
            rules={[{ required: true, message: "Please enter test duration" }]}
          >
            <InputNumber min={1} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Create Test
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default CreateTest;
