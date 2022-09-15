import DataTable from "react-data-table-component";
import DetailComp from "./detail";

export default function ReportingProcessComp() {
    const columns = [
        {
            name: "No",
            width: "70px",
            selector: row => row.no
        },
        {
            name: "Branch",
            width: "130px",
            selector: row => row.branch
        },
        {
            name: "Pack No",
            width: "140px",
            selector: row => row.packNo
        },
        {
            name: "Client",
            width: "200px",
            selector: row => row.client
        },
        {
            name: "Client Unit",
            width: "120px",
            selector: row => row.clientUnit
        },
        {
            name: "Service",
            width: "120px",
            selector: row => row.service
        },
        {
            name: "Process Type",
            width: "120px",
            selector: row => row.processType
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
            branch: "Lebak Bulus",
            packNo: "20211129001",
            client: "Bank CIMB Niaga PT. Tbk",
            clientUnit: "",
            service: "STC",
            processType: "B + S",
            status: "New"
        },
        {
            no: 2,
            branch: "Lebak Bulus",
            packNo: "20211129002",
            client: "Bank CIMB Niaga PT. Tbk",
            clientUnit: "",
            service: "STC",
            processType: "B + S",
            status: "New"
        },
        {
            no: 3,
            branch: "Lebak Bulus",
            packNo: "20211129003",
            client: "Bank CIMB Niaga PT. Tbk",
            clientUnit: "",
            service: "STC",
            processType: "B + S",
            status: "New"
        },
        {
            no: 4,
            branch: "Lebak Bulus",
            packNo: "20211129004",
            client: "Bank CIMB Niaga PT. Tbk",
            clientUnit: "",
            service: "STC",
            processType: "B + S",
            status: "New"
        },
        {
            no: 5,
            branch: "Lebak Bulus",
            packNo: "20211129005",
            client: "Bank CIMB Niaga PT. Tbk",
            clientUnit: "",
            service: "STC",
            processType: "B + S",
            status: "New"
        },
        {
            no: 6,
            branch: "Lebak Bulus",
            packNo: "20211129006",
            client: "Bank CIMB Niaga PT. Tbk",
            clientUnit: "",
            service: "STC",
            processType: "B + S",
            status: "New"
        },
        {
            no: 7,
            branch: "Lebak Bulus",
            packNo: "20211129007",
            client: "Bank CIMB Niaga PT. Tbk",
            clientUnit: "",
            service: "STC",
            processType: "B + S",
            status: "New"
        },
        {
            no: 8,
            branch: "Lebak Bulus",
            packNo: "20211129008",
            client: "Bank CIMB Niaga PT. Tbk",
            clientUnit: "",
            service: "STC",
            processType: "B + S",
            status: "New"
        },
        {
            no: 9,
            branch: "Lebak Bulus",
            packNo: "20211129009",
            client: "Bank CIMB Niaga PT. Tbk",
            clientUnit: "",
            service: "STC",
            processType: "B + S",
            status: "New"
        }
    ]

    return (
        <div className="row">
            <div className="col-12 col-md-8">
                <div className="card">
                    <div className="card-body text-secondary">
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
                <DetailComp />
            </div>
        </div>
    )
}