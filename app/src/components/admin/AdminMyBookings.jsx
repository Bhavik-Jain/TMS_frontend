import {React, useState, useEffect} from 'react';
import {FiEdit} from 'react-icons/fi';
import "./admin_my_bookings.css";

function Admin_View_Package(){
    const [bookings, setbookings] = useState([])

    useEffect(() => {
           fetch('http://localhost:8000/bookings')
           .then(res => {
               return res.json();
           })  
           .then(data => {
               setbookings(data);
           })
    }, []);

    return(
        <>
            {/* <Sidenav /> */}
            <div className="container mt-5">
                <h3 className='mt-3'>All Bookings</h3>
                <hr />
                <table className='table'>
                    <tbody>
                        <tr>
                            <th>Booking Id</th>
                            <th>Customer Name</th>
                            <th>Package</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                        {bookings.map((bookings) => (
                            <tr>
                                <td>
                                    {bookings.id}
                                </td>
                                <td>
                                    {bookings.cust_name}
                                </td>
                                <td>
                                    {bookings.pack_name}
                                </td>
                                <td>
                                    {bookings.date}
                                </td>
                                <td>
                                    {bookings.status}
                                </td>
                                <td>
                                    <FiEdit />
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