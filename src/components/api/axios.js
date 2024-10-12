import axios from "axios";

export default axios.create({
    baseURL: 'http://unionboard-backend.smitghelani.xyz'
    // baseURL: 'https://be-unionboard.herokuapp.com'
});