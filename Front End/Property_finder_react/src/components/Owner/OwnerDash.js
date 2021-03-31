import React, { Component } from 'react'
import { Button, Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class OwnerDash extends Component {
    handleLogOut=()=>{
        window.localStorage.removeItem("owner");
        window.location.assign("/");
    }
    render() {
        return (
            <div className="owner-page">
                <Card className=" header my-2 badge-secondary  ">
                    <Card.Body>
                        <h1 className="  text-center my-1 ">Owner Dashboard</h1>
                        <Button id="button" className="badge-dark" variant="danger" ><Link to="/search"  onClick={this.handleLogOut}> Logout</Link></Button>
                    </Card.Body>

                </Card>
                  <Container>
                    <Row>
                        <Col md={4}>
                            <ListGroup>
                                
                                <ListGroupItem><Link to="/postproperty">Post Property</Link></ListGroupItem>
                                {/* <ListGroupItem><Link to="/getownerbyid">Profile</Link></ListGroupItem> */}
                                
                            </ListGroup>
                        </Col>
                        <Col md={8}>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
