import NavbarComp from "../components/navbar";
import ManagementClientUnitComp from "../components/management/client-unit";

export default function ManagementClientUnit ({ handleSidebar }) {
    return (
        <div id="main">
            <NavbarComp handleSidebar={handleSidebar} title="Bank Product"/>
            <div className="page-content">
                <section>
                    <ManagementClientUnitComp />
                </section>
            </div>
        </div>
    )
}