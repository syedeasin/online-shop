import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://pacific-tor-49660.herokuapp.com'
});
 

export default instance;