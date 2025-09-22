import React from "react";
import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "../components/common/ProtectedRoute";
import DashboardLayout from "../layout/DashboardLayout";

// student pages
import StudentDashboard from "../pages/student/StudentDashboard";
import ScorePage from "../pages/student/ScorePage";

// admin page
import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageTests from "../pages/admin/ManageTests";

function AppRoutes({ role = "student" }) {
  return (
    <Routes>
      <Route path="/" element={
        <ProtectedRoute isAuthenticated={!!role}>
          <DashboardLayout role={role} />
        </ProtectedRoute>
      } >
        {role === "student" ? (
          <>
            <Route index element={<StudentDashboard />} />
            <Route path="scores" element={<ScorePage />} />
          </>
        ) : (
          <>
            <Route index element={<AdminDashboard />} />
            <Route path="tests" element={<ManageTests />} />
          </>
        )}
      </Route>
    </Routes>
  )
}

export default AppRoutes;