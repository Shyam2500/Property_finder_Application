import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';


// function showowners() {
//     return <ShowOwners />
// }
export default class Menu extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={4}>
                            <ListGroup>
                                <ListGroupItem>Home</ListGroupItem>
                                <ListGroupItem><Link to="/showusers">Users</Link></ListGroupItem>
                                <ListGroupItem><Link to ="/showowners">Owners</Link> </ListGroupItem>
                                <ListGroupItem><Link to ="/getpropertyadmin">All Properties</Link> </ListGroupItem>
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

