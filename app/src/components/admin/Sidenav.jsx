
   
import "./styles/sidenav.css";

function Sidenav(){
    const openNav = () =>{
        document.getElementById('sidenav').style.width = "250px";
    }
    const closeNav = () =>{
        document.getElementById('sidenav').style.width = "0";;
    }

    return(
        <>
            <header>
                <div className="head">
                    <div>
                        <span className="toggle" onClick={openNav}>&#9776;</span>
                    </div>
                    <div className="logo">
                        <h3>Offbeat Travels</h3>
                    </div>
                </div>
            </header>
            <div className="sidenav" id="sidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                <a href="/editprof">Admin</a>
                <a href="/viewpackage">View Packages</a>
                <a href="/viewbookings">View Bookings</a>
                <input type="submit" value="Logout" className="btn btn-danger sidenav-btn mt-2" />
            </div>
        </>
    );
}
export default Sidenav;

// with redux
// import { connect } from 'react-redux';
// import * as actions from '../store/actions/auth';

/* {
    this.props.isAuthenticated ?
    <input type="submit" value="Logout" className="btn btn-danger sidenav-btn mt-2" />
    :
    <input type="submit" value="Login" className="btn btn-succeess sidenav-btn mt-2" />
} */

// const mapDispatchToProps = dispatch => {
//     return {
//         logout: () => dispatch(actions.logout()) 
//     }
// }

// export default withRouter(connect(null, mapDispatchToProps)(Sidenav));