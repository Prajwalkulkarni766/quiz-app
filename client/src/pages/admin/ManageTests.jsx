import React, { useState } from "react";
import { Table, Button, Card, Space, Typography } from "antd";

const { Title } = Typography;

// Dummy test data
const dummyTests = [
  { key: 1, name: "Math Quiz", totalQuestions: 10 },
  { key: 2, name: "General Knowledge", totalQuestions: 15 },
];

function ManageTests() {
  const [tests, setTests] = useState(dummyTests);

  const handleEdit = (testId) => {
    alert(`Edit Test: ${testId}`);
  };

  const handleDelete = (testId) => {
    alert(`Delete Test: ${testId}`);
  };

  const columns = [
    { title: "Test Name", dataIndex: "name", key: "name" },
    { title: "Total Questions", dataIndex: "totalQuestions", key: "totalQuestions" },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button type="primary" onClick={() => handleEdit(record.key)}>
            Edit
          </Button>
          <Button type="danger" onClick={() => handleDelete(record.key)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <Card>
        <Title level={3}>Manage Tests</Title>
        <Table dataSource={tests} columns={columns} pagination={false} />
      </Card>
    </div>
  );
}

export default ManageTests;
