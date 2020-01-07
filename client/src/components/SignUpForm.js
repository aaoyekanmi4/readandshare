import React, {useState, useContext, useEffect} from 'react';
import { AuthContext } from '../context/AuthContext'
import ValidationError from './ValidationError'


const SignUpForm =(props)=>{

  const authContext = useContext(AuthContext);
  const [userUsed, setUserUsed] = useState(null);
  const { register, error, clearErrors, isAuthenticated } = authContext;

  const [user, setUser] = useState({
    name:'',
    email:'',
    password:'',
    password2:''
  });

   useEffect(() => {
     if(isAuthenticated) {
       props.history.push('/');
     }
     if(error === 'User already exists') setUserUsed(error)
     clearErrors();
   }, [error, isAuthenticated, props.history])
  const {name, email, password, password2} = user;
  
  const validatePassword= ()=> {
    if (password.length < 6) {
      return 'Password must be at least 6 characters'
     
    }
  }

  const validatePasswordConfirmation= ()=> {
    if (password !== password2) {
      return 'Passwords do not match'
    }
  }


  const onChange = e => {
    setUser({...user, [e.target.name]: e.target.value});
    setUserUsed(null)
  }

  const onSubmit = e => {
    e.preventDefault();
    register({name, email, password})

  }
  
  return (
      <div style={{width:420, margin: '0 auto', marginTop:'10%'}}>
        <form onSubmit = {onSubmit} className="ui  form" >
        <ValidationError message={userUsed}/>
          <h2 className="ui dividing header">Sign Up </h2>
          <div className="field">
            <label>Name</label>
            <input 
              name="name" 
              value={name}
              onChange={onChange}  
              autoComplete="off" type="text" 
              required />
         </div>
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
            onChange={onChange} 
            required />
              <ValidationError message={validatePassword()}/>
        </div> 
        <div className="field">
          <label>Confirm Password</label>
          <input 
            value={password2}
            name="password2" 
            type="password" 
            onChange={onChange} 
          />
            <ValidationError message={validatePasswordConfirmation()}/>
        </div> 
<div className="actions">
          <button disabled={validatePassword() || validatePasswordConfirmation()} className="ui button primary right floated"  type="submit">
            Sign Up 
          </button>
        </div>
   
  </form>
  </div>
  )
}

export default SignUpForm;