import { useState } from "react";

import NavbarComp from "../components/navbar";
import ReportingPackComp from "../components/reporting/pack";
import FilterComp from "../components/reporting/pack/filter";

export default function ReportingPack({ handleSidebar }) {
    const [isFilter, setIsFilter] = useState(true)

    return (
        <div id="main">
            <NavbarComp handleSidebar={handleSidebar} title="Reporting Pack"/>
            <div className="page-content">
                <section>
                    {isFilter ? <FilterComp setIsFilter={setIsFilter} /> : <ReportingPackComp />}
                </section>
            </div>
        </div>
    )
}