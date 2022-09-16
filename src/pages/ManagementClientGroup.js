import { useState } from "react";

import NavbarComp from "../components/navbar";
import FilterComp from "../components/management/client-group/filter";
import ManagementClientGroupComp from "../components/management/client-group";


export default function ManagementClientGroup({ handleSidebar }) {
    const [isFilter, setIsFilter] = useState(true)

    return (
        <div id="main">
            <NavbarComp handleSidebar={handleSidebar} title="Machine" />
            <div className="page-content">
                <section>
                    {isFilter ? <FilterComp setIsFilter={setIsFilter} /> : <ManagementClientGroupComp />}
                </section>
            </div>
        </div>
    )
}