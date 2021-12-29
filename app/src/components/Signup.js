import createacc from "../img/create_acc.jpg";
import "../styles/create_account.css";


function Signup()
{
    return(
        <>
            <div className="container main mt-5">
                <div className="card mb-3 md-6 box">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={createacc} className="img-fluid rounded-start" alt="" />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h2 className="card-title">Create Account</h2>

                                <form className="mt-3">
                                <input type="text" classNameName="form-cotrol mt-5 inpt" placeholder="Name" />

                                <input type="phone" className="form-cotrol mt-4 inpt" placeholder="Phone" />
                    
                                <input type="text" className="form-cotrol mt-4 inpt" placeholder="Username" />
                                
                                <input type="Password" className="form-cotrol mt-4 inpt" placeholder="Password" />
                                <br />
                                <button className="btn btn-sm btn-primary mt-4 button">Create Account</button>
                                </form>
                                <hr />
                                <p>Already have an account? <a href="/">Login</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;