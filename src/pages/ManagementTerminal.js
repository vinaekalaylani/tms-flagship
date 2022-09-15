import { useState } from "react";
import ManagementTerminalComp from "../components/management/terminal";
import FilterComp from "../components/management/terminal/filter";

import NavbarComp from "../components/navbar";

export default function ManagementTerminal ({ handleSidebar }) {
    const [isFilter, setIsFilter] = useState(true)

    return (
        <div id="main">
            <NavbarComp handleSidebar={handleSidebar} title="Terminal"/>
            <div className="page-content">
                <section>
                    {isFilter ? <FilterComp setIsFilter={setIsFilter} /> : <ManagementTerminalComp />}
                </section>
            </div>
        </div>
    )
}