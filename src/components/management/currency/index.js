import { useState } from "react";

import DataTable from "react-data-table-component";
import DetialComp from "./detail";
import EditComp from "./edit";
import ModalComp from "./modal";

export default function ManagementCurrencyComp() {
    const [isEdit, setIsEdit] = useState(false)

    const columns = [
        {
            name: "No",
            width: "70px",
            selector: row => row.no
        },
        {
            name: "Currency Code",
            width: "130px",
            selector: row => row.currencyCode
        },
        {
            name: "Currency Name",
            width: "200px",
            selector: row => row.currencyName
        },
        {
            name: "Currency Symbol",
            width: "200px",
            selector: row => row.currencySymbol
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
            currencyCode: "IDR",
            currencyName: "Indonesia Rupiah",
            currencySymbol: "Rp",
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
                                <input className="form-control" placeholder="Search by Currency Code" />
                            </div>
                            <div className="ms-2">
                                <div className="btn-sm btn-primary py-2" role="button" data-bs-toggle="modal" data-bs-target="#currencyForm">+ Create Currency</div>
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
                    <DetialComp setIsEdit={setIsEdit}/>
                )}
            </div>
        </div>
    )
}