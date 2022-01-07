import React, { Component } from 'react'  
import logo from '../../img/logo.jfif';
// import Homepage from './Homepage';
import "../../styles/add_booking.css";
import Dd from './Dd';


export class Add_booking extends Component {  


  constructor(props) {
    super(props);
    this.state = {
      taxes:20,
      packages: [
        {
          name: "Rajasthan",
          pacdetails:
            "Rajasthan is a state in northern India. It covers 342,239 square kilometres or 10.4 percent of India's total geographical area. It is the largest Indian state by area and the seventh largest by population.",
          price: "5000",
          status: "approved",
          days: "3",
          nights: "2",
          id: 1,
        }
      ],
    };
  }


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
                          <td scope="row">{this.state.packages[0].price}</td>
                        </tr>
                        <tr>
                          <td scope="row">Taxes</td>
                          <td scope="row">{this.state.taxes}</td>
                        </tr>
                        <tr>
                          <td scope="row">Total</td>
                          <td scope="row">{parseInt(this.state.packages[0].price) + this.state.taxes}</td>
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
              
    