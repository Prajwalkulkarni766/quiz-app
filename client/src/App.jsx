import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout role="student" />} >
          <Route index element={<h1>this is home</h1>} />
          <Route path="dashboard" element={<h1>this is dashboard</h1>} />
          <Route path="settings" element={<h1>this is setting</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
