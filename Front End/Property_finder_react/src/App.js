import React from 'react';
import './App.css';
import Home from "./components/Home"
import Admin from "./components/Admin/Adminlogin";
import Navbar from './layout/Navbar';
import { Route, Switch } from 'react-router-dom';
import UserLogin from "./components/User/Userlogin";
import OwnerLogin from './components/Owner/Ownerlogin';
import SearchProperty from './components/Property/SearchProperty';
import GetAllProperty from "./components/Property/GetAllProperty";
import PostProperty from './components/Owner/PostProperty';
import ShowOwners from './components/Admin/ShowOwners';
import ShowUsers from './components/Admin/ShowUsers';
import AdminPage from './components/Admin/AdminPage';
import UpdateOwnerdetails from './components/Owner/UpdateOwner';
import UpdateUserdetails from './components/User/UpdateUser';
import NotFound from './components/NotFound';
import OwnerDash from './components/Owner/OwnerDash';
import getPropertydetailsByCitym from './components/Property/getPropertyBycity1';
import GetPropertyBycityPune from './components/Property/PropertyByCityPune'; 
import Registrationowner from "./components/Owner/OwnerRgistration";
import Registrationuser from "./components/User/UserRegistration";
import GetPropertyByCity from "./components/Property/GetPropertyByCity"
import GetProperties from "./components/Admin/GetProperties";
import GetByRent from "./components/Property/GetByRent";
import GetBySell from "./components/Property/GetBySell";
import GetOwner from "./components/Owner/OwnerById";
import Contact from "./components/Contact";

import About from "./components/About";
function App() {

  return (
    <div className="App">
      <Navbar />

      <Switch>

        <Route exact path='/' component={Home} />

        <Route exact path='/search' component={SearchProperty} />
        {/* <Route exact path='/login' component={Login} /> */}
        <Route exact path='/userlogin' component={UserLogin} />
        <Route exact path='/ownerlogin' component={OwnerLogin} />
        <Route exact path='/adminlogin' component={Admin} />
        <Route exact path='/showallproperty' component={GetAllProperty} />
        <Route exact path='/postproperty' component={PostProperty} />
        <Route exact path='/AdminPage' component={AdminPage} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/about' component={About} />
        <Route exact path='/showowners' component={ShowOwners} />
        <Route exact path='/showusers' component={ShowUsers} />
        <Route exact path='/updateowner' component={UpdateOwnerdetails} />
        <Route exact path='/updateuser' component={UpdateUserdetails} />
        <Route exact path='/Ownerpage' component={OwnerDash} />
        <Route exact path='/getbycitymumbai' component={getPropertydetailsByCitym} />
        <Route exact path='/getbycitypune' component={GetPropertyBycityPune} />
        <Route exact path='/ownerregistration' component={Registrationowner} />
        <Route exact path='/userregistration' component={Registrationuser} />
        <Route exact path='/getbycity/:cityname' component={GetPropertyByCity} />
        <Route exact path='/getpropertyadmin' component={GetProperties} />
        <Route exact path='/getbyrent' component={GetByRent} />
        <Route exact path='/getbysell' component={GetBySell} />
        <Route exact path='/getownerbyid' component={GetOwner} />
      
        <Route component={NotFound} />
      </Switch>

    </div>
  );
}

export default App;
