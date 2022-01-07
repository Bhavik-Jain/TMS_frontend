import "./styles/admin_edit_packages.css";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Sidenav from "./Sidenav";

function AdminEditPackages(){
    const [name, setName] = useState('');
    const [pacdetails, setPacdetails] = useState('');
    const [price, setPrice] = useState('');
    const [days, setDays] = useState('');
    const [nights, setNights] = useState('');
    const [status, setStatus] = useState('drafts');
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const pack = {name, pacdetails, price, days, nights, status};
        // headers telling browser the type of data we are sending i.e, post
        fetch('http://localhost:8000/packages', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(pack)
        }).then(() => {
            console.log('new package added');
            navigate('/viewpackage');
        })
    }
    return(
        <>
            <Sidenav />
            <div className="container mt-5">
                <h3 className="text-center">Edit Package</h3>
                <div className="row">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Package Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label>Image</label>
                                    <br />
                                    <input type="file" class="form-control-file"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pd">Package Details</label>
                                    <textarea 
                                        class="form-control"
                                        value={pacdetails}
                                        id="pd" rows="1"
                                        onChange={(e) => setPacdetails(e.target.value)} >
                                         </textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="price">Price</label>
                                    <input 
                                        type="text" 
                                        id="price" 
                                        className="form-control"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="days">No. of Days</label>
                                    <input 
                                        type="text" 
                                        id="days" 
                                        className="form-control"
                                        value={days}
                                        onChange={(e) => setDays(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nights">No of Nights</label>
                                    <input 
                                        type="text" 
                                        id="nights" 
                                        className="form-control"
                                        value={nights}
                                        onChange={(e) => setNights(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="status">Status</label>
                                    <select class="form-control" id="status"
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}>
                                        <option>Drafts</option>
                                        <option>Publish</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary">Submit</button>
                                </div>                         
                            </form>
                        </div>
                        <div className="card-footer"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminEditPackages;