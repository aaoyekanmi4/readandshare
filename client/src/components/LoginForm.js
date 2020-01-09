import React, {useState, useContext, useEffect} from 'react';
import { AuthContext } from '../context/AuthContext'
import ValidationError from './ValidationError'
import './rating.css'

const LoginForm =(props)=>{
  const authContext = useContext(AuthContext);
  const {login, error, clearErrors, isAuthenticated} = authContext;
  const [responseError, setResponseError] = useState(null);
  const [user, setUser] = useState({
    email:'',
    password:''
  });


  const {email, password} = user;

 useEffect(()=> {
   if (isAuthenticated) {
     props.history.push('/')
   }
   if (error ==='Invalid Credentials' || 
       error ==='User not found' || 
       error==='Password incorrect') setResponseError(error);
   clearErrors();
   // eslint-disable-next-line
 },[isAuthenticated, error])

  const onChange = e => setUser({...user, [e.target.name]: e.target.value});

  const onSubmit = e => {
    e.preventDefault();
    login({email, password}) 
    
  }
  
  return (
      <div style={{width:420, margin: '0 auto', marginTop:'10%'}}>
      
        <form onSubmit = {onSubmit} className="ui  form" >
          
    <ValidationError message={responseError} />
          <h2 className="ui dividing header">Login </h2>
     
         <div className="field">
           <label>Email</label>
           <input  
             value={email}
             name="email" 
             onChange={onChange} 
             autoComplete="off" 
             type="email" 
            required />
        </div> 
        <div className="field">
          <label>Password</label>
          <input 
            value={password}
            name="password" 
            type="password" 
            autoComplete="off"
            onChange={onChange} 
            required />
                    
        </div> 
      
<div className="actions">
          <button disabled={!password || !email} className="ui button primary right floated"  type="submit">
           Login 
          </button>
        </div>
   
  </form>
  </div>
  )
}

export default LoginForm;