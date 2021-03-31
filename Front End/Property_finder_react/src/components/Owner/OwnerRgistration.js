import React, { useState, useEffect } from "react";
import { Form, FormGroup } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from 'axios';
import { Input } from "reactstrap";

const Registrationowner = () => {
    useEffect(() => {
        document.title = "Owner Registration"
    }, [])

    const [owner, setowner] = useState({});
    //form handle function 
    const handleForm = (e) => {
        console.log(owner);
        RegisterOwnerDetails(owner);
        e.preventDefault();
    }

    //creating  function to post data on Server
    const RegisterOwnerDetails = (data) => {
        axios.post(`http://localhost:8080/owner/register`, data).then(
            (response) => {
                //success
                console.log(response);
                toast.success("user reg successfully")
                console.log("Great Success");
                // setowner({})
                // alert("registered successfully");
                alert("Owner Registered Successfully");
                window.location = "/ownerlogin";

            }
            , (error) => {
                //for error
                console.log(error);
                toast.error("somthing went wrong")
            })
    }

    return (

        <><br />
            <div className="card col-md-6 offset-md-3 offset-md-3">

                <h1 className="text-center"> Owner Registration </h1>
                <br />
                <Form className="text-md-center " onSubmit={handleForm}>
                    <div className="form-group">

                        <FormGroup>
                            <label for="ownerName">User Name</label>
                            <Input type="text"
                                placeholder="Enter your Name"
                                name="ownerNmae"
                                id="ownerName"
                                onChange={(e) => {
                                    setowner({ ...owner, ownerName: e.target.value })
                                }}
                            />
                        </FormGroup>
                    </div>

                    <div className="form-group">
                        <FormGroup>
                            <label for="email">Email</label>
                            <Input type="email"
                                placeholder="Enter your email"
                                name="ownerEmail"
                                id="ownerEmail"
                                onChange={(e) => {
                                    setowner({ ...owner, email: e.target.value })
                                }}
                            />
                        </FormGroup>
                    </div>
                    <div className="form-group">
                        <FormGroup>
                            <label for="password">Password</label>
                            <Input type="password"
                                placeholder="Password"
                                name="ownerPassword"
                                id="ownerPassword"
                                onChange={(e) => {
                                    setowner({ ...owner, password: e.target.value })
                                }}
                            />
                        </FormGroup>
                    </div>
                    <div className="form-group">
                        <FormGroup>
                            <label for="mob">Moblie</label>
                            <Input type="text"
                                placeholder="Enter your Mobile"
                                name="ownerMobile"
                                id="ownerMobile"
                                onChange={(e) => {
                                    setowner({ ...owner, mob: e.target.value })
                                }}
                            />
                        </FormGroup>
                    </div>
                    <div className="form-group">
                        <FormGroup>
                            <label for="address">Address</label>
                            <Input type="text"
                                placeholder="Enter your Address"

                                id="address"
                                style={{ height: 150 }}
                                onChange={(e) => {
                                    setowner({ ...owner, address: e.target.value })
                                }}
                            />
                        </FormGroup>
                    </div>
                    <button className="btn btn-primary" type="submit" color="success">Register</button>
                    <button className="btn btn-danger" type="reset" color="dark  ml-4" >Clear</button>
                </Form>

            </div>
        </>
    )
};
export default Registrationowner;