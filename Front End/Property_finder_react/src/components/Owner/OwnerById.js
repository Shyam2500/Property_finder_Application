import React, { Component } from 'react'
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OwnerService from '../../services/OwnerService';
export default class GetOwner extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Owner: []
        }
        this.getOwnerById=this.getOwnerById.bind(this);
    }
    getOwnerById(id){
        OwnerService.getOwnerById(id).then((res) =>{
          this.setState({Owner: this.state.Owner.filter(Owners => Owners.id !== id)});  
        });
      }
    componentDidMount() {
        OwnerService.getOwnerById().then((response) => {
            this.setState({ Owner: response.data })
        });
    }
    render() {
        return (
            <div className="owner-page">
                 {/* <Button variant="outline-warning" id="button"> <Link to="/AdminPage"> Menu</Link></Button> */}
                <Table striped bordered hover variant="">
                    <thead>
                        <tr className='bg-secondary'>
                            <td> Name</td>                          
                            <td> Mobile Number</td>
                            <td>Email ID</td>
                            <td>Address</td>
                        </tr>
                    </thead>
                   
                    <tbody>
                        {
                            this.state.Owner.map(
                                Owners =>
                                    <tr key={Owners.id}>
                                        <td> {Owners.ownerName} </td>
                                        <td> {Owners.mob} </td>
                                        <td> {Owners.email} </td>                                       
                                        <td> {Owners.address} </td>
                                        <td>
                                        <button style={{marginLeft:"10px"}} onClick={ () => this.deleteOwnerById(Owners.id)} className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}
