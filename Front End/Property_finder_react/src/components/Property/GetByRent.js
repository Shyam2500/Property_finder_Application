import React, { useEffect, useState } from 'react'
import './City.css';
import axios from "axios";
import PropertyService from "../../services/PropertyService";
import PropertyBycity from './PropertyByCity';
import { Card, Col, Row } from 'react-bootstrap';
const GetByRent = () => {

    const [users, setusers] = useState([])

    const getPropertydetailsByCity = () => {
        axios.get(`http://localhost:8080/property_details/detailsByOwnerChoice/RENT`).then(
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
            <div><h2>Properties For Rent</h2></div>
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
export default GetByRent;
