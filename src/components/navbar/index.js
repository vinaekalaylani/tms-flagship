import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ModalComp from "./modal";

export default function NavbarComp({ handleSidebar, title }) {
  const navigate = useNavigate()
  const location = useLocation()
  
  const [profile, setProfile] = useState(false)

  const handleShow = () => {
    setProfile(!profile)
  }

  const handleBreadcrumb = () => {
    navigate("/")
  }

  const handleLogout = () => {
    navigate("/login")
  }

  return (
    <div id="navbar" className="d-flex align-items-center">
      <div role="button" onClick={handleSidebar} className="burger-btn">
        <img src="./assets/images/v2/burger1.png" alt="burger" />
      </div>
      <div aria-label="breadcrumb" className="breadcrumb-header ms-4">
        <ol className="breadcrumb pt-3">
          <li role="button" onClick={handleBreadcrumb} className="breadcrumb-item active">Dashboard</li>
          {location.pathname !== "/" && <li className="breadcrumb-item active" aria-current="page">{title}</li>}
        </ol>
      </div>
      <div className="dropdown-user ms-auto">
        <div role="button" onClick={handleShow} className="d-flex align-items-center">
          <img src="./assets/images/v2/user-circle.png" alt="user-circle" />
          <div className="text-white fw-bold fs-7 mx-2">Cpm Admin</div>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><path stroke="white" strokeWidth="3" d="M6 9l6 6 6-6"/></svg>
        </div>
        <div className={ profile ? "dropdown-menu-user" : "dropdown-menu-user d-none" }>
          <div role="button" data-bs-toggle="modal" data-bs-target="#passForm" className="text-primary mb-2 d-flex align-items-center">
            <img src="./assets/images/v2/pass.png" alt="pass" className="me-1"/>
            Change Password
          </div>
          <hr className="my-2"/>
          <div role="button" onClick={handleLogout} className="text-danger d-flex align-items-center">
            <img src="./assets/images/v2/logout.png" alt="pass" className="me-2"/>
            Logout
          </div>
        </div>
      </div>
      <ModalComp />
    </div>
  );
}
