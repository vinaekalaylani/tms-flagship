import Select from "react-select";
import DataTable from "react-data-table-component";

export default function ManagementUACComp() {
    const columns = [
        {
            name: "Nama",
            width: "150px",
            selector: row => row.nama
        },
        {
            name: "Icon",
            width: "150px",
            selector: row => row.icon
        },
        {
            name: "URL",
            width: "240px",
            selector: row => row.url
        },
        {
            name: "Parent ID",
            width: "150px",
            selector: row => row.parentId
        },
        {
            name: "Link",
            width: "150px",
            selector: row => row.link
        },
        {
            name: "Admin",
            width: "150px",
            selector: row => <input className="form-check-input" type="checkbox" checked={row.user} disabled/>
        }
    ]

    const data = [
        {
            nama: "Dashboard",
            icon: "",
            url: "/",
            parentId: 0,
            link: "true",
            user: true
        },
        {
            nama: "Management",
            icon: "",
            url: "/",
            parentId: 0,
            link: "false",
            user: true
        },
        {
            nama: "Branch",
            icon: "",
            url: "/management-branch",
            parentId: 2,
            link: "true",
            user: true
        },
        {
            nama: "Client",
            icon: "",
            url: "/management-client",
            parentId: 2,
            link: "true",
            user: true
        },
        {
            nama: "Client Group",
            icon: "",
            url: "/management-client-group",
            parentId: 2,
            link: "true",
            user: true
        },
        {
            nama: "Client Unit",
            icon: "",
            url: "/management-client-unit",
            parentId: 2,
            link: "true",
            user: true
        },
        {
            nama: "Terminal",
            icon: "",
            url: "/management-terminal",
            parentId: 2,
            link: "true",
            user: true
        },
        {
            nama: "Currency",
            icon: "",
            url: "/management-currency",
            parentId: 2,
            link: "true",
            user: true
        },
        {
            nama: "Denomination",
            icon: "",
            url: "/management-denomination",
            parentId: 2,
            link: "true",
            user: true
        },
        {
            nama: "Money Edition",
            icon: "",
            url: "/management-money-edition",
            parentId: 2,
            link: "true",
            user: true
        },
        {
            nama: "Money Condition",
            icon: "",
            url: "/management-money-condition",
            parentId: 2,
            link: "true",
            user: true
        },
        {
            nama: "User Role",
            icon: "",
            url: "/management-user-role",
            parentId: 2,
            link: "true",
            user: true
        },
        {
            nama: "User",
            icon: "",
            url: "/management-user",
            parentId: 2,
            link: "true",
            user: true
        },
        {
            nama: "UAC",
            icon: "",
            url: "/management-uac",
            parentId: 2,
            link: "true",
            user: true
        },
        {
            nama: "Reporting",
            icon: "",
            url: "/",
            parentId: 0,
            link: "true",
            user: true
        },
        {
            nama: "Process",
            icon: "",
            url: "/reporting-process",
            parentId: 3,
            link: "true",
            user: true
        },
        {
            nama: "Pack",
            icon: "",
            url: "/reporting-pack",
            parentId: 3,
            link: "true",
            user: true
        },
        {
            nama: "System Paramter",
            icon: "",
            url: "/",
            parentId: 0,
            link: "true",
            user: true
        },
        {
            nama: "Menu",
            icon: "",
            url: "/system-menu",
            parentId: 4,
            link: "true",
            user: true
        },
        {
            nama: "System Parameter",
            icon: "",
            url: "/system-parameter",
            parentId: 4,
            link: "true",
            user: true
        },
        {
            nama: "System Terminal",
            icon: "",
            url: "/system-terminal",
            parentId: 4,
            link: "true",
            user: true
        },
        {
            nama: "Context",
            icon: "",
            url: "/system-context",
            parentId: 4,
            link: "true",
            user: true
        },
        {
            nama: "Operation",
            icon: "",
            url: "/",
            parentId: 0,
            link: "false",
            user: true
        },
        {
            nama: "Inbound",
            icon: "",
            url: "/operation-inbound",
            parentId: 5,
            link: "true",
            user: true
        },
        {
            nama: "Outbound",
            icon: "",
            url: "/operation-outbound",
            parentId: 5,
            link: "true",
            user: true
        },

    ]

    const options = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" }
    ]

    const style = {
        control: (base) => ({
            ...base,
            border: "1px solid #dce7f1",
            "&:hover": {
                border: "1px solid #dce7f1"
            },
            "&:focus-within": {
                color: "#607080",
                backgroundColor: "#fff",
                borderColor: "#89A4C7",
                outline: 0,
                boxShadow: "0 0 0 .25rem rgba(45, 118, 200, .5)"
            }
        })
    }

    return (
        <div className="card">
            <div className="card-body">
                <div className="d-flex">
                    <div className="ms-auto col-3" style={{ zIndex : "5" }}>
                        <Select options={options} styles={style} placeholder="Select Role"/>
                    </div>
                    <div className="btn btn-primary ms-2">Save</div>
                </div>
                <DataTable
                    columns={columns}
                    data={data}
                    noHeader
                    defaultSortField="id"
                    defaultSortAsc={false}
                    fixedHeaderScrollHeight={"70vh"}
                    fixedHeader
                    width="auto"
                    highlightOnHover
                    pagination
                />
            </div>
        </div>
    )
}