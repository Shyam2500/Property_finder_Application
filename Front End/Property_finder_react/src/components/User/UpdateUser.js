import React, { Component } from 'react'
import UserService from '../../services/UserService';

 class UpdateUserdetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        id: this.props.match.params.id,
        userName: "",
        mob: "",
        email: "",
        password: "",
        
        }
 
        this.updateUserById = this.updateUserById.bind(this);
    }
    
    componentDidMount(){
        UserService.updateUserById(this.state.id).then( (res) =>{
            let user =res.data;
            this.setState({
                userName:user.userName,
                mob:user.mob,
                email:user.email,
                password:user.password,
              
                
            });
        });
    }

    updateUserById = (e) => {
            e.preventDefault();
            let user = {userName: this.state.userName, mob: this.state.mob, email: this.state.email, password: this.state.password};
             console.log('user => ' + JSON.stringify(user));
         
             UserService.updateUserById(user,this.state.id).then( (res) => {
                 this.props.history.push('/update');
             });
           
 
    }
 
    onChange = (e) =>
         this.setState({ [e.target.name]: e.target.value });
 
         cancel(){
             this.props.history.push('/update');
         }
    
     render() {
         return (
             <div>
                
                 <div className="container">
                     <div className="row">
                         <div className="card col-md-6 offset-md-3 offset-md-3">
                             <h3 className="text-center">Update User Details</h3>
                             <div className="card-body">
                                 <form>
                 <div className="form-group">
                     <label>User Name:</label>
                     <input placeholder="Owner Name" name="ownerName" className="form-control" value={this.state.ownerName} onChange={this.onChange}/>
                 </div>
 
                 <div className="form-group">
                     <label>Mobile Number:</label>
                     <input type="number" placeholder="Mobile Number" name="mob" className="form-control" value={this.state.mob} onChange={this.onChange}/>
                 </div>
 
                 <div className="form-group">
                     <label>Email Address:</label>
                     <input type="email" placeholder=" Email Address" name="email" className="form-control" value={this.state.email} onChange={this.onChange}/>
                 </div>
 
                 <div className="form-group">
                     <label>Password:</label>
                     <input type="text" placeholder="Password" name="password" className="form-control" value={this.state.password} onChange={this.onChange}/>
                 </div>
 
                 
                 <button className="btn btn-success" onClick={this.updateUserById}>Save</button>
                 <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>cancel</button>
                                 </form>
                             </div>
                         </div>
                     </div>
                  </div>
             </div>
         )
     }
 }

 export default UpdateUserdetails;
