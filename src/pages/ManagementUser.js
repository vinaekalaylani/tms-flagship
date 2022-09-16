import { useState } from "react";

import ManagementUserComp from "../components/management/user";
import FilterComp from "../components/management/user/filter";
import NavbarComp from "../components/navbar";

export default function ManagementUser ({ handleSidebar }) {
    const [isFilter, setIsFilter] = useState(true)
    return (
        <div id="main">
            <NavbarComp handleSidebar={handleSidebar} title="User"/>
            <div className="page-content">
                <section>
                    { isFilter ? <FilterComp setIsFilter={setIsFilter}/> : <ManagementUserComp /> }
                </section>
            </div>
        </div>
    )
}