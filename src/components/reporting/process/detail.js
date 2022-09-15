import DataTable from "react-data-table-component";

export default function DetailComp() {
    const columns = [
        {
            name: "Denomination",
            width: "150px",
            selector: row => row.denomination
        },
        {
            name: "Qty",
            width: "150px",
            selector: row => row.qty
        },
        {
            name: "Subtotal",
            width: "140px",
            selector: row => row.subtotal
        }
    ]

    const data = [
        {
            denomination: "100,000",
            qty: "10",
            subtotal: "1,000,000,00"
        }
    ]

    return (
        <div className="card fs-7">
            <div className="card-header p-3 text-secondary fw-bold">
                Detail
            </div>
            <div className="card-body">
                <div className="ms-3 mb-3">IDR</div>
                <hr className="m-0" />
                <DataTable
                    columns={columns}
                    data={data}
                    noHeader
                    defaultSortField="id"
                    defaultSortAsc={false}
                    fixedHeader
                    width="auto"
                    highlightOnHover
                />
            </div>
        </div>
    )
}