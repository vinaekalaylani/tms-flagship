export default function EditComp({ setIsEdit, isEditBranch, setIsEditBranch }) {
    const handleCancel = () => {
        setIsEdit(false)
        setIsEditBranch(false)
    }

    const handleBranch = () => {
        setIsEditBranch(true)
    }

    const handleCancelBranch = () => {
        setIsEditBranch(false)
    }

    return (
        <div className="card">
            <div className="card-body fs-7 text-secondary">
                <div className="d-flex mb-3">
                    <div className="col-6 my-auto">
                        <div>Terminal Code</div>
                    </div>
                    <div className="col-6">
                        <input className="form-control" placeholder="CPM" />
                    </div>
                </div>
                <div className="d-flex mb-3">
                    <div className="col-6 my-auto">
                        <div>Terminal Name</div>
                    </div>
                    <div className="col-6">
                        <input className="form-control" placeholder="T001" />
                    </div>
                </div>
                <div className="d-flex mb-3">
                    <div className="col-6 my-auto">
                        <div>Branch</div>
                    </div>
                    <div className="col-6">
                        {isEditBranch ? (
                            <div className="d-flex">
                                <input className="form-control me-1" placeholder="Lebak Bulus" />
                                <div role="button" onClick={handleCancelBranch} className="btn btn-danger">Cancel</div>
                            </div>
                        ) : (
                            <div role="button" onClick={handleBranch} className="btn btn-danger">Change Branch</div>
                        )}
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