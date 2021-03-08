import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-f5dd7-default-rtdb.firebaseio.com/'
});

export default instance;