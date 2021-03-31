import React, { useState, useEffect } from "react";
import { Form, FormGroup } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from 'axios';
//import User_url from "../Service/Userurl";
import { Input } from "reactstrap";

const Registrationuser = () => {
    useEffect(() => {
        document.title = "User Registration"
    }, [])

    const [user, setuser] = useState({});
    //form handle function 
    const handleForm = (e) => {
        console.log(user);
        RegisterUserDetails(user);
        e.preventDefault();
    }

    //creating  function to post data on Server
    const RegisterUserDetails = (data) => {
        axios.post(`http://localhost:8080/user/register`, data).then(
            (response) => {
                //success
                console.log(response);
                console.log("Great Success");
                alert("User Registered Successfully");
                window.location="/userlogin";
            }
            , (error) => {
                //for error
                console.log(error);
            })
}

    return (

        < ><br/>
         <div className="card col-md-6 offset-md-3 offset-md-3 ">
            <h1 className="text-center"> User Registration </h1>
            <Form className="text-md-center " onSubmit={handleForm}>
                <FormGroup>
                    <label for="userName">User Name</label>
                    <Input type="text"
                        placeholder="Enter your Name"
                        name="userNmae"
                        id="userName"
                        onChange={(e) => {
                            setuser({ ...user, userName: e.target.value })
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="email">Email</label>
                    <Input type="email"
                        placeholder="Enter your email"
                        name="userEmail"
                        id="userEmail"
                        onChange={(e) => {
                            setuser({ ...user, email: e.target.value })
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="password">Password</label>
                    <Input type="password"
                        placeholder="Password"
                        name="userPassword"
                        id="userPasswoed"
                        onChange={(e) => {
                            setuser({ ...user, password: e.target.value })
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="mob">Moblie</label>
                    <Input type="text"
                        placeholder="Enter your Mobile"
                        name="userMobile"
                        id="userMobile"
                        onChange={(e) => {
                            setuser({ ...user, mob: e.target.value })
                        }}
                    />
                </FormGroup>
                <button className="btn btn-primary" type="submit" color="success">Register</button>
                <button className="btn btn-danger" type="reset" color="dark  ml-4" >Clear</button>
            </Form>
            </div>
        </>
    )
};
export default Registrationuser;