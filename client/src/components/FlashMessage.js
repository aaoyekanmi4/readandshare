import React from 'react';

const FlashMessage = (props) => {
    
    return (<div style={props.color} class="ui message">
    <p >{props.message}</p>
  </div>) 
}

export default FlashMessage;