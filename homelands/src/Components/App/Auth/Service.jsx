import axios from "axios";
import { AuthHeader } from "./AuthHeader";
import UrlHelper from "./UrlHelper";


// CRUD nedenfor
// GET
//ep = endpoint

const getList = ep => {
    return axios.get(`${UrlHelper}/${ep}`, 
    {
        headers: AuthHeader()
    })
}

const getDetails = (ep, id) => {
    return axios.get(`${UrlHelper}/${ep}/${id}`,
    {
        headers: AuthHeader()
    })
}
//post
const create = (ep, data) => {
    return axios.post(`${UrlHelper}/${ep}`, data,  
    {
        headers: AuthHeader()
    })
}
//put
const update = (ep, id, data) => {
    return axios.put(`${UrlHelper}/${ep}/${id}`, data,  
    {
        headers: AuthHeader()
    })
}
// delete
const remove = (ep, id) => {
    return axios.delete(`${UrlHelper}/${ep}/${id}`, 
    {
        headers: AuthHeader()
    })
}

//full export

const serviceBot = {
    getList,
    getDetails,
    create,
    update,
    remove

}

export default serviceBot;

