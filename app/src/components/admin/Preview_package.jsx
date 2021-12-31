import {useParams} from "react-router-dom";
import {React} from 'react';
import useFetch from "./useFetch";

function Preview_package(){
    const {id} = useParams();
    const { data: packages, error } = useFetch('http://localhost:8000/packages' + id);

    return(
        <>
            {packages && (
                    <div className="container mt-5">
                        {error && <div>{error}</div>}          
                        <div className="row">
                            <div className="col-md-6">
                                <p>{packages.name}</p>
                            </div>
                            <div className="col-md-6">
                                <h1></h1>
                            </div>
                        </div>
                    </div>
            )}
        </>    
    );
}

export default Preview_package;