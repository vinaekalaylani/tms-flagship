import NavbarComp from "../components/navbar";
import ManagementClientComp from "../components/management/client";

export default function ManagementClient({ handleSidebar }) {
    return (
        <div id="main">
            <NavbarComp handleSidebar={handleSidebar} title="Regiional Office" />
            <div className="page-content">
                <section>
                    <ManagementClientComp />
                </section>
            </div>
        </div>
    )
}