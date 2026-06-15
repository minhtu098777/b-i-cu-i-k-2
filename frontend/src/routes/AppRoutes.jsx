import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Jobs from "../pages/Jobs";
import JobDetail from "../pages/JobDetail";
import Dashboard from "../pages/Dashboard";
import Admin from "../pages/Admin";

function AppRoutes() {
  return (
    <Routes>
      {/* HOME */}
      <Route path="/" element={<Home />} />

      {/* AUTH */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* JOBS */}
      <Route path="/jobs" element={<Jobs />} />

      {/* JOB DETAIL (dynamic route) */}
      <Route path="/jobs/:id" element={<JobDetail />} />

      {/* USER DASHBOARD */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* ADMIN */}
      <Route path="/admin" element={<Admin />} />

      {/* 404 PAGE (optional) */}
      <Route
        path="*"
        element={
          <div style={{ padding: 40, textAlign: "center" }}>
            <h1>404 - Not Found</h1>
          </div>
        }
      />
    </Routes>
  );
}

export default AppRoutes;