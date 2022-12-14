export default function ModalComp() {
    return (
        <div className="modal fade text-left" id="cardForm" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                <div className="modal-content">
                    <div className="modal-header bg-primary">
                        <div className="modal-title text-white fs-5">Create Card Variant</div>
                    </div>
                    <form>
                        <div className="modal-body">
                            <div className="d-flex mb-3">
                                <div className="col-5 my-auto">
                                    <div>Name</div>
                                </div>
                                <div className="col-7">
                                    <input className="form-control" placeholder="name" />
                                </div>
                            </div>
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
                                    <div>Card Information</div>
                                </div>
                                <div className="col-7">
                                    <input className="form-control" placeholder="Card Variant" />
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="col-5 my-auto">
                                    <div>Tarik Tunai</div>
                                </div>
                                <div className="col-7">
                                    <input className="form-control" placeholder="" />
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="col-5 my-auto">
                                    <div>Transfer Antar Bank</div>
                                </div>
                                <div className="col-7">
                                    <input className="form-control" placeholder="" />
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="col-5 my-auto">
                                    <div>Transfer sesama BRI</div>
                                </div>
                                <div className="col-7">
                                    <input className="form-control" placeholder="" />
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="col-5 my-auto">
                                    <div>RTGS di Internet Banking</div>
                                </div>
                                <div className="col-7">
                                    <input className="form-control" placeholder="" />
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="col-5 my-auto">
                                    <div>Pembayaran Tagihan</div>
                                </div>
                                <div className="col-7">
                                    <input className="form-control" placeholder="" />
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="col-5 my-auto">
                                    <div>Setoran Awal</div>
                                </div>
                                <div className="col-7">
                                    <input className="form-control" placeholder="" />
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="col-5 my-auto">
                                    <div>Biaya Kartu</div>
                                </div>
                                <div className="col-7">
                                    <input className="form-control" placeholder="" />
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="col-5 my-auto">
                                    <div>Card Image</div>
                                </div>
                                <div className="col-7">
                                    <input className="form-control" placeholder="" type="file" />
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