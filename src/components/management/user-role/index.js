import { useState } from "react";

import DataTable from "react-data-table-component";
import DetailComp from "./detail";
import EditCommp from "./edit";
import ModalComp from "./modal";

export default function ManagementUserRoleComp() {
    const [isEdit, setIsEdit] = useState(false)

    const columns = [
        {
            name: "No",
            width: "70px",
            selector: row => row.no
        },
        {
            name: "User Role Name",
            width: "200px",
            selector: row => row.roleName
        },
        {
            name: "Level",
            width: "200px",
            selector: row => row.level
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
            roleName: "CPC Cashier",
            level: "Cashier",
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
                                <input className="form-control" placeholder="Search by User Role" />
                            </div>
                            <div className="ms-2">
                                <div className="btn-sm btn-primary py-2" role="button" data-bs-toggle="modal" data-bs-target="#userroleForm">+ Create User Role</div>
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
                    <EditCommp setIsEdit={setIsEdit} />
                ) : (
                    <DetailComp setIsEdit={setIsEdit} />
                )}
            </div>
        </div>
    )
}