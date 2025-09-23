import React from "react";
import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = () => {
    alert("Signup successful! Please login.");
    navigate("/login");
  };

  return (
    <div style={{ padding: 50 }}>
      <h1>Signup</h1>
      <Input placeholder="Username" style={{ marginBottom: 10 }} />
      <Input placeholder="Email" style={{ marginBottom: 10 }} />
      <Input.Password placeholder="Password" style={{ marginBottom: 10 }} />
      <Button type="primary" onClick={handleSignup}>
        Signup
      </Button>
    </div>
  );
}
