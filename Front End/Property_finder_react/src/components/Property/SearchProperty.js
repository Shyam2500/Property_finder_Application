import React, { Component } from 'react';
import PropertyService from "../../services/PropertyService";
import { Table, Button, Form, FormControl } from "react-bootstrap";
export default class SearchProperty extends Component {

    constructor(props) {
        super(props);
        this.state = {
            city: null,
            properties: []
        }

        this.search = this.search.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    search() {
        if (this.state.city !== null) {
            console.log("im here")
            PropertyService.getPropertydetailsByCityName(this.state.city).then(res => {
                console.log(res.data);
                this.setState({ properties: res.data })
            })
        } else {
            window.location.reload();
        }
    }
    handleSearch(t) {
        this.setState({ city: t.target.value })
    }

    render() {
        return (
            <>
                <div className="bg-midnight">
                    <div className="container">
                        <div className="card col-md-12 badge-info">

                            <h2>Search Property Based On</h2>


                        </div><br />

                        {/* <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Location
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu >
                                        <Dropdown.Item href="#/action-1">Kharadi</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Chandan Nagar</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Chandan Nagar</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Swargate</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Viman Nagar</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Kalyani Nagar <Badge variant="danger">New</Badge></Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Yerwada <Badge variant="danger">New</Badge></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown> */}
                        <Form inline>
                            <FormControl type="text" value={this.state.city} onChange={this.handleSearch} placeholder="Search" className="mr-sm-2 " />
                            <Button variant="outline-success" onClick={this.search}>Search</Button>
                        </Form>
                        <br />
                        <Table >
                            <thead >
                                <tr className="bg-warning">

                                    <td>Property Image</td>
                                    <td> Property Name</td>
                                    <td> Price</td>
                                    <td>Address</td>
                                    <td>Contact Number</td>
                                    <td>Pincode </td>
                                    <td>Area Sq.Ft. </td>
                                    <td>Description </td>
                                    <td>Type </td>
                                    <td>RENT/SELL </td>
                                </tr>
                            </thead>
                            <hr />
                            <br />
                            <tbody>
                                {
                                    this.state.properties.map(
                                        PropertyServic =>
                                            <tr key={PropertyServic.id} >

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
                                            </tr>)

                                }

                            </tbody>
                        </Table>


                    </div>

                </div>
            </>
        )
    }
}
