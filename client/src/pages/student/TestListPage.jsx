import React, { useState } from "react";
import { Table, Button, Card, Space, Typography, Tag } from "antd";

const { Title } = Typography;

// Dummy test data with status
const dummyTests = [
  { key: 1, name: "Math Quiz", totalQuestions: 10, status: "Not Started" },
  { key: 2, name: "General Knowledge", totalQuestions: 15, status: "In Progress" },
  { key: 3, name: "History Quiz", totalQuestions: 20, status: "Completed" },
];

function TestListPage() {
  const [tests, setTests] = useState(dummyTests);

  const handleAction = (test) => {
    if (test.status === "Not Started") {
      alert(`Starting Test: ${test.name}`);
    } else if (test.status === "In Progress") {
      alert(`Resuming Test: ${test.name}`);
    } else if (test.status === "Completed") {
      alert(`Viewing Results of: ${test.name}`);
    }
  };

  const columns = [
    {
      title: "Test Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Total Questions",
      dataIndex: "totalQuestions",
      key: "totalQuestions",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = "blue";
        if (status === "Completed") color = "green";
        else if (status === "In Progress") color = "orange";
        else if (status === "Not Started") color = "red";
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        let buttonText = "Start";
        if (record.status === "In Progress") buttonText = "Resume";
        else if (record.status === "Completed") buttonText = "View Results";

        return (
          <Button type="primary" onClick={() => handleAction(record)}>
            {buttonText}
          </Button>
        );
      },
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <Card>
        <Title level={3}>Available Tests</Title>
        <Table dataSource={tests} columns={columns} pagination={false} />
      </Card>
    </div>
  );
}

export default TestListPage;
