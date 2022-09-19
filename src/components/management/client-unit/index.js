import { useState } from "react";

import DataTable from "react-data-table-component";

import DetailComp from "./detail";
import ModalComp from "./modal";
import EditComp from "./edit";

export default function ManagementClientUnitComp() {
    const [isEdit, setIsEdit] = useState(false)

    const columns = [
        {
            name: "No",
            width: "70px",
            selector: row => row.no
        },
        {
            name: "Name",
            width: "120px",
            selector: row => row.name
        },
        {
            name: "Code",
            width: "110px",
            selector: row => row.code
        },
        {
            name: "Category",
            width: "110px",
            selector: row => row.category
        },
        {
            name: "Acc. Type",
            width: "110px",
            selector: row => row.accType
        },
        {
            name: "Business",
            width: "110px",
            selector: row => row.business
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
            name: "Britama SME",
            code: "B1",
            category: "BritAma",
            accType: "S",
            business: "false",
            status: "Active"
        },
        {
            no: 2,
            name: "BRITAMA SME",
            code: "B2",
            category: "BritAma",
            accType: "S",
            business: "false",
            status: "Active"
        },
        {
            no: 3,
            name: "BRITAMA BISNIS SME",
            code: "B3",
            category: "BritAma",
            accType: "S",
            business: "true",
            status: "Active"
        },
        {
            no: 4,
            name: "BritAma X SME",
            code: "B4",
            category: "BritAma",
            accType: "S",
            business: "false",
            status: "Active"
        },
        {
            no: 5,
            name: "Britama Rencana",
            code: "BA",
            category: "Installment",
            accType: "S",
            business: "false",
            status: "Active"
        },
        {
            no: 6,
            name: "Britama Rencana Non Premi",
            code: "BB",
            category: "Installment",
            accType: "S",
            business: "false",
            status: "Active"
        },
    ]

    return (
        <div className="row">
            <div className="col-12 col-md-8">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex align-items-center pb-1">
                            <div className="ms-auto">
                                <input className="form-control" placeholder="Search by Name" />
                            </div>
                            <div className="ms-2">
                                <div role="button" data-bs-toggle="modal" data-bs-target="#bankForm" className="btn-sm btn-primary py-2">+ Create Bank Product </div>
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