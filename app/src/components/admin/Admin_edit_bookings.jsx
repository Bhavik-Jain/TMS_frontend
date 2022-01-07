import Sidenav from "./Sidenav";
import "./styles/admin_edit_packages.css";

function Admin_edit_bookings(){
    return(
        <>
            <Sidenav />
            <div className="container mt-5">
                <h3 className="text-center">Edit Bookings</h3>
                <div className="row">
                    <div className="card">
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label for="book_id">Booking Id</label>
                                    <input type="text" id="book_id" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label for="cust_name">Customer Name</label>
                                    <input type="text" id="cust_name" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label for="pack_name">Package Name</label>
                                    <input type="text" id="pack_name" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label for="date">Date</label>
                                    <input type="text" id="date" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label for="status">Status</label>
                                    <select class="form-control" id="status">
                                        <option>Pending</option>
                                        <option>Approve</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="button" className="btn btn-primary mt-2" value="Submit" />
                                </div>
                                
                            </form>
                        </div>
                        <div className="card-footer">
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Admin_edit_bookings;