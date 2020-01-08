import React, {useState} from 'react';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken'
const AuthContext = React.createContext();

const AuthContextProvider = (props) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);

    //Load User
    const loadUser = async () => {
      //set global header with token if exists
      if (localStorage.token) setAuthToken(localStorage.token);
      
      try {
        const res = await axios.get('/api/auth')
        setIsAuthenticated(true);
        setLoading(false);
        setUser(res.data)

      }
      catch(err) {
      const responseError= err.response.data.msg
      localStorage.removeItem('token');
      setError(responseError);
      setToken(null);
      setLoading(false);
      setUser(null);
      }
    }
    //Register User
    const register = async formData => {
      const config = {
        headers: {
          'Content-Type':'application/json'
        }
      }
      try {
        const res = await axios.post('/api/users', formData, config)
        //set the token returned from the post request to local storage
        const token = res.data.token;   
        localStorage.setItem("token", token)
        setToken(token)
        setIsAuthenticated(true);
        setLoading(false);
        loadUser();
       

      } catch (err) {
        const responseError= err.response.data.msg
        localStorage.removeItem('token');
        setError(responseError);
        setToken(null);
        setLoading(false);
        setUser(null);
        
      }
    }

    //Login User
    const login = async formData => {
      const config = {
        headers: {
          'Content-Type':'application/json'
        }
      }
      try {
        const res = await axios.post('/api/auth', formData, config)
        //set the token returned from the post request to local storage
        const token = res.data.token;   
        localStorage.setItem("token", token)
        setToken(token)
        setIsAuthenticated(true);
        setLoading(false);
        loadUser();
       

      } catch (err) {
        const responseError= err.response.data.msg
        
        setError(responseError);
        
        
      }
    }
    //Logout
    const logout = () => {
      localStorage.removeItem('token');
      setIsAuthenticated(false);
      setToken(null);
      setLoading(false);
      setUser(null);
    }
    //Clear Errors
    const clearErrors = () => setError(null);

    return (
      <AuthContext.Provider value={{logout, register, login, token, isAuthenticated, loading, error, user, clearErrors, loadUser} }>
        {props.children}
      </AuthContext.Provider>
    ) 
}



export {AuthContextProvider, AuthContext}