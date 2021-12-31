import "./admin_edit_packages.css";

function AdminEditPackages(){
    return(
        <>
            <div className="container mt-5">
                <h3 className="text-center">Edit Package</h3>
                <div className="row">
                    <div className="card">
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Image</label>
                                    <br />
                                    <input type="file" class="form-control-file"/>
                                </div>
                                <div className="form-group">
                                    <label for="pd">Package Details</label>
                                    <textarea class="form-control" id="pd" rows="1"></textarea>
                                </div>
                                <div className="form-group">
                                    <label for="price">Price</label>
                                    <input type="text" id="price" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label for="days">No. of Days</label>
                                    <input type="text" id="days" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label for="nights">No of Nights</label>
                                    <input type="text" id="nights" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label for="status">Status</label>
                                    <select class="form-control" id="status">
                                        <option>Drafts</option>
                                        <option>Publish</option>
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

export default AdminEditPackages;