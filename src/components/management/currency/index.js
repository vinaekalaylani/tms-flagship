import DataTable from "react-data-table-component";

export default function ManagementCurrencyComp() {
    const columns = [
        {
            name: "No",
            width: "70px",
            selector: row => row.no
        },
        {
            name: "Name",
            width: "400px",
            selector: row => row.name
        }
    ]

    const data = [
        {
            no: 1,
            name: "Britama Bisnis - Britama Bisnis",
            status: "Active"
        },
        {
            no: 2,
            name: "Britama Black - Britama Black",
            status: "Active"
        },
        {
            no: 3,
            name: "Britama Series Basket - Britama Series Basket",
            status: "Active"
        },
        {
            no: 4,
            name: "Britama Series Gentleman - Britama Series Gentleman",
            status: "Active"
        },
        {
            no: 5,
            name: "Britama Series Jogging - Britama Series Jogging",
            status: "Active"
        },
        {
            no: 6,
            name: "Britama Series Laboratorium - Britama Series Laboratorium",
            status: "Active"
        },
        {
            no: 7,
            name: "Britama Series Ladies - Britama Series Ladies",
            status: "Active"
        },
        {
            no: 8,
            name: "Britama Series Makanan - Britama Series Makanan",
            status: "Active"
        },
        {
            no: 9,
            name: "Britama Series New Normal - Britama Series New Normal",
            status: "Active"
        },
        {
            no: 10,
            name: "Britama Series Sepeda - Britama Series Sepeda",
            status: "Active"
        },
        {
            no: 11,
            name: "Britama Silver - Britama Silver",
            status: "Active"
        },
        {
            no: 12,
            name: "GPN Britama X - GPN Britama X",
            status: "Active"
        },
        {
            no: 13,
            name: "GPN Gold - GPN Gold",
            status: "Active"
        },
        {
            no: 14,
            name: "GPN Junio Beruang - GPN Junio Beruang",
            status: "Active"
        },
        {
            no: 15,
            name: "GPN Junio Camera - GPN Junio Camera",
            status: "Active"
        },
        {
            no: 16,
            name: "GPN Premium - Simpedes Usaha",
            status: "Active"
        },
        {
            no: 17,
            name: "GPN Simpedes - GPN Simpedes",
            status: "Active"
        },
        {
            no: 19,
            name: "HUT BRI Hitam - HUT BRI Hitam",
            status: "Active"
        },
        {
            no: 20,
            name: "HUT BRI Hitam - HUT BRI Putih",
            status: "Active"
        }
    ]

    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
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