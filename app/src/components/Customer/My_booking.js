import React, { Component } from "react";
import logo from "../../img/logo.jfif";
import "../../styles/homepage.css";
import "../../styles/my_booking.css";
import Dd from "./Dd";

class My_booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        },
        {
          name: "Shimla",
          pacdetails:
            "Shimla is a state in northern India. It covers 342,239 square kilometres or 10.4 percent of India's total geographical area. It is the largest Indian state by area and the seventh largest by population.",
          price: "5000",
          status: "drafts",
          days: "3",
          nights: "2",
          id: 2,
        },
        {
          name: "Goa",
          pacdetails:
            "Rajasthan is a state in northern India. It covers 342,239 square kilometres or 10.4 percent of India's total geographical area. It is the largest Indian state by area and the seventh largest by population.",
          price: "5000",
          status: "drafts",
          days: "5",
          nights: "4",
          id: 3,
        },
        {
          name: "Manali",
          pacdetails:
            "One of the most popular hill stations in Himachal, Manali offers the most magnificent views of the Pir Panjal and the Dhauladhar ranges covered with snow",
          price: "8000",
          days: "5",
          nights: "6",
          status: "drafts",
          id: 4,
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <div className="d-flex justify-content-between align-items-center bg-nav ">
          <div>
            <img
              src={logo}
              className="img-logo img-fluid rounded-start"
              alt=""
            />
          </div>
          <div className="d-flex justify-content-between ">
            <button className="bt-login btn btn-sm btn-primary button m-2">
              <a className="btn-link" href="/homepage1">
                Home
              </a>
            </button>
            <div className="m-2">
              <Dd />
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center flex-column">
          <h4>My Booking</h4>

          {this.state.packages.map((packages,id) => (
            <table key={id} className="w-25 mt-2">
              <tbody>
                <tr clasName="">
                  <td><b>Package Name</b> <br/>{packages.name}</td>
                  <td><b>Status</b><br/>{packages.status}</td>
                </tr>
                <tr>
                  <td scope="row">Details</td>
                  <td scope="row"><b>Price</b><br/>{packages.price}</td>
                </tr>
              </tbody>
            </table>
          ))}

         
        </div>
      </div>
    );
  }
}
export default My_booking;
