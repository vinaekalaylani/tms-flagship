import DataTable from "react-data-table-component";

export default function ManagementClientUnitComp () {
    const columns = [
        {
            name: "No",
            width: "70px",
            selector: row => row.no
        },
        {
            name: "Code",
            width: "250px",
            selector: row => row.code
        },
        {
            name: "Name",
            width: "300px",
            selector: row => row.name
        },
        {
            name: "Status",
            width: "120px",
            selector: row => (
                <div className="badge bg-primary">{row.status}</div>
            )
        }
    ]

    const data = [
        {
            no: 1,
            code: "000300030000025WSID31763",
            name: "WSID: 31763 AEON Mall JGC, Cakung",
            status: "Active"
        },
        {
            no: 2,
            code: "000300030000025WSID31838",
            name: "WSID: 31838 AEON Mall JGC, Cakung",
            status: "Active"
        }
    ]

    return (
        <div className="card fs-7">
            <div className="card-body">
                <div className="d-flex">
                    <div className="ms-auto mb-1"><input className="form-control" placeholder="Search by Code" /></div>
                </div>
                <DataTable
                    columns={columns}
                    data={data}
                    noHeader
                    defaultSortField="id"
                    defaultSortAsc={false}
                    fixedHeader
                    width="auto"
                    highlightOnHover
                    pagination
                />
            </div>
        </div>
    )
}