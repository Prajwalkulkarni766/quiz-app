import React, { useState } from "react";
import { Table, Typography, Card } from "antd";

const { Title } = Typography;

const scoresData = [
  { key: 1, testName: "Math Quiz", score: 80, total: 100 },
  { key: 2, testName: "General Knowledge", score: 90, total: 100 },
];

function ScorePage() {
  const [scores] = useState(scoresData);

  const columns = [
    { title: "Test Name", dataIndex: "testName", key: "testName" },
    { title: "Score", dataIndex: "score", key: "score", sorter: (a, b) => a.score - b.score, },
    { title: "Total", dataIndex: "total", key: "total", sorter: (a, b) => a.score - b.score, },
    {
      title: "Percentage",
      key: "percentage",
      render: (_, record) => `${((record.score / record.total) * 100).toFixed(2)}%`,
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <Card>
        <Title level={3}>My Scores</Title>
        <Table dataSource={scores} columns={columns} pagination={true} />
      </Card>
    </div>
  );
}

export default ScorePage;
