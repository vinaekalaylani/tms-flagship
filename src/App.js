import { Routes, Route, useLocation } from "react-router-dom";

import Login from "./pages/Login";
import SidebarComp from "./components/sidebar";
import Dashboard from "./pages/Dashboard";

import ManagementBranch from "./pages/ManagementBranch";
import ManagementClient from "./pages/ManagementClient";
import ManagementClientGroup from "./pages/ManagementClientGroup";
import ManagementClientUnit from "./pages/ManagementClientUnit";
import ManagementTerminal from "./pages/ManagementTerminal";
import ManagementCurrency from "./pages/ManagementCurrency";
import ManagementUserRole from "./pages/ManagementUserRole";
import ManagementUser from "./pages/ManagementUser";
import ManagementUAC from "./pages/ManagementUAC";

import ReportingProcess from "./pages/ReportingProcess";

export default function App() {
  const location = useLocation()
  
  const handleSidebar = (e) => {
    e.preventDefault()
    document.getElementById('sidebar').classList.toggle('active');
  }

  return (
    <div>
      {location.pathname !== "/login" && (<SidebarComp handleSidebar={handleSidebar} />)}
      <Routes>
        {/* Dashboard */}
        <Route path="/" element={<Dashboard handleSidebar={handleSidebar}/>} />
        {/* Management */}
        <Route path="/management-branch" element={<ManagementBranch handleSidebar={handleSidebar}/>} />
        <Route path="/management-regional-office" element={<ManagementClient handleSidebar={handleSidebar}/>} />
        <Route path="/management-machine" element={<ManagementClientGroup handleSidebar={handleSidebar}/>} />
        <Route path="/management-uac" element={<ManagementUAC handleSidebar={handleSidebar}/>} />
        <Route path="/management-user-allocation" element={<ManagementUserRole handleSidebar={handleSidebar}/>} />
        <Route path="/management-user" element={<ManagementUser handleSidebar={handleSidebar}/>} />
        <Route path="/management-bank-product" element={<ManagementClientUnit handleSidebar={handleSidebar}/>} />
        <Route path="/management-card-variant" element={<ManagementTerminal handleSidebar={handleSidebar}/>} />
        <Route path="/management-product-variant" element={<ManagementCurrency handleSidebar={handleSidebar}/>} />
        {/* Reporting */}
        <Route path="/reporting-transaction" element={<ReportingProcess handleSidebar={handleSidebar}/>} />
        {/* Login */}
        <Route path="/Login" element={<Login/>} />
      </Routes>
    </div>
  );
}
