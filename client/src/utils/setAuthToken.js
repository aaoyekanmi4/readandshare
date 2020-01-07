import axios from 'axios';

//set token to global header if passed in
const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  }
  else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
}

export default setAuthToken;