import React, { useState } from 'react';
import axios from 'axios';


const ReviewContext = React.createContext();

const ReviewContextProvider = (props) => {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState('');

     //Add Review
   const addReview = async review => {
    const config = {
      header: {
        'Content-Type':'application/json'
      }
    }
    try {
      await axios.post('/api/reviews', review, config);
    

    } catch (err) {
       const responseError= err.response.data.msg
       setError(responseError);
    }
  }
  const getReviews = async () => {
    const config = {
      header: {
        'Content-Type':'application/json'
      }
    }
    try {
      const res= await axios.get('/api/reviews', config);
    
      setReviews(res.data)

    } catch (err) {
       const responseError= err.response.data.msg
       setError(responseError);
    }
  }
  
    return (
      <ReviewContext.Provider value={{reviews, error, addReview, getReviews}}>
         {props.children}
      </ReviewContext.Provider>
    )
  }


export { ReviewContext, ReviewContextProvider}