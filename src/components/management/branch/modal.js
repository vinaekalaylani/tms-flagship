export default function ModalComp() {
    return (
        <div className="modal fade text-left" id="branchForm" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                <div className="modal-content">
                    <div className="modal-header bg-primary">
                        <div className="modal-title text-white fs-5">Create Branch</div>
                    </div>
                    <form>
                        <div className="modal-body">
                            <div className="d-flex mb-3">
                                <div className="col-5 my-auto">
                                    <div>Code</div>
                                </div>
                                <div className="col-7">
                                    <input className="form-control" placeholder="Code" />
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="col-5 my-auto">
                                    <div>Name</div>
                                </div>
                                <div className="col-7">
                                    <input className="form-control" placeholder="Name" />
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="col-5 my-auto">
                                    <div>Regional Office</div>
                                </div>
                                <div className="col-7">
                                    <input className="form-control" placeholder="Regional Office" />
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="col-5 my-auto">
                                    <div>State</div>
                                </div>
                                <div className="col-7">
                                    <input className="form-control" placeholder="State" />
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="col-5 my-auto">
                                    <div>City</div>
                                </div>
                                <div className="col-7">
                                    <input className="form-control" placeholder="City" />
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="col-5 my-auto">
                                    <div>Status</div>
                                </div>
                                <div className="col-7">
                                    <input className="form-control" placeholder="Active" />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="d-flex">
                                <div role="button" data-bs-dismiss="modal" className="btn btn-danger ms-auto">Cancel</div>
                                <div role="button" data-bs-dismiss="modal" className="btn btn-primary ms-2">Save</div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}