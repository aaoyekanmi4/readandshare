import React from 'react';

import './BookEntry.css'

const BookEntry = (props) => {
   
  function displayStatusStyle (status) {
    if (status === "Finished Reading"){
       return "read"
    }
    else if (status === "Reading") {
      return "current"
    }
    else {
      return "not-started"
    }

  }
  function displayStatusIcon (status) {
    if (status ==="Finished Reading"){
      return <i className="icon checkmark"></i>
    }
    else if (status === "Reading"){
      return <i className="bookmark icon"></i>
    }
    else {
      return <i className="book icon"></i>
    }
  }
    return( 
        <tr className={displayStatusStyle(props.status)}>
         
        <td  className="title">{displayStatusIcon(props.status)} {props.title}</td>
        <td className="author">{props.author}</td>
        <td className="pages">{props.pages}</td>
        <td className="status">{props.status}</td>
        <td style={{textAlign:'center'}}  className="edit">
          <button style={{backgroundColor:'transparent', border:'none',color:'gray', cursor:'pointer'}}  onClick={() =>props.edit(props.book)}>
          <i className="edit icon"></i>
          </button>
          </td>
        <td  style={{textAlign:'center'}}  className="delete">
          <button style={{backgroundColor:'transparent', border:'none', color:'red', cursor:'pointer' }}  onClick={()=>props.delete(props.id, props.title)}>
          <i className="trash alternate outline icon"></i>
          </button></td>
        
      </tr>
    )
}

export default BookEntry;