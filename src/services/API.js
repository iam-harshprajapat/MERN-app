import axios from 'axios';

const API = axios.create({ baseURL: window.location.origin })

export default API;