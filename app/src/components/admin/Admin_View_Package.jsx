import {Link} from "react-router-dom";
import {React, useState, useEffect} from 'react';
import { AiFillEye, AiTwotoneDelete } from 'react-icons/ai';
import {FiEdit} from 'react-icons/fi';
import {IoIosCloudyNight} from 'react-icons/io';
import { BsFillBrightnessAltHighFill } from 'react-icons/bs';
import "./styles/admin_view_packages.css";
import Sidenav from "./Sidenav";

function Admin_View_Package(){
    const [packages, setpackages] = useState([])
    useEffect(() => {
           fetch('http://localhost:8000/packages')
           .then(res => {
               return res.json();
           })  
           .then(data => {
               setpackages(data);
           })
    }, []);

    return(
        <>
            <Sidenav />
            <div className="container mt-5">
                <div className='head'>
                        <h3>ALL PACKAGES</h3>
                        <Link to="/editpac/" className="btn btn-primary">Add</Link>
                </div>
                <hr />
                <table className='table'>
                    <tbody>
                        {packages.map((packages) => (
                            <tr>
                                <td>
                                    <h3>{packages.name}</h3>
                                    <pre>
                                        <p> <BsFillBrightnessAltHighFill style={{
                                         color: "orange"
                                         }} /> {packages.days} <IoIosCloudyNight style={{
                                            color: "darkblue",
                                            }} /> {packages.days}</p>
                                    </pre>
                                </td>
                                <td>
                                    <p>₹ {packages.price}</p>
                                    <p>Status: {packages.status}</p>
                                </td>
                                <td>
                                    <FiEdit style={{
                                         color: "blue",
                                         }} />
                                    <br></br>
                                    <Link to={`/packages/${packages.id}`}><AiFillEye style={{
                                         color: "green",
                                         }} /></Link>
                                    <br></br>
                                    <AiTwotoneDelete style={{color:
                                    "darkred"}}/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            {/* </div> */}
        </>
    );
}

export default Admin_View_Package;