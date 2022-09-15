import { useState } from "react";

import DataTable from "react-data-table-component";
import DetailComp from "./detail";
import EditComp from "./edit";
import ModalComp from "./modal";

export default function ManagementUserComp() {
    const [isEdit, setIsEdit] = useState(false)

    const columns = [
        {
            name: "Fullname",
            width: "130px",
            selector: row => row.fullname
        },
        {
            name: "Username",
            width: "200px",
            selector: row => row.username
        },
        {
            name: "Card No",
            width: "200px",
            selector: row => row.cardNo
        },
        {
            name: "Role",
            width: "120px",
            selector: row => row.role
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
            fullname: "CPM Admin",
            username: "cpm",
            cardNo: "92028",
            role: "Admin",
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
                                <input className="form-control" placeholder="Search by Username" />
                            </div>
                            <div className="ms-2">
                                <div className="btn-sm btn-primary py-2" role="button" data-bs-toggle="modal" data-bs-target="#userForm">+ Create User</div>
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