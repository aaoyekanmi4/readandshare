import React from 'react';
import './SingleReview.css'
const SingleReview = (props)=> {

  const drawStars = (rating) => {
    let goldStars = parseInt(rating);
    console.log(goldStars)
    const stars = [];
    while (goldStars > 0) {
      console.log(goldStars)
      stars.push(<span className="goldStar">★</span>)
      goldStars--
    }
    while (stars.length < 5){
      stars.push(<span className="emptyStar">☆</span>)
    }
    return stars
  }
return (
  <div>

  <div class="ui segments" style={{width:'50%', margin:'0 auto',  marginBottom:'100px'}} >
    <div class="ui segment" >
<p>{props.userName} reviewed "{props.title}" by {props.author} <span style={{float:'right', fontSize:22}}>{drawStars(props.rating)}
</span></p>
      
    </div>
    <div class="ui secondary segment">
      <p>{props.content} </p>
      <button>Add Book to your List</button>
      <span style={{float:'right', background:'transparent', border:'none'}}>{new Date(props.date).toDateString()} </span>
    </div>
  
  </div>
  
  
      </div>
)
}

export default SingleReview;