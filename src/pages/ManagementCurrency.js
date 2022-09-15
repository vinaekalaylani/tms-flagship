import ManagementCurrencyComp from "../components/management/currency";
import NavbarComp from "../components/navbar";

export default function ManagementCurrency ({ handleSidebar }) {
    return (
        <div id="main">
            <NavbarComp handleSidebar={handleSidebar} title="Currency"/>
            <div className="page-content">
                <section>
                    <ManagementCurrencyComp />
                </section>
            </div>
        </div>
    )
}