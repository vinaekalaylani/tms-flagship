import ManagementUserRoleComp from "../components/management/user-role";
import NavbarComp from "../components/navbar";

export default function ManagementUserRole ({ handleSidebar }) {
    return (
        <div id="main">
            <NavbarComp handleSidebar={handleSidebar} title="User Role"/>
            <div className="page-content">
                <section>
                    <ManagementUserRoleComp />
                </section>
            </div>
        </div>
    )
}