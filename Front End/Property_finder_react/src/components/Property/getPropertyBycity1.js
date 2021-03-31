import React, { useEffect, useState } from 'react'
import './City.css';
import axios from "axios";
import PropertyBycity from './PropertyByCity';
import { Card, Col, Row } from 'react-bootstrap';
const GetPropertyBycity1 = () => {

    const [users, setusers] = useState([])

    const getPropertydetailsByCity = () => {
        axios.get(`http://localhost:8080/property_details/detailsByCity/mumbai`).then(
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
            <div className=""><h3>Properties in Mumbai</h3></div>
            <Row>
              
            <div className="city justify-content-center my-2" > 
            
                {
                    users.length>0 ? users.map((item)=> <> <PropertyBycity property={item}/></>) :"No Property Avilable"
              
                }    <br/>   
                </div>
               
                </Row>
                <br/><br/>
        </>
    )
}
export default GetPropertyBycity1;
