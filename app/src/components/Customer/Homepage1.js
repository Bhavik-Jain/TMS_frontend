import React, { Component } from 'react'  
import Slider from "react-slick";  
// import '../../styles/slickdemo.css';  
import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jpg';
import img3 from '../../img/3.jpg';
import logo from '../../img/logo.jfif';
import Dd from './Dd';
import WithScrollbar from './WithScrollbar';
//  import "../../styles/homepage.css"


export class Homepage1 extends Component {  
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
                <div className='d-flex justify-content-between align-items-center bg-nav'>
                  <div>
                    <img src={logo} className="img-logo img-fluid rounded-start" alt="" />
                  </div>
                  <div className="d-flex">
                    <button  className="bt-login btn btn-sm btn-primary button "><a className="btn-link" href="/">Home</a></button>
                    <div className="bt-menu">
                      <Dd />
                    </div>
                    
                  </div>
                 </div>
              </div> 

            <div className='container' >        
            <div className="row title" style={{marginBottom: "20px"}} >                
            </div>    
            </div>  
            {/* <Slider {...settings} >  
              <div className="wdt">  
              <img  className="img" src= {img1} className="img"/>  
              </div>  
              <div className="wdt">  
              <img style={{"height":"40px"}}  src= {img2} className="img"/>  
              </div>  
              <div className="wdt">  
              <img  className="img" src= {img3} className="img"/>  
              </div>    
            </Slider> */}
            <div className='d-flex justify-content-center m-4'>
                <h3> Featured Packages </h3>
            </div>
            
            <div className="d-flex justify-content-center">
              <div className=' col-10 overflow-hidden'>
                <WithScrollbar />
              </div>
            </div>   
            </div>  
          );  
        }  
      }  
  
export default Homepage1