import React, { Component } from 'react'
import OwnerService from '../../services/OwnerService';

 class UpdateOwnerdetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        id: this.props.match.params.id,
        ownerName: "",
        mob: "",
        email: "",
        password: "",
        address:"",
        }
 
        this.updateOwnerById = this.updateOwnerById.bind(this);
    }
    
    componentDidMount(){
        OwnerService.getOwnerById(this.state.id).then( (res) =>{
            let Owner =res.data;
            this.setState({
                ownerName:Owner.ownerName,
                mob:Owner.mob,
                email:Owner.email,
                password:Owner.password,
                address:Owner.address,
                
            });
        });
    }

    updateOwnerById = (e) => {
            e.preventDefault();
            let Owner = {ownerName: this.state.ownerName, mob: this.state.mob, email: this.state.email, password: this.state.password, address: this.state.address};
             console.log('Owner => ' + JSON.stringify(Owner));
         
             OwnerService.updateOwnerById(Owner,this.state.id).then( (res) => {
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
                             <h3 className="text-center">Update Owner Details</h3>
                             <div className="card-body">
                                 <form>
                 <div className="form-group">
                     <label>Owner Name:</label>
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
 
                 <div className="form-group">
                     <label>Address:</label>
                     <input type="text" placeholder="Address" name="address" className="form-control" value={this.state.address} onChange={this.onChange}/>
                 </div>
 
                 <button className="btn btn-success" onClick={this.updateOwnerById}>Save</button>
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

 export default UpdateOwnerdetails;
