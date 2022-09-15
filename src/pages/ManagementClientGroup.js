import NavbarComp from "../components/navbar";

export default function ManagementClientGroup ({ handleSidebar }) {
    return(
        <div id="main">
            <NavbarComp handleSidebar={handleSidebar} title="Client Group"/>
            <div className="page-content">
                <section>

                </section>
            </div>
        </div>
    )
}