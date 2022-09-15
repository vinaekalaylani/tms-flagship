import Select from "react-select";

export default function FilterComp({ setIsFilter }) {
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

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsFilter(false)
    }

    return (
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="card">
                    <form onSubmit={handleSubmit}>
                        <div className="card-header p-3 bg-primary text-white">Search Existing Client Unit</div>
                        <div className="card-body text-secondary fs-7">
                            <div className="d-block d-sm-flex align-items-center mb-2">
                                <div className="col-sm-4 my-2 my-sm-0">Select Client Group</div>
                                <div className="col-sm-8">
                                    <Select options={options} styles={style} />
                                </div>
                            </div>
                        </div>
                        <div className="card-footer p-3">
                            <input type="submit" className="btn btn-primary" value="Search" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}