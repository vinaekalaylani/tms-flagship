import { useState } from "react";

import NavbarComp from "../components/navbar";
import FilterComp from "../components/reporting/process/filter";
import ReportingProcessComp from "../components/reporting/process";

export default function ReportingProcess({ handleSidebar }) {
    const [isFilter, setIsFilter] = useState(true)
    return (
        <div id="main">
            <NavbarComp handleSidebar={handleSidebar} title="Reporting Process"/>
            <div className="page-content">
                <section>
                    {isFilter ? <FilterComp setIsFilter={setIsFilter}/> : <ReportingProcessComp/>}
                </section>
            </div>
        </div>
    )
}