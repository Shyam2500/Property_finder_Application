import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap';
import './Admin.css';
import Menu from './Menu';
import { Link } from 'react-router-dom';

export default class AdminPage extends Component {
    handleLogOut=()=>{
        window.localStorage.removeItem("admin");
        window.location.assign("/");
    }
    render() {
        return (
            <div className="admin-page">
                <Card className=" header my-2 badge-info  ">
                    <Card.Body>
                        <h1 className="  text-center my-1 "> Welcome to Admin Dashboard</h1>
                        <Button id="button" variant="danger" ><Link to="/logout" onClick={this.handleLogOut}> Logout</Link></Button>
                    </Card.Body>

                </Card>
                <Menu />
              
            </div>
        )
    }
}

