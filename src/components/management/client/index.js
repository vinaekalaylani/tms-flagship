import DataTable from "react-data-table-component";

export default function ManagementClientComp() {
    const columns = [
        {
            name: "No",
            width: "70px",
            selector: row => row.no
        },
        {
            name: "Client Code",
            width: "130px",
            selector: row => row.clientCode
        },
        {
            name: "Name",
            width: "200px",
            selector: row => row.name
        },
        {
            name: "Fullname",
            width: "200px",
            selector: row => row.fullname
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
            clientCode: "0203",
            name: "Ace Oldfields, PT",
            fullname: "Ace Oldffields, PT",
            status: "Active"
        },
        {
            no: 2,
            clientCode: "0203",
            name: "Ace Oldfields, PT",
            fullname: "Ace Oldffields, PT",
            status: "Active"
        },
        {
            no: 3,
            clientCode: "0203",
            name: "Ace Oldfields, PT",
            fullname: "Ace Oldffields, PT",
            status: "Active"
        },
        {
            no: 4,
            clientCode: "0203",
            name: "Ace Oldfields, PT",
            fullname: "Ace Oldffields, PT",
            status: "Active"
        },
        {
            no: 5,
            clientCode: "0203",
            name: "Ace Oldfields, PT",
            fullname: "Ace Oldffields, PT",
            status: "Active"
        },
        {
            no: 6,
            clientCode: "0203",
            name: "Ace Oldfields, PT",
            fullname: "Ace Oldffields, PT",
            status: "Active"
        },
        {
            no: 7,
            clientCode: "0203",
            name: "Ace Oldfields, PT",
            fullname: "Ace Oldffields, PT",
            status: "Active"
        },
        {
            no: 8,
            clientCode: "0203",
            name: "Ace Oldfields, PT",
            fullname: "Ace Oldffields, PT",
            status: "Active"
        },
        {
            no: 9,
            clientCode: "0203",
            name: "Ace Oldfields, PT",
            fullname: "Ace Oldffields, PT",
            status: "Active"
        }
    ]

    return (
        <div className="card fs-7">
            <div className="card-body">
                <div className="d-flex">
                    <div className="ms-auto mb-1"><input className="form-control" placeholder="Search by Client Code" /></div>
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