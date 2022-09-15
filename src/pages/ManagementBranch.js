import { useState } from "react";

import NavbarComp from "../components/navbar";
import FilterComp from "../components/management/branch/filter";
import ManagementBranchComp from "../components/management/branch";

export default function ManagementBranch({ handleSidebar }) {
    const [isFilter, setIsFilter] = useState(true)
    
    return (
        <div id="main">
            <NavbarComp handleSidebar={handleSidebar} title="Branch"/>
            <div className="page-content">
                <section>
                    {isFilter ? <FilterComp setIsFilter={setIsFilter}/> : <ManagementBranchComp />}
                </section>
            </div>
        </div>
    )
}