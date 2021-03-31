import React, { useEffect, useState } from 'react'
import './City.css';
import axios from "axios";
import PropertyBycity from './PropertyByCity';
import {  Row } from 'react-bootstrap';
const GetBySell = () => {

    const [users, setusers] = useState([])

    const getPropertydetailsByCity = () => {
        axios.get(`http://localhost:8080/property_details/detailsByOwnerChoice/SELL`).then(
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
            <div>Properties For Sale</div>
            <Row>            
            <div className="city justify-content-center my-2" >             
                {
                    users.length>0 ? users.map((item)=> <> <PropertyBycity property={item}/></>) :"No Property Avilable"
                }       
                </div>
               
                </Row>
                <br/><br/>
        </>
    )
}
export default GetBySell;
