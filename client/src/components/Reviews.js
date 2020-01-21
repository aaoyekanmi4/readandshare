import React, {useContext, useEffect} from 'react';
import SingleReview from './SingleReview';
import { ReviewContext } from '../context/ReviewContext'

const Reviews = () => {

  const bookContext = useContext(ReviewContext);
  const { getReviews, reviews } = bookContext;
  useEffect(()=> {
    getReviews();
      
  }, [])
  
  const allReviews = reviews.map(review => <SingleReview date={review.date} rating ={review.rating} title={review.title} author={review.author} content={review.content} userName={review.userName} />)
  console.log(reviews)
  return (
  <h1>{allReviews}</h1>
  ) 
}

export default Reviews;