import DataTable from "react-data-table-component";

export default function ManagementUserRoleComp() {
    const columns = [
        {
            name: "No",
            width: "70px",
            selector: row => row.no
        },
        {
            name: "Branch Name",
            width: "250px",
            selector: row => row.branch
        }
    ]

    const data = [
        {
            no: 1,
            branch: "BANDUNG AH NASUTION - 0354"
        },
        {
            no: 2,
            branch: "BANDUNG AA - 0005"
        },
        {
            no: 3,
            branch: "BANDUNG DEWI SARTIKA - 0286"
        },
        {
            no: 4,
            branch: "TASIKMALAYA - 0100"
        },
        {
            no: 5,
            branch: "DENPASAR GAJAH MADA - 0017"
        },
        {
            no: 6,
            branch: "DENPASAR RENON - 0368"
        },
        {
            no: 7,
            branch: "KUTA - 0556"
        },
        {
            no: 8,
            branch: "MATARAM - 0052"
        },
        {
            no: 9,
            branch: "JAKARTA CUT MUTIAH - 0230"
        },
        {
            no: 10,
            branch: "JAKARTA JATINEGARA - 1122"
        },
        {
            no: 11,
            branch: "JAKARTA KRAMAT - 0335"
        },
        {
            no: 12,
            branch: "JAKARTA OTISTA - 0340"
        },
        {
            no: 13,
            branch: "JAKARTA TANJUNG PRIOK - 0186"
        },
        {
            no: 14,
            branch: "JAKARTA VETERAN - 0329"
        }
    ]

    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex align-items-center pb-1">
                            <div className="ms-auto">
                                <input className="form-control" placeholder="Search by User Role" />
                            </div>
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
                            selectableRows
                            pagination
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}