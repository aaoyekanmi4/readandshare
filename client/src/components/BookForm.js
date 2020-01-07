import React from  'react';


const BookForm =(props)=>{


    return (
        <div>
          <form onSubmit = {props.onSubmit} className="ui large form" >
            <h2 className="ui dividing header">{props.formTitle}</h2>
            <div className="field">
              <label>Title</label>
              <input 
                name="title" 
                value={props.watchInput.title}
                onChange={props.addInput}  
                autoComplete="off" type="text" 
                placeholder="Title of Book"
                />
           </div>
           <div className="field">
             <label>Author</label>
             <input  
               value={props.watchInput.author}
               name="author" 
               onChange={props.addInput} 
               autoComplete="off" 
               type="text" 
               placeholder="Author"/>
          </div> 
          <div className="field">
            <label>Pages</label>
            <input 
              value={props.watchInput.pages}
              name="pages" 
              autoComplete="off" 
              type="text" 
              onChange={props.addInput} 
              placeholder="Pages"/>
          </div> 
          <div className="field">
            <label>Status</label>
            <select name="status" 
                  value={props.watchInput.status} 
                  onChange={props.addInput} >
              <option value="Not Started">Not Started</option>
              <option value="Reading">Reading</option>
              <option value="Finished Reading">Finished Reading</option>
            </select>
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

export default BookForm;