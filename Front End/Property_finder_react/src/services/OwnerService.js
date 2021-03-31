import axios from 'axios';

const OWNER_API_URL ="http://localhost:8080/owner";


class OwnerService {

getAllOwners(){
        return axios.get( OWNER_API_URL + '/show_all');
}

deleteOwnerById(id){
    return axios.delete(OWNER_API_URL+ '/delete/'+ id)
}

getOwnerById(id){
    return axios.put(OWNER_API_URL+ '/'+ id)
}
updateOwnerById(id){
    return axios.put(OWNER_API_URL+ '/update'+ id)
}

}
export default new OwnerService();