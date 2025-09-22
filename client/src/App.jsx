import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {

  const role = "student";

  return (
    <>
      <BrowserRouter>
        <AppRoutes role={role} />
      </BrowserRouter>
    </>

  )
}

export default App
