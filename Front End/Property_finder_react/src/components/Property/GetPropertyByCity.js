import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import PropertyService from '../../services/PropertyService';
export default class GetPropertyByCity extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cityname:this.props.match.params.cityname,
            ProeprtyDetails: []
        }
        // this.deleteOwnerById=this.deleteOwnerById.bind(this);
    }
    // deleteOwnerById(id){
    //     PropertyService.deleteOwnerById(id).then((res) =>{
    //       this.setState({Owner: this.state.Owner.filter(Owners => Owners.id !== id)});  
    //     });
    //   }
    componentDidMount() {
        PropertyService.getPropertydetailsByCity(this.state.cityname).then((response) => {
            console.log(response.data);
            this.setState({ ProeprtyDetails: response.data })
        });
    }
    render() {
        return (
            <div>
               
                <Table size="sm">
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
                    <hr/>
                    <br/>
                    <tbody>
                        {
                            this.state.ProeprtyDetails.map(
                                PropertyServic =>
                                <tr key = {PropertyServic.id} >
                                   
                                <td><img  src={`http://localhost:8080/property_details/images/${PropertyServic.id}`}></img></td>
                                <td> { PropertyServic.propertyName } </td>
                                <td> { PropertyServic.price } </td>
                                <td> { PropertyServic.propertyAddress } </td>
                                <td> { PropertyServic.contactNo } </td>
                                <td> { PropertyServic.propertyPincode } </td>
                                <td> { PropertyServic.sqft } </td>
                                <td> { PropertyServic.propertydesc } </td>
                                <td> { PropertyServic.propertyType } </td>
                                <td> { PropertyServic.ownerChoice } </td>
                            </tr>)

                        }

                    </tbody>
                </Table>
              
            </div>
        )
    }
}


