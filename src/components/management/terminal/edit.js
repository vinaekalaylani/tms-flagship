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
                        <input className="form-control" placeholder="Britama Bisnis" />
                    </div>
                </div>
                <div className="d-flex mb-3">
                    <div className="col-6 my-auto">
                        <div>Code</div>
                    </div>
                    <div className="col-6">
                        <input className="form-control" placeholder="Britama Bisnis" />
                    </div>
                </div>
                <div className="d-flex mb-3">
                    <div className="col-6 my-auto">
                        <div>Card Information</div>
                    </div>
                    <div className="col-6">
                        <input className="form-control" placeholder="Card Information" />
                    </div>
                </div>
                <div className="d-flex mb-3">
                    <div className="col-6 my-auto">
                        <div>Tarik Tunai</div>
                    </div>
                    <div className="col-6">
                        <input className="form-control" placeholder="20 juta" />
                    </div>
                </div>
                <div className="d-flex mb-3">
                    <div className="col-6 my-auto">
                        <div>Transfer Antar Bank</div>
                    </div>
                    <div className="col-6">
                        <input className="form-control" placeholder="25 juta" />
                    </div>
                </div>
                <div className="d-flex mb-3">
                    <div className="col-6 my-auto">
                        <div>Transfer sesama BRI</div>
                    </div>
                    <div className="col-6">
                        <input className="form-control" placeholder="100 juta" />
                    </div>
                </div>
                <div className="d-flex mb-3">
                    <div className="col-6 my-auto">
                        <div>RTGS di Internet Banking</div>
                    </div>
                    <div className="col-6">
                        <input className="form-control" placeholder="550 juta" />
                    </div>
                </div>
                <div className="d-flex mb-3">
                    <div className="col-6 my-auto">
                        <div>Pembayaran Tagihan</div>
                    </div>
                    <div className="col-6">
                        <input className="form-control" placeholder="100 juta" />
                    </div>
                </div>
                <div className="d-flex mb-3">
                    <div className="col-6 my-auto">
                        <div>Setoran Awal</div>
                    </div>
                    <div className="col-6">
                        <input className="form-control" placeholder="1 juta" />
                    </div>
                </div>
                <div className="d-flex mb-3">
                    <div className="col-6 my-auto">
                        <div>Biaya Kartu</div>
                    </div>
                    <div className="col-6">
                        <input className="form-control" placeholder="25000" />
                    </div>
                </div>
                <div className="d-flex mb-3">
                    <div className="col-6 my-auto">
                        <div>Card Image</div>
                    </div>
                    <div className="col-6">
                        <input className="form-control" placeholder="" type="file" />
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