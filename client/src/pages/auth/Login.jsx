import React from "react";
import { Button } from "antd";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleStudentLogin = () => {
    login("student");
    navigate("/student");
  };

  const handleAdminLogin = () => {
    login("admin");
    navigate("/admin");
  };

  return (
    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "50px" }}>
      <Button type="primary" onClick={handleStudentLogin}>
        Login as Student
      </Button>
      <Button type="dashed" onClick={handleAdminLogin}>
        Login as Admin
      </Button>
    </div>
  );
}

export default Login;
