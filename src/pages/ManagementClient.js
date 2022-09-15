import { useState } from "react";

import NavbarComp from "../components/navbar";
import FilterComp from "../components/management/client/filter";
import ManagementClientComp from "../components/management/client";

export default function ManagementClient ({ handleSidebar }) {
    const [isFilter, setIsFilter] = useState(true)

    return(
        <div id="main">
            <NavbarComp handleSidebar={handleSidebar} title="Client"/>
            <div className="page-content">
                <section>
                    {isFilter ? <FilterComp setIsFilter={setIsFilter}/> : <ManagementClientComp />}
                </section>
            </div>
        </div>
    )
}