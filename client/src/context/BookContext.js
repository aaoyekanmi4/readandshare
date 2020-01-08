import React, {useState} from 'react';
import axios from 'axios';


const BookContext = React.createContext();

const BookContextProvider = (props) => {
   const [books, setBooks] = useState([]);
   const [error, setError] = useState(null);
   //Get Books
   const getBooksByUser = async () => {
    const config = {
      header: {
        'Content-Type':'application/json'
      }
    }
      try {
        const res = await axios.get('/api/books', config)
        setBooks(res.data)
 
 
      } catch (err) {
        const responseError= err.response.data.msg
        setError(responseError);
      }
   }

   //Add Book
   const addBook = async book => {
     const config = {
       header: {
         'Content-Type':'application/json'
       }
     }
     try {
       await axios.post('/api/books', book, config)
       console.log(books)
       getBooksByUser();
     


     } catch (err) {
        const responseError= err.response.data.msg
        setError(responseError);
     }
   }
   //Delete Book
   const deleteBook = async id => {
    const config = {
      header: {
        'Content-Type':'application/json'
      }
    }
    try {
    await axios.delete(`/api/books/${id}`, config)
    getBooksByUser();
  }
    catch(err) {
      const responseError= err.response.data.msg
      setError(responseError);
    }
  }
   


   //Edit Book
   const editBook = async book => {
    const config = {
      header: {
        'Content-Type':'application/json'
      }
    }
    try {
      console.log('i ran')
      
      await axios.put(`/api/books/${book.id}`, book, config)
      getBooksByUser();
      
    


    } catch (err) {
       const responseError= err.response.data.msg
       setError(responseError);

       console.log('error ran')
    }
  }
  return (
    <BookContext.Provider value={{
      books,
      addBook,
      getBooksByUser,
      deleteBook,
      editBook,
      error
      
    }}>
      {props.children}
    </BookContext.Provider>
  )
   

}

export {BookContext, BookContextProvider};