import { useState } from "react";

import DataTable from "react-data-table-component";

import DetailComp from "./detail";
import ModalComp from "./modal";
import EditComp from "./edit";

export default function ManagementClientComp() {
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
            selector: row => row.regionalName
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
            regionalName: "BANDUNG",
            status: "Active"
        },
        {
            no: 2,
            regionalName: "JAKARTA 1",
            status: "Active"
        },
        {
            no: 3,
            regionalName: "JAKARTA 2",
            status: "Active"
        },
        {
            no: 4,
            regionalName: "JAKARTA 3",
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
                                <input className="form-control" placeholder="Search by Regional Office Name" />
                            </div>
                            <div className="ms-2">
                                <div role="button" data-bs-toggle="modal" data-bs-target="#regionalForm" className="btn-sm btn-primary py-2">+ Create Regional Office</div>
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