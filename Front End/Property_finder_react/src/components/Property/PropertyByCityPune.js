import React, { useEffect, useState } from 'react'
import './City.css';
import axios from "axios";
import PropertyBycity from './PropertyByCityPuneCard';
import { Row } from 'react-bootstrap';
const GetPropertyBycityPune = () => {

    const [users, setusers] = useState([])
    const getPropertydetailsByCity = () => {
        axios.get(`http://localhost:8080/property_details/detailsByCity/pune`).then(
            (response) => {
                //success
                console.log(response);
                setusers(response.data);
            }
            , (error) => {
                //for error
                console.log(error);
            }
        );
    };
    useEffect(() => {
        getPropertydetailsByCity();
    }, []);

    return (
        <>
            <div>Properties in Pune</div>
            <Row>
                <div className="city justify-content-center my-2" >
                    {
                        users.length > 0 ? users.map((item) => <> <PropertyBycity user={item} /></>) : "No Property Available"
                    }
                </div>
            </Row>
            <br /><br />
        </>
    )
}
export default GetPropertyBycityPune;
