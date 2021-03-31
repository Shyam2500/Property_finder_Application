import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import PropertyService from "../../services/PropertyService";


export default class GetAllProperty extends Component {
    constructor(props) {
        super(props)

        this.state = {
            PropertyDetails:[]
        }
       //this.getAllPropertyDetails=this.getAllPropertyDetails.bind(this);
    }
        componentDidMount(){
            PropertyService.getAllPropertyDetails().then((response) => {
                this.setState({ PropertyDetails :response.data})
            });
        }
        
    render() {
        return (
            <div>
                <Table>
                    <thead className="badge-primary">
                        <tr>
                           <td>Property Image</td>
                            <td>Property Name</td>
                            <td>Property Price</td>
                            <td>Property Address</td>
                            <td>Area </td>
                            <td>Pincode </td>
                            <td>Area(sq.ft) </td>                       
                            <td>Description</td>
                            <td>Type</td>
                            <td>Rent/Sell</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.PropertyDetails.map(
                                PropertyServic =>
                                <tr key = {PropertyServic.id}>
                                <td><img  src={`http://localhost:8080/property_details/images/${PropertyServic.id}`}></img></td>
                                <td> { PropertyServic.propertyName } </td>
                                <td> { PropertyServic.price } </td>
                                <td> { PropertyServic.propertyAddress } </td>
                                <td> { PropertyServic.areaName } </td>
                                <td> { PropertyServic.propertyPincode } </td>
                                <td> { PropertyServic.sqft } </td>
                                <td> { PropertyServic.propertydesc } </td>
                                <td> { PropertyServic.propertyType } </td>
                                <td> { PropertyServic.ownerChoice } </td>
                            </tr>

                            )
                           

                        }
                      
                    </tbody>
                </Table>
            </div>
        )
    }
}

