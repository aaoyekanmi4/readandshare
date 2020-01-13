import React, {useContext, useEffect} from 'react';
import BookEntry from './BookEntry';
import { BookContext } from '../context/BookContext'
import './BookTable.css'


const BookTable = (props) => {
const bookContext = useContext(BookContext);
const { books, getBooksByUser} = bookContext;
useEffect (() => {
  getBooksByUser();
  // eslint-disable-next-line
},[])
const bookEntries = books.map((book, index) =>{

 return  <BookEntry  key={index}
            id={book._id}
            reviewed={book.reviewed}
            title={book.title}
            author={book.author}
            pages={book.pages}
            status={book.status}
            review = {props.clickReview}
            edit = {props.clickEdit } 
            delete = {props.clickDelete}
            book={book}
            toggleModal ={props.toggleModal}
    />

}
)



    return( 
    <div>
     
       <table className="ui table">
  <thead> 
    <tr><th>Title</th>
    <th >Author</th>
    <th >Pages</th>
    <th >Status</th>
    <th >Edit</th>
    <th>Delete</th>
  </tr></thead>
  <tbody>
      {books ? bookEntries : 'Loading...'}
  </tbody>
</table>

</div>
        )
}

export default BookTable;