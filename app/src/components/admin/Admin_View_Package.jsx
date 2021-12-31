// import Sidenav from './Sidenav';
import {React, useState, useEffect} from 'react';
import { AiFillEye, AiTwotoneDelete } from 'react-icons/ai';
import {FiEdit} from 'react-icons/fi';
import {MdOutlineNightlightRound} from 'react-icons/md';
import { WiDaySunny } from 'react-icons/wi';
import "./admin_view_packages.css";

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
            {/* <Sidenav /> */}
            <div className="container mt-5">
                <div className='head'>
                        <h3>ALL PACKAGES</h3>
                        <input type="button" value="Add" className='btn btn-primary'/>
                </div>
                <hr />
                <table className='table'>
                    <tbody>
                        {packages.map((packages) => (
                            <tr>
                                <td>
                                    <h3>{packages.name}</h3>
                                    <pre>
                                        <p> <WiDaySunny /> {packages.days} <MdOutlineNightlightRound /> {packages.days}</p>
                                    </pre>
                                </td>
                                <td>
                                    <p>₹ {packages.price}</p>
                                    <p>Status: {packages.status}</p>
                                </td>
                                <td>
                                    <FiEdit />
                                    <br></br>
                                    <AiFillEye />
                                    <br></br>
                                    <AiTwotoneDelete />
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