import axios from "axios";

export default axios.create({
    baseURL: 'https://unionboard-backend.smitghelani.xyz'
    // baseURL: 'https://be-unionboard.herokuapp.com'
});