import userEvent from "@testing-library/user-event";
import React from "react";
import { Badge, Card, ListGroup, ListGroupItem, Table } from "react-bootstrap";


const PropertyBycity = ({ user }) => {
  return (
    <>
      <Card style={{ width: '20rem' }} bg-variant="primary" varient={{ Badge: 'primary' }}>
        {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
        <Card.Body>
          <Card.Title>{user.propertyName}</Card.Title>
          <Card.Text>

          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <Table>
            <ListGroupItem>Price:Rs. {user.price}</ListGroupItem>
            <ListGroupItem>Address: {user.propertyAddress}</ListGroupItem>
            <ListGroupItem>Pincode: {user.propertyPincode} </ListGroupItem>
            <ListGroupItem>{user.propertyType}</ListGroupItem>
            <ListGroupItem>{user.ownerChoice}</ListGroupItem>
            <ListGroupItem>Floor Area: {user.sqft} sq.ft.</ListGroupItem>
            <ListGroupItem>Description: {user.propertydesc}</ListGroupItem>
          </Table>
        </ListGroup>

      </Card>
    </>

  )
};
export default PropertyBycity;