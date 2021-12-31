import {FiEdit} from 'react-icons/fi';
import "./styles/admin_my_bookings.css";
import useFetch from './useFetch';
import {Link} from 'react-router-dom';
function Admin_View_Package(){
    const { data: bookings, error} = useFetch('http://localhost:8000/bookings');
    return(
        <>
            <div className="container mt-5">
                {bookings && <h3 className='mt-3'>All Bookings</h3>}
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
                        {error && <div>{error}</div>}
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
                                    <Link to="/editbook"><FiEdit /></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Admin_View_Package;