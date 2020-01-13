import React, { useState } from 'react';
import ValidationError from './ValidationError';

const ReviewForm = (props) => {
    const [review, setReview] = useState({rating:0, text:''})
    const [responseError, setResponseError] = useState('');

    const handleChange = (event) => {
       let newValue = event.target.value;
       setReview(prevReview => ({...prevReview, text:newValue}))
    }
   const handleStarRating = (stars) => {
          setReview(prevReview => ({...prevReview, rating:stars}))
   }
   const handleSubmit = (event)=>{
       event.preventDefault();
       console.log(review)
       props.onClose();
   }
    return (
           
      <div >
      <form onSubmit={handleSubmit} className="ui  form" >
          
      <ValidationError message={responseError} />
            <h2 className="ui dividing header">{`Review of ${props.bookTitle} by ${props.bookAuthor}`} </h2>
            <label>Rating: </label>
            <div className="field rating" style={{fontSize:24}}> 
         
            <span class="rating">
    <input type="radio" class="rating-input"
           id="rating-input-1-5" name="rating-input-1" onClick={() => handleStarRating('5')} />
    <label for="rating-input-1-5" class="rating-star"></label>
    <input type="radio" class="rating-input"
           id="rating-input-1-4" name="rating-input-1"
           onClick={() => handleStarRating('4')}/>
    <label for="rating-input-1-4" class="rating-star"></label>
    <input type="radio" class="rating-input"
           id="rating-input-1-3" name="rating-input-1"
           onClick={() => handleStarRating('3') } />
    <label for="rating-input-1-3" class="rating-star"></label>
    <input type="radio" class="rating-input"
           id="rating-input-1-2" name="rating-input-1"
           onClick={() => handleStarRating('2')}/>
    <label for="rating-input-1-2" class="rating-star"></label>
    <input type="radio" class="rating-input"
           id="rating-input-1-1" name="rating-input-1"
           onClick={() => handleStarRating('1')}/>
    <label for="rating-input-1-1" class="rating-star"></label>
</span>

</div>
       
        
            <div class="field">
            <label>Description:  (Optional) </label>
          <textarea value={review.text} onChange ={handleChange}></textarea>
        </div>
        <div className="actions">
            <button className="ui button right floated" onClick={props.onClose}>
              Cancel
            </button>
            <button className="ui button primary right floated"  type="submit">
              {props.actionText} 
            </button>
          </div>
       
     
    </form>
    </div>
    )
}

export default ReviewForm;