import React, { Component } from 'react'
import UserService from '../../services/UserService';

export default class GetUserById extends Component {
    constructor(props) {
        super(props)

        this.state = {
            User: []
        }
        this.getUserById=this.getUserById.bind(this)
    }
    deleteUserById(id){
        UserService.deleteUserById(id).then((res) =>{
          this.setState({User: this.state.User.filter(Users => Users.id !== id)});  
        });
      }
    updateUserById(id){
        UserService.updateUserById(id).then((res) =>{
          this.setState({User: this.state.User.filter(Users => Users.id !== id)});  
        });
      }

    componentDidMount() {
        UserService.getUserById().then((response) => {
            this.setState({ User: response.data })
        });
    }
    render() {
        return (
            <div>
                <div className="admin-page">
                <Button variant="outline-warning" id="button"> <Link to="/AdminPage"> Menu</Link></Button><br/>              
                <Table>                 
                    <thead>
                        <tr className='bg-secondary'>
                            <td>User Name</td>
                            <td> Mobile Number</td>
                            <td>Email ID</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.User.map(
                                Users =>
                                    <tr key={Users.id}>

                                        <td> {Users.userName} </td>
                                        <td> {Users.mob} </td>
                                        <td> {Users.email} </td>                                   
                                        <td>
                                        <button style={{marginLeft:"10px"}} onClick={ () => this.deleteUserById(Users.id)} className="btn btn-danger">Delete</button>
                                        </td>
                                        <td>
                                        <button style={{marginLeft:"10px"}} onClick={ () => this.updateUserById(Users.id)} className="btn btn-success">Update</button>
                                        </td>
                                    </tr>
                                     ) }
                    </tbody>
                </Table>
            </div> 
            </div>
        )
    }
}
