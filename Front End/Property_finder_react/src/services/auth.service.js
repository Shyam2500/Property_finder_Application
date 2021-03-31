import axios from "axios";



class AuthService {
  login(email, password) {
    const fd=new FormData();
    fd.append('email',email);
    fd.append('password',password);
    
    return axios.post("http://localhost:8080/user/login" , fd) 
      .then(response => {
        if (response) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(userName,mob, email, password) {
    const fd=new FormData();
    fd.append('userName',userName);
    fd.append('mob',mob);
    fd.append('email',email);
    fd.append('password',password);

    return axios.post("http://localhost:8080/user/register", fd) 
    .then(response => {
       
           
      return response;
    });
  }

  ownerregister(ownerName,mob, email, password, address) {
    const fd2=new FormData();
    fd2.append('ownerName',ownerName);
    fd2.append('mob',mob);
    fd2.append('email',email);
    fd2.append('password',password);
    fd2.append('address',address);

    return axios.post("http://localhost:8080/owner/register", fd2) 
    .then(response => {
       
           
      return response;
    });
  }

  AdminLogin(email, password) {
    const fd1=new FormData();
    fd1.append('email',email);
    fd1.append('password',password);
    
    return axios.post("http://localhost:8080/admin/login",fd1)
      .then(response => {
       
            if (response) {
                localStorage.setItem("admin", JSON.stringify(response.data));
            }
        return response;
      });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }

  Ownerlogin(email, password) {
    const fd=new FormData();
    fd.append('email',email);
    fd.append('password',password);
    
    return axios.post("http://localhost:8080/owner/login" , fd) 
      .then(response => {
        if (response) {
         // console.log("owner"+JSON.stringify(response.data));
         let ownerId=response.data.id;
         console.log("ownerid="+JSON.stringify(ownerId))
          window.localStorage.setItem("ownerId",ownerId);
        }

        return response;
      });
  }

   
}

export default new AuthService();
