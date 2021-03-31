import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';
const Login = () => {

    return (
        <div >
            <h2>Login as</h2><br/>
            <button type="button" class="btn btn-warning button-big"><Link to="/userlogin">User</Link></button>
             <br />
             <br />
            <button type="button" class="btn btn-warning btn-sm"><Link to="/ownerlogin">Owner</Link></button>
             <br />
             <br />
            <button type="button" class="btn badge-warning btn-sm"><Link to="/adminlogin">Admin</Link></button>
            <h3>Not Registered Yet?</h3>
            <button type="button" class="btn btn-outline-dark btn-sm"><Link to="/register">Register Here</Link></button>
<div>

            <Card className="bg-dark text-white">
                    <Card.Img src="holder.js/100px270" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
        </div>
        </div>
    )
}

export default Login;


