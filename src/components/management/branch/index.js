import { useState } from "react";

import DataTable from "react-data-table-component";

import DetailComp from "./detail";
import ModalComp from "./modal";
import EditComp from "./edit";

export default function ManagementBranchComp() {
    const [isEdit, setIsEdit] = useState(false)

    const columns = [
        {
            name: "No",
            width: "70px",
            selector: row => row.no
        },
        {
            name: "Regional Office Name",
            width: "170px",
            selector: row => row.regionalName
        },
        {
            name: "Code",
            width: "100px",
            selector: row => row.code
        },
        {
            name: "Name",
            width: "200px",
            selector: row => row.name
        },
        {
            name: "State",
            width: "130px",
            selector: row => row.state
        },
        {
            name: "City",
            width: "130px",
            selector: row => row.city
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
            code: "0005",
            name: "BANDUNG AA",
            state: "Jawa Barat",
            city: "Bandung",
            status: "Active"
        },
        {
            no: 2,
            regionalName: "BANDUNG",
            code: "0100",
            name: "TASIKMALAYA",
            state: "Jawa Barat",
            city: "Tasikmalaya",
            status: "Active"
        },
        {
            no: 3,
            regionalName: "BANDUNG",
            code: "0286",
            name: "BANDUNG DEWI SARTIKA",
            state: "Jawa Barat",
            city: "Bandung",
            status: "Active"
        },
        {
            no: 4,
            regionalName: "BANDUNG",
            code: "0354",
            name: "BANDUNG AH NASUTION",
            state: "Jawa Barat",
            city: "Bandung",
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
                                <input className="form-control" placeholder="Search by Name or Code" />
                            </div>
                            <div className="ms-2">
                                <div role="button" data-bs-toggle="modal" data-bs-target="#branchForm" className="btn-sm btn-primary py-2">+ Create Branch </div>
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