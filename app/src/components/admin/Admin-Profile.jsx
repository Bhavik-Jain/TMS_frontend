import "./styles/admin_edit_packages.css";

function Admin_Profile(){
    return(
        <>
            <div className="container mt-5">
                <h3 className="text-center">Edit Profile</h3>
                <div className="row">
                    <div className="card edt_prof">
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" id="name" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label for="username">Username</label>
                                    <input type="text" id="username" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label for="phone">Phone</label>
                                    <input type="text" id="phone" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label for="dob">Birth Date</label>
                                    <input type="text" id="dob" className="form-control"/>
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

export default Admin_Profile;