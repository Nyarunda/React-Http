import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

let axiosSet = axios.defaults;

axiosSet.baseURL = 'https://jsonplaceholder.typicode.com';
axiosSet.headers.common['Authorization'] = 'AUTH TOKEN';
axiosSet.headers.post['COntent-Type'] = 'aplication/json';

axios.interceptors.request.use(
  (request) => {
    console.log(request);
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res) => {
    console.log(res);
    return res;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
