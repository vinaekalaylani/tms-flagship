import { useState } from "react";

import DataTable from "react-data-table-component";
import DetailComp from "./detail";
import ModalComp from "./modal";
import EditComp from "./edit";

export default function ManagementTerminalComp() {
    const [isEdit, setIsEdit] = useState(false)

    const columns = [
        {
            name: "No",
            width: "70px",
            selector: row => row.no
        },
        {
            name: "Name",
            width: "200px",
            selector: row => row.name
        },
        {
            name: "Code",
            width: "200px",
            selector: row => row.code
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
            name: "Britama Bisnis",
            code: "Britama Bisnis",
            status: "Active"
        },
        {
            no: 2,
            name: "Britama Black",
            code: "Britama Black",
            status: "Active"
        },
        {
            no: 3,
            name: "Britama Series Basket",
            code: "Britama Series Basket",
            status: "Active"
        },
        {
            no: 4,
            name: "Britama Series Gentleman",
            code: "Britama Series Gentleman",
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
                                <input className="form-control" placeholder="Search by Terminal Name" />
                            </div>
                            <div className="ms-2">
                                <div role="button" data-bs-toggle="modal" data-bs-target="#cardForm" className="btn-sm btn-primary py-2">+ Create Card Variant </div>
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