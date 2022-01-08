import {FiEdit} from 'react-icons/fi';
import "./styles/admin_my_bookings.css";
import useFetch from './useFetch';
import {Link} from 'react-router-dom';
import Sidenav from './Sidenav';
function Admin_View_Package(){
    const { data: bookings, error} = useFetch('http://127.0.0.1:8000/api/bookings/');
    return(
        <>
            <Sidenav />
            <div className="container mt-5">
                {bookings && <h3 className='mt-3'>All Bookings</h3>}
                <hr />
                <table className='table'>
                    <tbody>
                        <tr>
                            <th>Booking Id</th>
                            <th>Customer Id</th>
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
                                    {bookings.user}
                                </td>
                                <td>
                                    {bookings.package}
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