
import React from "react";
import { Card, ListGroup, ListGroupItem, Table } from "react-bootstrap";


const PropertyBycity = ({ property }) => {
  return (
    <>

      <Card style={{ width: '35rem' }} bg-variant="primary" varient={{ Badge: 'primary' }}>
        <Card.Img variant="top" src={`http://localhost:8080/property_details/images/${property.id}`} />
        <Card.Body>
          <Card.Title>{property.propertyName}</Card.Title>
          <Card.Text>
            Contact No:{property.contactNo}
            <p>Price:Rs. {property.price}</p>
            <p>Address: {property.propertyAddress}</p>
            <p>Pincode: {property.propertyPincode} </p>
            <p>City: {property.cityName} </p>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <Table>

            <ListGroupItem>{property.propertyType}</ListGroupItem>
            <ListGroupItem>For-{property.ownerChoice}</ListGroupItem>
            <ListGroupItem>Floor Area: {property.sqft} sq.ft.</ListGroupItem>
            <ListGroupItem>Description: {property.propertydesc}</ListGroupItem>
          </Table>
        </ListGroup>

      </Card>
    </>

  )
};
export default PropertyBycity;