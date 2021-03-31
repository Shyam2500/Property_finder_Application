import React, { Component } from 'react'
import { Table, Button } from 'react-bootstrap';
import PropertyService from "../../services/PropertyService";
import { Link } from 'react-router-dom';

import './Admin.css';


export default class GetProperties extends Component {
    constructor(props) {
        super(props)

        this.state = {
            PropertyDetails: []
        }
        this.deletePropertyDetailsById = this.deletePropertyDetailsById.bind(this)
        //this.getAllPropertyDetails=this.getAllPropertyDetails.bind(this);
    }
    deletePropertyDetailsById(id) {
        PropertyService.deletePropertyDetailsById(id).then((res) => {
            this.setState({ PropertyDetails: this.state.PropertyDetails.filter(Users => Users.id !== id) });
        });
    }
    componentDidMount() {
        PropertyService.getAllPropertyDetails().then((response) => {
            this.setState({ PropertyDetails: response.data })
        });
    }

    render() {
        return (
            <div className="get-property bg-midnight">
                <Table size="sm">
                    <thead className="badge-primary">
                        <tr>
                            <td>Property Image</td>
                            <td>Property Name</td>
                            <td>Property Price</td>
                            <td>Property Address</td>
                            <td>Contact No. </td>
                            <td>Pincode </td>
                            <td>Area(sq.ft) </td>
                            <td>Description</td>
                            <td>Type</td>
                            <td>Rent/Sell</td>
                            <td><Button variant="warning" ><Link to="/AdminPage" >Menu</Link></Button></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.PropertyDetails.map(
                                PropertyServic =>
                                    <tr key={PropertyServic.id}>
                                        <td><img src={`http://localhost:8080/property_details/images/${PropertyServic.id}`}></img></td>
                                        <td> {PropertyServic.propertyName} </td>
                                        <td> {PropertyServic.price} </td>
                                        <td> {PropertyServic.propertyAddress} </td>
                                        <td> {PropertyServic.contactNo} </td>
                                        <td> {PropertyServic.propertyPincode} </td>
                                        <td> {PropertyServic.sqft} </td>
                                        <td> {PropertyServic.propertydesc} </td>
                                        <td> {PropertyServic.propertyType} </td>
                                        <td> {PropertyServic.ownerChoice} </td>
                                        <td>
                                            <button style={{ marginLeft: "10px" }} onClick={() => this.deletePropertyDetailsById(PropertyServic.id)} className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>

                            )


                        }

                    </tbody>
                </Table>
            </div>
        )
    }
}

