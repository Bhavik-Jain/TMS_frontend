import logo from '../../img/logo.jfif';
import "../../styles/homepage.css"
import Dd from './Dd';



function Profile(){
    return(
        <>
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

               <div className="d-flex align-items-center justify-content-center mt-4">
                    <div className="card box">
                       <div className="col-12">
                            <div className="card-body p-4" >
                                <from >
                                   <h2><div className="card-title">Profile</div></h2>
                                       <input type="text" className="form-cotrol mt-5 inpt" placeholder="Name" />
                                        <input type="text" className="form-control mt-5 inpt" placeholder="UserName" />
                                        <input type="number" className="form-control mt-5 inpt" placeholder="Number" />
                                        <input type="text" className="form-control mt-5 inpt" placeholder="DOB" />

                                        <button className="btn btn-sm btn-primary mt-4 button">Update</button>

                        </from>

                    </div>
                </div>
            </div> 

                        
        </div>
                  
        </>
    )
}
export default Profile;