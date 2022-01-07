import teju from '../../img/teju.jpg';
import "../../styles/login.css";
function Login()
{
    return(
        <>
        <div className="container main mt-5">
        <div className="card mb-3 md-6 box">
            <div className="row g-0">
            <div className="col-md-6">
            <img src={teju} className="banner-img img-fluid rounded-start" alt="" />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h2 className="card-title">Log in</h2>
                        <form className="mt-3">
                        <input type="text" className="form-cotrol mt-5 inpt" placeholder="UserName" />

                        <input type="password" className="form-cotrol mt-4 inpt" placeholder="Password" />
                                            
                        <br />
                        <button className="btn btn-sm btn-primary mt-4 button"><a className="btn-link" href="/homepage1">Log in</a></button>
                        </form>
                        <hr />
                        <p>Not Registered? <a href="/signup">SignUp</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default Login;
