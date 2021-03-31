import React, { Component } from 'react'
import {  Dropdown, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'


export default class Navbar extends Component {
  constructor(props){
    super(props)
    this.state={
      username:null
    }
  }
  componentDidMount(){
    if(localStorage.getItem('user')!=undefined)
    this.setState({
      username:JSON.parse(localStorage.getItem('user'))
    })
  }
  logout(){
    localStorage.removeItem('user')
    window.location='/'
  }
  render() {
  return (
    <div>
    <nav className="navbar navbar-fixed-top navbar-expand-lg  navbar-light badge-warning w-responsive">
      <div className="container-fluid">

        <a className="navbar-brand pull-left font-weight-bold font-italic "><Link to="/">Property Point</Link> </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/"><NavLink to="/" exact activeStyle={{ color: 'black' }} activeClassName="selected">Home</NavLink></a>
            </li>
            <li>
              <a className="nav-link active card-text" aria-current="page" href="#"><NavLink to="/about" exact activeStyle={{ color: 'black' }} activeClassName="selected">About Us</NavLink>
              </a>
            </li>
            <li>
              <a className="nav-link active card-text" aria-current="page" href="#"><NavLink to="/contact" exact activeStyle={{ color: 'black' }} activeClassName="selected">Contact Us</NavLink>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/search"><NavLink to="/search" exact activeStyle={{ color: 'black' }} activeClassName="selected">Search Property</NavLink></a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/login" ><NavLink to="/login" exact activeStyle={{ color: 'black' }} activeClassName="selected">Login</NavLink></a>
            </li> */}
           
            {/* <li>
              <a className="nav-link active card-text" aria-current="page" href="/signup"><NavLink to="/feedback" exact activeStyle={{ color: 'black' }} activeClassName="selected">Feedback</NavLink>
              </a>
            </li> */}
            <li>
              <a className="nav-link active card-text" aria-current="page" href="#"><NavLink to="/ownerlogin" exact activeStyle={{ color: 'black' }} activeClassName="selected">Post Property</NavLink>
              </a>
            </li>
            <li >
            <Dropdown id={`dropdown-button`}>
                                    <Dropdown.Toggle variant="" id="dropdown-basic ">
                                        Category
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="/getbyrent">Rent</Dropdown.Item>
                                        <Dropdown.Item href="/getbysell">Sell</Dropdown.Item>

                                    </Dropdown.Menu>
                                </Dropdown>
            </li>
            <li>
              <Dropdown >
                <Dropdown.Toggle className="card" variant="" id="dropdown-basic" className="nav-link active " aria-current="page">
                  Login
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item ><Link to="/userlogin">User</Link></Dropdown.Item>
                  <NavDropdown.Item ><Link to="/ownerlogin">Owner</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link to="/adminlogin">Admin</Link></NavDropdown.Item>
                 
                </Dropdown.Menu>
              </Dropdown>
            </li>
          
            {/* <li className="nav-item">
<a> <Button id="button" variant="danger" ><Link to="/logout" onClick={this.logout}> Logout</Link></Button></a>
            </li> */}
          </ul>

        </div>
      </div>
    </nav>
    </div>
  )
}

}



//             <Navbar bg="light" expand="lg">
//   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//   <Navbar.Collapse id="basic-navbar-nav">
//     <Nav className="mr-auto">
//       <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#link">Link</Nav.Link>
//       <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//       </NavDropdown>
//     </Nav>
//     <Form inline>
//       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//       <Button variant="outline-success">Search</Button>
//     </Form>
//   </Navbar.Collapse>
// </Navbar>