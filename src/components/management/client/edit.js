export default function EditComp({ setIsEdit }) {
    const handleCancel = () => {
        setIsEdit(false)
    }

    return (
        <div className="card">
            <div className="card-body fs-7 text-secondary">
                <div className="d-flex mb-3">
                    <div className="col-6 my-auto">
                        <div>Name</div>
                    </div>
                    <div className="col-6">
                        <input className="form-control" placeholder="BANDUNG" />
                    </div>
                </div>
                <div className="d-flex mb-3">
                    <div className="col-6 my-auto">
                        <div>Status</div>
                    </div>
                    <div className="col-6">
                        <input className="form-control" placeholder="Active" />
                    </div>
                </div>
            </div>
            <div className="card-footer p-3">
                <div className="d-flex">
                    <div role="button" onClick={handleCancel} className="btn btn-danger ms-auto">Cancel</div>
                    <div role="button" onClick={handleCancel} className="btn btn-primary ms-2">Save</div>
                </div>
            </div>
        </div>
    )
}