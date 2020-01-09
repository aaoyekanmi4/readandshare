import React, { useState } from 'react';
import ValidationError from './ValidationError';

const ReviewForm = (props) => {
    const [review, setReview] = useState({rating:'', text:''})
    const [responseError, setResponseError] = useState('');

    return (
      <div style={{width:420, margin: '0 auto', marginTop:'10%'}}>
      <form onSubmit={props.onSubmit} className="ui  form" >
          
      <ValidationError message={responseError} />
            <h2 className="ui dividing header">Review for "Sula" </h2>
            <label>Rating: (Required)</label>
            <div className="field rating" style={{fontSize:24}}> 
            <span class="rating">
    <input type="radio" class="rating-input"
           id="rating-input-1-5" name="rating-input-1" />
    <label for="rating-input-1-5" class="rating-star"></label>
    <input type="radio" class="rating-input"
           id="rating-input-1-4" name="rating-input-1"/>
    <label for="rating-input-1-4" class="rating-star"></label>
    <input type="radio" class="rating-input"
           id="rating-input-1-3" name="rating-input-1"/>
    <label for="rating-input-1-3" class="rating-star"></label>
    <input type="radio" class="rating-input"
           id="rating-input-1-2" name="rating-input-1"/>
    <label for="rating-input-1-2" class="rating-star"></label>
    <input type="radio" class="rating-input"
           id="rating-input-1-1" name="rating-input-1"/>
    <label for="rating-input-1-1" class="rating-star"></label>
</span>

</div>
       
        
            <div class="field">
            <label>Description:  (Optional) </label>
          <textarea></textarea>
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