import React from 'react';

const Shared = () => {
  return (
    <div>
      <div class="ui segments" style={{width:'50%', margin:'0 auto',  marginBottom:'50px', marginTop:'50px'}} >
  <div class="ui segment" >
    <p>blue reviewed "Sula" by Toni Morrison, Date<span style={{float:'right'}}>Liked 26 times</span></p>
    
  </div>
  <div class="ui secondary segment">
    <p>A messed up book. Black people going crazy. </p>
    <button>Add Book to your List</button>
    <span style={{float:'right'}}> Like <i class="thumbs up outline icon"></i> </span>
  </div>

</div>
<div class="ui segments" style={{width:'50%', margin:'0 auto',  marginBottom:'100px'}} >
  <div class="ui segment" >
    <p>blue reviewed "Sula" by Toni Morrison, Date<span style={{float:'right'}}>Liked 26 times</span></p>
    
  </div>
  <div class="ui secondary segment">
    <p>A messed up book. People going crazy. </p>
    <button>Add Book to your List</button>
    <button style={{float:'right', background:'transparent', border:'none'}}> Like <i class="thumbs up outline icon"></i> </button>
  </div>

</div>


    </div>
  ) 
}

export default Shared;