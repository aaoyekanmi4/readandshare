import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = (props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;

  return (
    <Route>
      {!isAuthenticated && !loading ?  <Redirect to="/login" /> :  props.children}
    </Route>
  )
     
  }
  
 

 export default PrivateRoute;

