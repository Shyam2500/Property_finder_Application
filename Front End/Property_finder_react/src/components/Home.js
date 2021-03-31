import React from "react";
import { Jumbotron,Container,Button } from "reactstrap";
import Slide from "./Carousel";
import Card from './Card';
import { Link, NavLink } from "react-router-dom";
function Home() {
    return (
        <div >
             <Slide/>
             <Jumbotron className="text-center">
               
             </Jumbotron>
             <Card/>
        </div>
    )
}

export default Home;