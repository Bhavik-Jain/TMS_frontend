import createacc from "../img/create_acc.jpg";
import "../styles/create_account.css";

function Signup() {
  return (
    <>
      <div className="container main mt-5">
        <div className="card mb-3 md-6 box">
          <div className="row g-0">
            <div className="col-md-6">
              <img src={createacc} className="img-fluid rounded-start" alt="" />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h2 className="card-title"><a className="btn-link" href="/homepage1"></a>Create Account</h2>

                <form>
                  <input
                    type="text"
                    className="form-cotrol mt-2 inpt"
                    placeholder="Name"
                  />

                  <input
                    type="phone"
                    className="form-cotrol mt-3 inpt"
                    placeholder="Phone"
                  />

                  <input
                    type="text"
                    className="form-cotrol mt-3 inpt"
                    placeholder="Username"
                  />

                  <input
                    type="Password"
                    className="form-cotrol mt-3 inpt"
                    placeholder="Password"
                  />
                  <br />
                  <button className="btn btn-sm btn-primary mt-3 button">
                    Create Account
                  </button>
                </form>
                <hr />
                <p>
                  Already have an account? <a href="/">Login</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
