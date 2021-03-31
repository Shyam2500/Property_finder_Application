import React from "react";
import { Card,CardBody,CardTitle,CardSubtitle,CardText,CardFooter,Button,Container } from "reactstrap";


const Property=(property)=> {
    return(
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{property.title}</CardSubtitle>
                <CardText>{property.description}</CardText>
                <Container >
                    <Button color="warning ">view Details</Button>
                    <Button color="danger ml-3">delete</Button>
                    
                </Container>
            </CardBody>
        </Card>
    )

}

export default Property;