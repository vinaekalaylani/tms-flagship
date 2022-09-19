export default function DetailComp({ setIsEdit }) {
    const handleEdit = () => {
        setIsEdit(true)
    }

    return (
        <div className="card">
            <div className="card-header p-3">
                <div className="d-flex align-items-center">
                    <div className="text-secondary fw-bold">Detail</div>
                    <div role="button" onClick={handleEdit} className="btn-sm btn-primary py-2 px-3 ms-auto">Edit</div>
                </div>
            </div>
            <div className="card-body fs-7 text-secondary">
                <div className="d-flex mb-3">
                    <div className="col-6">
                        <div>Name</div>
                    </div>
                    <div className="col-6">
                        <div>: Britama Bisnis</div>
                    </div>
                </div>
                <div className="d-flex mb-3">
                    <div className="col-6">
                        <div>Code</div>
                    </div>
                    <div className="col-6">
                        <div>: Britama Bisnis</div>
                    </div>
                </div>
                <div className="d-flex mb-3">
                    <div className="col-6">
                        <div>Status</div>
                    </div>
                    <div className="col-6">
                        <div>: <div className="badge bg-primary">Active</div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}