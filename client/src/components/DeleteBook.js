import React from 'react';

const DeleteBook = (props) => {
    return(
          <form className="ui large form" onSubmit ={props.onSubmit}>
    <h2 className="ui dividing header">{props.formTitle}</h2>
<h3>{`Are you sure you want to delete "${props.bookTitle}"?`}</h3>
    <div className="actions">
            <button className="ui button right floated" onClick={props.onClose}>
              Cancel
            </button>
            <button className="ui button primary right floated negative"  type="submit">
              {props.actionText} 
            </button>
          </div>
   
    </form>
    )
}

export default DeleteBook;