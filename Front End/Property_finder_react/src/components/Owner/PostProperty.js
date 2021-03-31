import React, { Component } from 'react'
import PropertyService from '../../services/PropertyService';
import './Owner.css';
export default class PostProperty extends Component {


    constructor(props) {
        super(props);

        this.state = {
            property: {
                propertyName: "",
                price: "",
                propertyType: "",
                cityName: "",
                // ownerId: "",
                //  status: "",
                propertydesc: "",
                propertyAddress: "",
                propertyPincode: "",
                ownerChoice: "",
                sqft: "",
                contactNo:"",
            // ownerId: window.localStorage.getItem("ownerId")
            },
           //ownerId: window.localStorage.getItem("ownerId")
            image: "",
            successful: false,
            message: ""

        };
        this.savePostProperty = this.savePostProperty.bind(this);
    }
    onChange = e => {
        const property = { ...this.state.property }
        property[e.target.name] = e.target.value;
        this.setState({ property })
    }

    onImageChange = e => {
        this.setState({ image: e.target.files[0] });
    }

    componentDidMount() {
    // const owner = (window.localStorage.getItem("owner"));

       // console.log("ownerId="+this.state.property.ownerId)
    //     let property = { ...this.state.property };
    //    property.owner = owner

    //    this.setState({ property })
    }
    savePostProperty = (e) => {
        e.preventDefault();
        console.log(this.state.property);
        //this.state.ownerId,
        PropertyService.registerPropertyDetails(this.state.property, this.state.image);
       alert("Property Registered Successfully");
        window.location="/Ownerpage";
        //
    }


    render() {
        return (
            <div className="post-property">
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"> Post Property Details  </h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Property Name:</label>
                                        <input placeholder="Property Name" name="propertyName" className="form-control" value={this.state.propertyName} onChange={this.onChange} />
                                    </div>

                                    <div className="form-group">
                                        <label>Price :</label>
                                        <input placeholder="Price" name="price" className="form-control" value={this.state.price} onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Property Type:</label>
                                        <input style={{textTransform:'uppercase'}} type="text" placeholder="Property type" name="propertyType" className="form-control" value={this.state.propertyType} onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>city:</label>
                                        {/* <select name="dropdown">
                                            <option value="pune" name="cityName" onChange={this.onChange}  selected>Pune</option>
                                            <option value="mumbai" name="cityName" onChange={this.onChange}>Mumbai</option>
                                            <option value="delhi" name="cityName" onChange={this.onChange}>Delhi</option>
                                        </select> */}
                                       <input style={{textTransform:'uppercase'}} type="text"  placeholder="City" name="cityName" className="form-control" value={this.state.cityName} onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Description:</label>
                                        <input type="text" placeholder="Description" name="propertydesc" className="form-control" value={this.state.propertydesc} onChange={this.onChange} />
                                    </div>

                                    <div className="form-group">
                                        <label>Address:</label>
                                        <input type="text" placeholder="Address" name="propertyAddress" className="form-control" value={this.state.propertyAddress} onChange={this.onChange} />
                                    </div>

                                    <div className="form-group">
                                        <label>Image:</label>

                                        <td><input type="file" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" name="image"
                                            onChange={this.onImageChange} /></td>
                                    </div>

                                    <div className="form-group">
                                        <label>Pincode:</label>
                                        <input type="number" placeholder="Pincode" name="propertyPincode" className="form-control" value={this.state.propertyPincode} onChange={this.onChange} />
                                    </div>

                                    <div className="form-group">
                                        <label>choice(RENT/SELL):</label>
                                        <input style={{textTransform:'uppercase'}} type="text" placeholder="Choice" name="ownerChoice" className="form-control" value={this.state.ownerChoice} onChange={this.onChange} />
                                    </div>

                                    <div className="form-group">
                                        <label>Floor Area(Sq.ft.):</label>
                                        <input type="number" placeholder="Area" name="sqft" className="form-control" value={this.state.sqft} onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Contact Number:</label>
                                        <input type="number" placeholder="Contact Number" name="contactNo" className="form-control" value={this.state.contactNo} onChange={this.onChange} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.savePostProperty}>Save</button>
                                    <button className="btn btn-danger" style={{ marginLeft: "10px" }}>cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}





