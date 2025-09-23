import React, { useState } from "react";
import { Card, Form, Input, Button, Radio, Space, Typography } from "antd";

const { Title } = Typography;

function AddQuestion({ testId = 1 }) { // hardcoded for now
  const [form] = Form.useForm();
  const [options, setOptions] = useState(["", "", "", ""]);

  const handleOptionChange = (value, index) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (values) => {
    const questionData = {
      ...values,
      options,
      testId,
    };
    console.log("New Question:", questionData);
    alert("Question added! Check console for data.");
    form.resetFields();
    setOptions(["", "", "", ""]);
  };

  return (
    <div style={{ padding: 20 }}>
      <Card>
        <Title level={3}>Add Question</Title>
        <Form form={form} layout="vertical" onFinish={handleSubmit} style={{ maxWidth: 600 }}>
          <Form.Item
            label="Question Text"
            name="question"
            rules={[{ required: true, message: "Please enter the question" }]}
          >
            <Input placeholder="Enter question" />
          </Form.Item>

          <Form.Item label="Options">
            <Space direction="vertical" style={{ width: "100%" }}>
              {options.map((opt, index) => (
                <Input
                  key={index}
                  placeholder={`Option ${index + 1}`}
                  value={opt}
                  onChange={(e) => handleOptionChange(e.target.value, index)}
                />
              ))}
            </Space>
          </Form.Item>

          <Form.Item
            label="Correct Answer"
            name="correctAnswer"
            rules={[{ required: true, message: "Please select the correct answer" }]}
          >
            <Radio.Group>
              {options.map((opt, index) => (
                <Radio key={index} value={opt}>
                  {opt || `Option ${index + 1}`}
                </Radio>
              ))}
            </Radio.Group>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Question
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default AddQuestion;
