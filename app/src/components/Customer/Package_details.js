import React, { Component } from 'react'
import logo from '../../img/logo.jfif';
import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jpg';
import img3 from '../../img/3.jpg';
import Slider from "react-slick";  
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import "../../styles/homepage.css";
import "../../styles/package_details.css";
import Dd from './Dd';
import Package_preview from './Package_preview';

// import '../../styles/slickdemo.css' 
 class Package_details extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      idd:0,
      package : [
        {
          "name": "Rajasthan",
          "pacdetails": "Rajasthan is a state in northern India. It covers 342,239 square kilometres or 10.4 percent of India's total geographical area. It is the largest Indian state by area and the seventh largest by population.",
          "price": "5000",
          "status": "approved",
          "days": "3",
          "nights": "2",
          "id": 1
        },
        {
          "name": "Shimla",
          "pacdetails": "Shimla is a state in northern India. It covers 342,239 square kilometres or 10.4 percent of India's total geographical area. It is the largest Indian state by area and the seventh largest by population.",
          "price": "5000",
          "status": "drafts",
          "days": "3",
          "nights": "2",
          "id": 2
        },
        {
          "name": "Goa",
          "pacdetails": "Rajasthan is a state in northern India. It covers 342,239 square kilometres or 10.4 percent of India's total geographical area. It is the largest Indian state by area and the seventh largest by population.",
          "price": "5000",
          "status": "drafts",
          "days": "5",
          "nights": "4",
          "id": 3
        },
        {
          "name": "Manali",
          "pacdetails": "One of the most popular hill stations in Himachal, Manali offers the most magnificent views of the Pir Panjal and the Dhauladhar ranges covered with snow",
          "price": "8000",
          "days": "5",
          "nights": "6",
          "status": "drafts",
          "id": 4
        },
        {
          "name": "Kerela",
          "pacdetails": "Kerala, a state on India's tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline. It's known for its palm-lined beaches and backwaters, a network of canals. Inland are the Western Ghats, mountains whose slopes support tea, coffee and spice plantations as well as wildlife. National parks like Eravikulam and Periyar, plus Wayanad and other sanctuaries, are home to elephants, langur monkeys and tigers.",
          "price": "6000",
          "days": "2",
          "nights": "1",
          "status": "Publish",
          "id": 5
        },
        {
          "name": "Gujarat",
          "pacdetails": "Gujarat is a state on the western coast of India with a coastline of 1,600 km – most of which lies on the Kathiawar peninsula – and a population of 60.4 million. It is the fifth-largest Indian state by area and the ninth-largest state by population.",
          "price": "3000",
          "days": "2",
          "nights": "1",
          "status": "Publish",
          "id": 6
        }]
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
          <div className="m-4"> 
            <h2>Package Name</h2>
          </div>
          <div className="d-flex m-4">
          <div className="col-6">
            <Slider {...settings} >  
              <div className="wdtSlider">  
              <img className="imgSlider" alt="Image" src= {img1}/>  
              </div>  
              <div className="wdtSlider">  
              <img style={{"height":"50px"}} alt="Image"  src= {img2} className="imgSlider"/>  
              </div>  
              <div className="wdtSlider">  
              <img  className="imgSlider" alt="Image" src= {img3} />  
              </div>    
            </Slider>
          </div>
            {/* <Package_preview /> */}
          </div>
      </div>
    )
  }
}
export default Package_details;