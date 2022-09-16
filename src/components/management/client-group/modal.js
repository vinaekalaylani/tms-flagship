export default function ModalComp() {
    return (
        <div className="modal fade text-left" id="machineForm" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                <div className="modal-content">
                    <div className="modal-header bg-primary">
                        <div className="modal-title text-white fs-5">Create Machine</div>
                    </div>
                    <form>
                        <div className="modal-body">
                            <div className="d-flex mb-3">
                                <div className="col-5 my-auto">
                                    <div>SN</div>
                                </div>
                                <div className="col-7">
                                    <input className="form-control" placeholder="Serial Number" />
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="col-5 my-auto">
                                    <div>Terminal ID</div>
                                </div>
                                <div className="col-7">
                                    <input className="form-control" placeholder="Terminal ID" />
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="col-5 my-auto">
                                    <div>Machine Code</div>
                                </div>
                                <div className="col-7">
                                    <input className="form-control" placeholder="Machine Code" />
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="col-5 my-auto">
                                    <div>Description</div>
                                </div>
                                <div className="col-7">
                                    <input className="form-control" placeholder="Description" />
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="col-5 my-auto">
                                    <div>IP Address</div>
                                </div>
                                <div className="col-7">
                                    <input className="form-control" placeholder="IP Address" />
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="col-5 my-auto">
                                    <div>Machine Type</div>
                                </div>
                                <div className="col-7">
                                    <input className="form-control" placeholder="Kiosk" />
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="col-5 my-auto">
                                    <div>Regional Office</div>
                                </div>
                                <div className="col-7">
                                    <input className="form-control" placeholder="BANDUNG" />
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="col-5 my-auto">
                                    <div>Partner</div>
                                </div>
                                <div className="col-7">
                                    <input className="form-control" placeholder="Norxel" />
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="col-5 my-auto">
                                    <div>Branch</div>
                                </div>
                                <div className="col-7">
                                    <input className="form-control" placeholder="BANDUNG AA" />
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