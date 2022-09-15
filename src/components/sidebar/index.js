import { useLocation, useNavigate } from "react-router-dom";

export default function SidebarComp({ handleSidebar }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleDropdown = (e, name) => {
    e.preventDefault()
    const submenu = document.getElementById(name)
    if (submenu.classList.contains("active")) submenu.classList.remove("active")
    else submenu.classList.add("active")
  };

  return (
    <div id="sidebar" className={window.innerWidth >= 1200 ? "active" : ""}>
      <div className="sidebar-wrapper">
        <div className="sidebar-header">
          <div className="d-flex justify-content-between">
            <div className="mx-auto" style={{ color: "#233142" }}>CPM</div>
            <div className="sidebar-toggler" role="button" onClick={handleSidebar}>
              <img src="./assets/images/v2/x.png" alt="x" />
            </div>
          </div>
        </div>
        <div className="sidebar-menu">
          <div className="menu">
            <div className={location.pathname === "/" ? "sidebar-item active" : "sidebar-item"}>
              <div role="button" onClick={() => navigate("/")} className="sidebar-link py-3 d-flex align-items-center">
                <img src={location.pathname === "/" ? "./assets/images/v2/dashboard-a.png" : "./assets/images/v2/dashboard.png"} alt="dashboard" />
                <span>Dashboard</span>
              </div>
            </div>
            <div className={location.pathname.includes("/management") ? "sidebar-item has-sub active" : "sidebar-item has-sub"}>
              <div role="button" onClick={(e) => handleDropdown(e, "submenu1")} className="sidebar-link py-3 d-flex align-items-center">
                <img src={location.pathname.includes("/management") ? "./assets/images/v2/management-a.png" : "./assets/images/v2/management.png"} alt="management" />
                <span>Management</span>
              </div>
              <div id="submenu1" className="submenu">
                <div role="button" onClick={() => navigate("/management-branch")} className={location.pathname === "/management-branch" ? "submenu-item active py-3" : "submenu-item py-3"}>
                  <div>Branch</div>
                </div>
                <div role="button" onClick={() => navigate("/management-regional-office")} className={location.pathname === "/management-regional-office" ? "submenu-item active py-3" : "submenu-item py-3"}>
                  <div>Regional Office</div>
                </div>
                <div role="button" onClick={() => navigate("/management-machine")} className={location.pathname === "/management-machine" ? "submenu-item active py-3" : "submenu-item py-3"}>
                  <div>Machine</div>
                </div>
                <div role="button" onClick={() => navigate("/management-uac")} className={location.pathname === "/management-uac" ? "submenu-item active py-3" : "submenu-item py-3"}>
                  <div>UAC</div>
                </div>
                <div role="button" onClick={() => navigate("/management-user-allocation")} className={location.pathname === "/management-user-allocation" ? "submenu-item active py-3" : "submenu-item py-3"}>
                  <div>User Allocation</div>
                </div>
                <div role="button" onClick={() => navigate("/management-user")} className={location.pathname === "/management-user" ? "submenu-item active py-3" : "submenu-item py-3"}>
                  <div>User</div>
                </div>
                <div role="button" onClick={() => navigate("/management-bank-product")} className={location.pathname === "/management-bank-product" ? "submenu-item active py-3" : "submenu-item py-3"}>
                  <div>Bank Product</div>
                </div>
                <div role="button" onClick={() => navigate("/management-card-unit")} className={location.pathname === "/management-card-unit" ? "submenu-item active py-3" : "submenu-item py-3"}>
                  <div>Card Unit</div>
                </div>
                <div role="button" onClick={() => navigate("/management-product-variant")} className={location.pathname === "/management-product-variant" ? "submenu-item active py-3" : "submenu-item py-3"}>
                  <div>Product Variant</div>
                </div>
              </div>
            </div>
            <div className={location.pathname.includes("/reporting") ? "sidebar-item has-sub active" : "sidebar-item has-sub"}>
              <div role="button" onClick={(e) => handleDropdown(e, "submenu2")} className="sidebar-link py-3 d-flex align-items-center">
                <img src={location.pathname.includes("/reporting") ? "./assets/images/v2/reporting-a.png" : "./assets/images/v2/reporting.png"} alt="reporting" />
                <span>Reporting</span>
              </div>
              <div id="submenu2" className="submenu">
                <div role="button" onClick={() => navigate("/reporting-transaction")} className={location.pathname === "/reporting-transaction" ? "submenu-item active py-3" : "submenu-item py-3"}>
                  <div>Transaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
