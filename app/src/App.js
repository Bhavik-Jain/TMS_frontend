import React from "react";
import {
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Signup from "./components/Signup";
import Sidenav from "./components/admin/Sidenav";
import Admin_View_Package from "./components/admin/Admin_View_Package";
import AdminMyBookings from "./components/admin/AdminMyBookings";
import AdminEditPackages from "./components/admin/AdminEditPackages";
function App() {
  return (
      <>
        <Link to="/signup">Signup</Link>
        <Link to="/sidenav">Sidenav</Link>
        <Link to="/viewpackage">viewpack</Link>
        <Link to="/viewbookings">viebookings</Link>
        <Link to="/editpac">EditPac</Link>
        <Routes>
            <Route exact path='/signup' element={< Signup />}></Route>
            <Route exact path='/sidenav' element={< Sidenav />}></Route>
            <Route exact path='/viewpackage' element={< Admin_View_Package />}></Route>
            <Route exact path='/viewbookings' element={< AdminMyBookings />}></Route>
            <Route exact path='/editpac' element={< AdminEditPackages />}></Route>
        </Routes>
      </>
  );
}

export default App;