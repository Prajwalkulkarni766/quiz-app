import React, { useState } from "react";
import { Card, Radio, Button, Typography } from "antd";
import { useTimer } from "../../hooks/useTimer";

const { Title } = Typography;

const questions = [
  { id: 1, question: "2 + 2?", options: ["1", "2", "3", "4"] },
  { id: 2, question: "Capital of India?", options: ["Mumbai", "Delhi", "Bangalore", "Chennai"] },
];

function TestPage() {
  const [answers, setAnswers] = useState({});

  const handleChange = (qId, value) => {
    setAnswers({ ...answers, [qId]: value });
  };

  const handleSubmit = () => {
    console.log("Submitted Answers:", answers);
    alert("Test submitted!");
  };

  // Timer: 5 minutes (300 seconds)
  const { minutes, sec } = useTimer(60, handleSubmit);

  return (
    <div style={{ padding: 20 }}>
      <Title level={4}>
        Time Remaining: {minutes}:{sec < 10 ? `0${sec}` : sec}
      </Title>

      {questions.map((q) => (
        <Card key={q.id} style={{ marginBottom: 20 }}>
          <h3>{q.question}</h3>
          <Radio.Group
            onChange={(e) => handleChange(q.id, e.target.value)}
            value={answers[q.id]}
          >
            {q.options.map((opt, i) => (
              <Radio key={i} value={opt}>
                {opt}
              </Radio>
            ))}
          </Radio.Group>
        </Card>
      ))}

      <Button type="primary" onClick={handleSubmit}>
        Submit Test
      </Button>
    </div>
  );
}

export default TestPage;
