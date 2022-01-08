import createacc from "../img/create_acc.jpg";
import "../styles/create_account.css";
import { Component, useState } from "react";
import {Link} from 'react-router-dom';

class Signup extends Component
{
    state = {
        credentials: {username: '', password: ''}
    }

    handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://127.0.0.1:8000/api/users/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.credentials)
        })
        .then( data => data.json())
        .then(
            data => {
            console.log(data.token);
            }
        )
        .catch( error => console.error(error))
    }
    inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred});
    }
    render(){
        return(
            <>
                {/* <Sidenav /> */}
                <div className="container main mt-5">
                    <div className="card mb-3 md-6 box">
                        <div className="row g-0">
                            <div className="col-md-6">
                                <img src={createacc} className="img-fluid rounded-start" alt="" />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h2 className="card-title">Create Account</h2>

                                    <form>                    
                                    <input type="text" 
                                        className="form-cotrol mt-3 inpt" 
                                        placeholder="Username"
                                        name="username"
                                        value={this.state.credentials.username}
                                        onChange={this.inputChanged}
                                    />
                                    
                                    <input type="Password" 
                                        className="form-cotrol mt-3 inpt" 
                                        placeholder="Password" 
                                        name="password"
                                        value={this.state.credentials.password}
                                        onChange={this.inputChanged}
                                    />

                                    <button className="btn btn-sm btn-primary mt-3" onClick={this.handleSubmit}>Create Account</button>
                                    </form>
                                    <hr />
                                    <p>Already have an account? <Link to="/login"> Login </Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Signup;