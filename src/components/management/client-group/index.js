import { useState } from "react";

import DataTable from "react-data-table-component";

import DetailComp from "./detail";
import ModalComp from "./modal";
import EditComp from "./edit";

export default function ManagementClientGroupComp() {
    const [isEdit, setIsEdit] = useState(false)

    const columns = [
        {
            name: "No",
            width: "70px",
            selector: row => row.no
        },
        {
            name: "Terminal ID",
            width: "200px",
            selector: row => row.terminal
        },
        {
            name: "Partner",
            width: "200px",
            selector: row => row.partner
        },
        {
            name: "Branch",
            width: "200px",
            selector: row => row.branch
        },
        {
            name: "SN",
            width: "200px",
            selector: row => row.sn
        },
        {
            name: "Code",
            width: "200px",
            selector: row => row.code
        },
        {
            name: "Type",
            width: "200px",
            selector: row => row.type
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
            terminal: "41001",
            partner: "Norxel",
            branch: "BANDUNG AH NASUTION - 0354",
            sn: "41001",
            code: "41001",
            type: "SSB",
            status: "Active"
        },
        {
            no: 2,
            terminal: "41002",
            partner: "Norxel",
            branch: "BANDUNG AA - 0005",
            sn: "41002",
            code: "41003",
            type: "SSB",
            status: "Active"
        },
        {
            no: 3,
            terminal: "41003",
            partner: "Norxel",
            branch: "BANDUNG DEWI SARTIKA - 0286",
            sn: "41003",
            code: "41003",
            type: "SSB",
            status: "Active"
        }
    ]

    return (
        <div className="row">
            <div className="col-12 col-md-8">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex align-items-center pb-1">
                            <div className="ms-auto">
                                <input className="form-control" placeholder="Search by Terminal ID" />
                            </div>
                            <div className="ms-2">
                                <div role="button" data-bs-toggle="modal" data-bs-target="#machineForm" className="btn-sm btn-primary py-2">+ Create Machine </div>
                                <ModalComp />
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
                            pagination
                        />
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-4">
                {isEdit ? (
                    <EditComp setIsEdit={setIsEdit} />
                ) : (
                    <DetailComp setIsEdit={setIsEdit} />
                )}
            </div>
        </div>
    )
}