import axios from "axios";
import { AuthHeader } from "./AuthHeader";
import UrlHelper from "./UrlHelper";

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
//create
const create = (ep, data) => {
    return axios.post(`${UrlHelper}/${ep}`, data,  
    {
        headers: AuthHeader()
    })
}

const update = (ep, id, data) => {
    return axios.put(`${UrlHelper}/${ep}/${id}`, data,  
    {
        headers: AuthHeader()
    })
}

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

