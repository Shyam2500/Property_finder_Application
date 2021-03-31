import axios from 'axios';

const USER_API_URL ="http://localhost:8080/user";


class UserService {

getAllUsers(){
        return axios.get(USER_API_URL + '/show_all');
}
getUserById(id){
    return axios.get(USER_API_URL + '/' + id)
}
deleteUserById(id){
    return axios.delete(USER_API_URL+ '/delete/'+ id)
}
updateUserById(id){
    return axios.put(USER_API_URL+ '/update/'+ id)
}
}
export default new UserService();