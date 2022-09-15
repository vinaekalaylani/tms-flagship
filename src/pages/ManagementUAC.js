import ManagementUACComp from "../components/management/uac";
import NavbarComp from "../components/navbar";

export default function ManagementUAC ({ handleSidebar }) {
    return (
        <div id="main">
            <NavbarComp handleSidebar={handleSidebar} title="UAC"/>
            <div className="page-content">
                <section>
                    <ManagementUACComp />
                </section>
            </div>
        </div>
    )
}