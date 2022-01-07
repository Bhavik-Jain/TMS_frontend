// import createacc from "../img/create_acc.jpg";
// import "../styles/create_account.css";
// import { Spin } from 'antd';
// import { LoadingOutlined } from '@ant-design/icons';
// import {connect} from 'react-redux';

// const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

// function Login()
// {    
//     let errorMessage = null;
//     if (this.props.error){
//         errorMessage = (
//             <p>{this.props.error.message}</p>
//         );
//     }
//     return(
//         <>
//             <div className="container main mt-5">
//                 <div className="card mb-3 md-6 box">
//                     <div className="row g-0">
//                         <div className="col-md-6">
//                             <img src={createacc} className="img-fluid rounded-start" alt="" />
//                         </div>
//                         <div className="col-md-6">
//                             <div className="card-body">
//                                 <h2 className="card-title">Create Account</h2>
//                                 {errorMessage}
//                                 {
//                                     this.props.loading ?
//                                     <Spin indicator={antIcon} />
//                                     :
//                                     <form>                    
//                                         <input type="text" 
//                                             className="form-cotrol mt-3 inpt" 
//                                             placeholder="Username"/>
                                        
//                                         <input type="Password" 
//                                             className="form-cotrol mt-3 inpt" 
//                                             placeholder="Password" />
                                        
//                                         <button className="btn btn-sm btn-primary mt-3">Create Account</button>
//                                     </form>
//                                 }
//                                 <hr />
//                                 <p>Already have an account? <a href="/">Login</a></p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
// const mapStateToProps = (state) =>{
//     return{
//         loading: state.loading,
//         error: state.error
//     }
// }
// export default connect(mapStateToProps)(Login);