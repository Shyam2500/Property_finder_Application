import axios from 'axios';

const PROPERTY_DETAILS_API_URL = "http://localhost:8080/property_details";

class PropertyService {

    getAllPropertyDetails() {
        return axios.get(PROPERTY_DETAILS_API_URL + '/show_all');
    }

    registerPropertyDetails(property, image) {
        let data = new FormData();
        data.append("image", image);
        data.append("property", JSON.stringify(property));
        return axios.post(PROPERTY_DETAILS_API_URL + '/register/', data);
    }
    deletePropertyDetailsById(id) {
        return axios.delete(PROPERTY_DETAILS_API_URL + '/delete/' + id);
    }
    getPropertydetailsByCity(cityName) {
        return axios.get(PROPERTY_DETAILS_API_URL + `/detailsByCity/${cityName}`);
    }
    getPropertydetailsByCityName(cityName) {
        return axios.get(PROPERTY_DETAILS_API_URL + `/detailsByCity/`+ cityName);
    }
    getPropertydetailsByArea(areaName) {
        return axios.get(PROPERTY_DETAILS_API_URL + '/detailsByArea' + areaName);
    }
    getPropertyDetailsByPropertyType(propertyTypeName) {
        return axios.get(PROPERTY_DETAILS_API_URL + '/detailsByPropertyType' + propertyTypeName);
    }

    getAllPropertyDetailsByCity() {
        return axios.get(PROPERTY_DETAILS_API_URL + '/detailsByCity/{cityName}');
    }
    getAllPropertyDetailsByRentAndSell() {
        return axios.get(PROPERTY_DETAILS_API_URL + '/detailsByOwnerChoice/{ownerChoice}');
    }
    getAllPropertyDetailsByPropertyType() {
        return axios.get(PROPERTY_DETAILS_API_URL + '/detailsByPropertyType/{propertyTypeName}');
    }
    getPropertyDetailsByOwnerChoice(ownerChoice) {
        return axios.get(PROPERTY_DETAILS_API_URL + './detailsByOwnerChoice/' + ownerChoice)
    }

}
export default new PropertyService();

