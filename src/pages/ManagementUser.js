import ManagementUserComp from "../components/management/user";
import NavbarComp from "../components/navbar";

export default function ManagementUser ({ handleSidebar }) {
    return (
        <div id="main">
            <NavbarComp handleSidebar={handleSidebar} title="User"/>
            <div className="page-content">
                <section>
                    <ManagementUserComp />
                </section>
            </div>
        </div>
    )
}