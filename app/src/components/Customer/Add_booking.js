import React, { Component } from 'react'  
import logo from '../../img/logo.jfif';
// import Homepage from './Homepage';
import "../../styles/add_booking.css";
import Dd from './Dd';


export class Add_booking extends Component {  
    render() {  
        var settings = {  
          dots: true,  
          infinite: true,  
          speed: 10,  
          centerMode: true,  
          slidesToShow: 1,  
          slidesToScroll: 1  
          };  
          return (  
            <div> 
               <div className='container-fluid bg-nav' >
                  
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
              </div> 
              
              <div className="d-flex justify-content-around m-4">
                <div className="col-2">

                </div>

                <div className="mt-4 col-4">
                  
                      <div className="card-body booking-body">
                          <h2>Booking Detalis</h2>
                          <form className="md-3">
                          <input type="text" className="form-cotrol mt-5 inpt" placeholder="Name" /> <br />
                          <input type="number" className="form-cotrol mt-4 inpt" placeholder="Date" /> <br />
                          <input type="number" className="form-cotrol mt-4 inpt" placeholder="Phone" />              
                          <br />
                          <button className="btn btn-sm btn-primary mt-4 button">Make Payment</button>
                          </form>
                          
                        </div>
                    
                </div>

                <div className="mt-4 col-4">
                <table className="table mt-4" border='1'>
                      <tbody>
                        <tr>
                          <th scope="row">Fare Details</th>
                          <th scope="row"></th>
                        </tr>
                        <tr>
                          <td scope="row">Base Price</td>
                          <td scope="row">XXXXX</td>
                        </tr>
                        <tr>
                          <td scope="row">Taxes</td>
                          <td scope="row">XXXXX</td>
                        </tr>
                        <tr>
                          <td scope="row">Total</td>
                          <td scope="row">XXXXX</td>
                        </tr>
                      </tbody>
                    </table>


                </div>
              </div>
            </div>
            
              );  
        }  
      }  
  
export default Add_booking 
              
    