import { useState } from "react";

import NavbarComp from "../components/navbar";
import FilterComp from "../components/management/client-unit/filter";
import ManagementClientUnitComp from "../components/management/client-unit";

export default function ManagementClientUnit ({ handleSidebar }) {
    const [isFilter, setIsFilter] = useState(true)

    return (
        <div id="main">
            <NavbarComp handleSidebar={handleSidebar} title="Client Unit"/>
            <div className="page-content">
                <section>
                    {isFilter ? <FilterComp setIsFilter={setIsFilter} /> : <ManagementClientUnitComp />}
                </section>
            </div>
        </div>
    )
}