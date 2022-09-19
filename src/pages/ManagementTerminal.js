import NavbarComp from "../components/navbar";
import ManagementTerminalComp from "../components/management/terminal";

export default function ManagementTerminal ({ handleSidebar }) {
    return (
        <div id="main">
            <NavbarComp handleSidebar={handleSidebar} title="Card Variant"/>
            <div className="page-content">
                <section>
                    <ManagementTerminalComp />
                </section>
            </div>
        </div>
    )
}