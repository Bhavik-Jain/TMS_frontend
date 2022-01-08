import React from "react";
import { useState } from "react";
import {
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Signup from "./components/Signup";
import Login from "./components/Login";
import Sidenav from "./components/admin/Sidenav";
import Admin_View_Package from "./components/admin/Admin_View_Package";
import AdminMyBookings from "./components/admin/AdminMyBookings";
import AdminEditPackages from "./components/admin/AdminEditPackages";
import Admin_Profile from "./components/admin/Admin-Profile";
import Admin_edit_bookings from "./components/admin/Admin_edit_bookings";
import Preview_package from "./components/admin/Preview_package";

function App() {
  const [token, setToken] = useState('');
  const userLogin = (tok) =>{
    setToken(tok);
  }
  return (
    <>
      <Link to="/signup">Signup</Link>
      <Link to="/sidenav">Sidenav</Link>
      <Link to="/viewpackage">viewpack</Link>
      <Link to="/viewbookings">viebookings</Link>
      <Link to="/editpac">EditPac</Link>
      <Link to="/editprof">Editprofile</Link>
      <Link to="/editbook">EditBook</Link>
      <Link to="/packages">previewpac</Link>



      <Routes>
        <Route exact path='/login' element={< Login userLogin={userLogin} />}></Route>
        <Route exact path='/signup' element={< Signup />}></Route>
        <Route exact path='/sidenav' element={< Sidenav />}></Route>
        <Route exact path='/viewpackage' element={< Admin_View_Package token={token} />}></Route>
        <Route exact path='/viewbookings' element={< AdminMyBookings />}></Route>
        <Route exact path='/editpac' element={< AdminEditPackages token={token} />}></Route>
        <Route exact path='/editprof' element={< Admin_Profile />}></Route>
        <Route exact path='/editbook' element={< Admin_edit_bookings />}></Route>
        <Route exact path='/packages/:id' element={< Preview_package />}></Route>
      </Routes>  
    </>
  );
}

export default App;


//  with redux
// import { React, Component } from "react";
// import {
//   Routes,
//   Router,
//   Route,
//   Link
// } from 'react-router-dom';
// import Signup from "./components/Signup";
// import Sidenav from "./components/admin/Sidenav";
// import Admin_View_Package from "./components/admin/Admin_View_Package";
// import AdminMyBookings from "./components/admin/AdminMyBookings";
// import AdminEditPackages from "./components/admin/AdminEditPackages";
// import Admin_Profile from "./components/admin/Admin-Profile";
// import Admin_edit_bookings from "./components/admin/Admin_edit_bookings";
// import Preview_package from "./components/admin/Preview_package";
// import {connect} from 'react-redux';
// import * as actions from './store/actions/auth';
// import Login from "./components/Login";

// class App extends Component{

//   componentDidMount()
//   {
//     this.props.onTryAutoSignup();
//   }

//   render(){
//     return (
//       <>
//         <Link to="/login">Login</Link>
//         <Link to="/signup">Signup</Link>
//         <Link to="/sidenav">Sidenav</Link>
//         <Link to="/viewpackage">viewpack</Link>
//         <Link to="/viewbookings">viebookings</Link>
//         <Link to="/editpac">EditPac</Link>
//         <Link to="/editprof">Editprofile</Link>
//         <Link to="/editbook">EditBook</Link>
//         <Link to="/packages">previewpac</Link>
//       <Router>
//         <Sidenav {...this.props} />
//         <Routes>
//             {/* <Route exact path='/login' element={< Login />}></Route> */}
//             <Route exact path='/signup' element={< Signup />}></Route>
//             <Route exact path='/viewpackage' element={< Admin_View_Package />}></Route>
//             <Route exact path='/viewbookings' element={< AdminMyBookings />}></Route>
//             <Route exact path='/editpac' element={< AdminEditPackages />}></Route>
//             <Route exact path='/editprof' element={< Admin_Profile />}></Route>
//             <Route exact path='/editbook' element={< Admin_edit_bookings />}></Route>
//             <Route exact path='/packages/:id' element={< Preview_package />}></Route>
//         </Routes>
//       </Router>
//       </>
//     );
//   }
// }
// // console.log('Is authenticated: ' + this.props.isAuthenticated);
// const mapStateToProps = state => {
//   return{
//     isAuthenticated: state.token !== null
//   }
// }

// const mapDispatchToProps = dispatch =>{
//   return {
//     onTryAutoSignup: () => dispatch(actions.authCheckState())
//   }
// }
// export default connect(null, mapDispatchToProps)(App);
