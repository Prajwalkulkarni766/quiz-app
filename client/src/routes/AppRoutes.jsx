import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "../components/common/ProtectedRoute";
import DashboardLayout from "../layout/DashboardLayout";

// student pages
import StudentDashboard from "../pages/student/StudentDashboard";
import ScorePage from "../pages/student/ScorePage";
import TestPage from "../pages/student/TestPage";

// admin page
import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageTests from "../pages/admin/ManageTests";
import CreateTest from "../pages/admin/CreateTest";
import AddQuestion from "../pages/admin/AddQuestion";

// auth page
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

import { useAuth } from "../context/AuthContext";

function AppRoutes({ role = "student" }) {

  const { user } = useAuth();

  return (
    <Routes>
      {/* Public route */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected student route */}
      <Route element={<ProtectedRoute allowedRoles={["student"]} />}>
        <Route path="/student" element={<DashboardLayout />}>
          <Route index element={<StudentDashboard />} />
          <Route path="scores" element={<ScorePage />} />
          <Route path="test" element={<TestPage />} />
        </Route>
      </Route>


      {/* Protected admin route */}
      <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
        <Route path="/admin" element={<DashboardLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="tests" element={<ManageTests />} />
          <Route path="create-test" element={<CreateTest />} />
          <Route path="add-question" element={<AddQuestion />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />
    </Routes >
  )
}

export default AppRoutes;