import createacc from "../img/create_acc.jpg";
import "../styles/create_account.css";
// import Sidenav from "./admin/Sidenav";
import {Link} from 'react-router-dom';
function Signup()
{
    return(
        <>
            {/* <Sidenav /> */}
            <div className="container main mt-5">
                <div className="card mb-3 md-6 box">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={createacc} className="img-fluid rounded-start" alt="" />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h2 className="card-title">Create Account</h2>

                                <form>                    
                                <input type="text" 
                                    className="form-cotrol mt-3 inpt" 
                                    placeholder="Username"
                                />
                                
                                <input type="Password" 
                                    className="form-cotrol mt-3 inpt" 
                                    placeholder="Password" />

                                <button className="btn btn-sm btn-primary mt-3">Create Account</button>
                                </form>
                                <hr />
                                <p>Already have an account? <Link to="/login"> Login </Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;