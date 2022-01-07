import React, { Component } from 'react'
import logo from '../../img/logo.jfif';
import "../../styles/homepage.css";
import "../../styles/my_booking.css";
import Dd from './Dd';


 class My_booking extends Component {
    render() {
        return (
            <div> 
                <div className='d-flex justify-content-between align-items-center bg-nav '>
                  <div>
                    <img src={logo} className="img-logo img-fluid rounded-start" alt="" />
                  </div>
                  <div className="d-flex justify-content-between ">
                    <button  className="bt-login btn btn-sm btn-primary button m-2"><a className="btn-link" href="/homepage1">Home</a></button>
                    <div className="m-2">
                     <Dd />
                    </div>
                    
                   </div>
                 </div>
                <div className="d-flex align-items-center flex-column">
                    <h4>My Booking</h4>
                    
                    <table className="w-25 mt-2" >
                        <tbody >
                            <tr clasName="">
                            <td >Package Name</td>
                            <td >Status</td>
                            </tr>
                            <tr>
                                <td scope="row">Details</td>
                                <td scope="row">Fare : XXXX</td>
                            </tr>
                            </tbody>
                    </table>
                    <br/>
                    <table className=" mt-2 w-25" >
                        <tbody >
                            <tr clasName="m-4 p-2">
                            <td scope="row">Package Name</td>
                            <td scope="row">Status</td>
                            </tr>
                            <tr>
                                <td scope="row">Details</td>
                                <td scope="row">Fare : XXXX</td>
                            </tr>
                            </tbody>
                    </table>
                    </div>
                 </div>
            
        );
    }
}
 export default My_booking;
