import { useState } from "react";

import ManagementUserRoleComp from "../components/management/user-role";
import FilterComp from "../components/management/user-role/filter";
import NavbarComp from "../components/navbar";

export default function ManagementUserRole ({ handleSidebar }) {
    const [isFilter, setIsFilter] = useState(true)

    return (
        <div id="main">
            <NavbarComp handleSidebar={handleSidebar} title="User Allocation"/>
            <div className="page-content">
                <section>
                {isFilter ? <FilterComp setIsFilter={setIsFilter} /> : <ManagementUserRoleComp />}
                </section>
            </div>
        </div>
    )
}