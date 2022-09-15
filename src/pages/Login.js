import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/")
    }

    return (
        <div id="auth" className="overflowX-hidden">
            <div className="row">
                <div className="col-lg-6 col-12 p-0">
                    <div id="auth-left" className="vh-100 d-flex">
                        <div className="card-left d-flex align-items-center justify-content-center flex-column">
                            <div className="fs-1 mb-4 text-primary fw-bold">CPM</div>
                            <div className="w-100 mb-3 mt-5">
                                <div className="title-input">USERNAME</div>
                                <input className="form-control" placeholder="Type your username" autoComplete="off" />
                            </div>
                            <div className="w-100 mt-3 mb-5">
                                <div className="title-input">PASSSWORD</div>
                                <input className="form-control" placeholder="Type your password" type="password" />
                            </div>
                            <div role="button" onClick={handleLogin} className="btn btn-primary btn-login w-100 mt-4 fw-bold">Log in</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 d-none d-lg-block p-0">
                    <div id="auth-right" className="vh-100 bg-primary d-flex">
                        <div className="card-right my-auto d-flex align-items-center justify-content-center">
                            <img src="./assets/images/v2/bg-login.png" alt="bg-login" width="75%"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}