import { useState } from "react";

import NavbarComp from "../components/navbar";
import FilterComp from "../components/management/currency/filter";
import ManagementCurrencyComp from "../components/management/currency";

export default function ManagementCurrency({ handleSidebar }) {
    const [isFilter, setIsFilter] = useState(true)
    
    return (
        <div id="main">
            <NavbarComp handleSidebar={handleSidebar} title="Product Variant" />
            <div className="page-content">
                <section>
                    {isFilter ? <FilterComp setIsFilter={setIsFilter} /> : <ManagementCurrencyComp />}
                </section>
            </div>
        </div>
    )
}