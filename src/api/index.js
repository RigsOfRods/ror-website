import axios from 'axios';

export default() => {
    return axios.create({
        baseURL: "https://api.rigsofrods.org", // will eventually be deprecated
        withCredentials: false,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
}