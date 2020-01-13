import React, { useState, useContext} from 'react';
import Shared from './components/Shared'
import BookForm from './components/BookForm';
import DeleteBook from './components/DeleteBook';
import Navbar from './components/Navbar'
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import ReviewForm from './components/ReviewForm';
import PrivateRoute from './components/PrivateRoute'
import Home from './components/Home'
import useFlashMessage from './hooks/useFlashMessage'
import { Route, Switch } from 'react-router-dom'
import setAuthToken from './utils/setAuthToken'
import { BookContext } from './context/BookContext';


const App = () => {
    //set global header with jwt token
    if (localStorage.token) setAuthToken(localStorage.token);
   
    
    //
    const bookContext = useContext(BookContext);
    const { addBook, deleteBook, editBook}  = bookContext;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [crudAction, setCrudAction] = useState(null);
 

    const [bookFormData, setbookFormData] = useState({id: '',title:'', author: '', pages: '', status: 'Not Started'})
    const [message, setMessage] = useState('');

    const {showFlash} = useFlashMessage(message); 
    const [flashColor, setFlashColor] = useState(null);

                


    const handleBookSubmission = (event) => {
        event.preventDefault();
        
        addBook(bookFormData)
       
        toggleModal();
        setMessage(`Succesfully added "${bookFormData.title}"`);
        setFlashColor({border: '1px solid green'})
     
    }

    const handleBookDelete = (event) => {
        event.preventDefault();
        // let booksCopy = [...books];
        // let booksListWithDeletion = booksCopy.filter(book => book.id !== bookFormData.id);
        deleteBook(bookFormData.id)
        toggleModal();
        setMessage(`Deleted "${bookFormData.title}"`);
        setFlashColor({border: '1px solid red'})
        
    }

  const handleBookEdit = (event) => {
        event.preventDefault();
        console.log(bookFormData)
        editBook(bookFormData);
      
       
        toggleModal();
        setMessage(`Edited "${bookFormData.title}"`);
        setFlashColor({border: '1px solid orange'})
    }

  const handleOnChange = (event) => {
        const name = event.target.name;
        const newValue = event.target.value;  
        setbookFormData(prevbookFormData =>({...prevbookFormData, [name]: newValue}));
       
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
        setCrudAction(null);
        
    }
    const showReviewBook = (book) => {
        setbookFormData({
            id:book._id,
            title:book.title,
            author:book.author
        })
        toggleModal();
        setCrudAction('Review');
    }


    const showAddBook = () =>{
        setbookFormData({id:'',
        title: '',
        author:'',
        pages:'',
        status:'Not Started'})
        toggleModal();
        setCrudAction('Add');
    }
    const showEditBook = (book) =>{
      
        setbookFormData({id:book._id,title:book.title, author:book.author, status:book.status, pages:book.pages})
        toggleModal();
        setCrudAction('Edit');

    }
    const showDeleteBook = (deletionId,titleToDelete) =>{
        toggleModal();
        const deletionValues = {id:deletionId, title:titleToDelete}
      
        setCrudAction('Delete');
        setbookFormData({...bookFormData,...deletionValues})

    }
    const pickModalChild =()=>{
        if (crudAction === 'Add'){ 
            return <BookForm 
                    formTitle="Add New Book"
                    actionText={crudAction}
                    onClick ={handleBookSubmission}
                    addInput = {handleOnChange}
                    onSubmit = {handleBookSubmission}
                    watchInput = {bookFormData}  
                    onClose ={toggleModal}
                   
                />
            }
        else if(crudAction === 'Edit'){ 
            return <BookForm 
                    formTitle="Edit Book"
                    actionText={crudAction}
                    addInput = {handleOnChange}
                    watchInput = {bookFormData}
                    onClose ={toggleModal}
                    onSubmit = {handleBookEdit}
                />
            }
        else if (crudAction === 'Delete'){
            return  <DeleteBook 
                    formTitle="Delete Book"
                    actionText={crudAction}
                    onSubmit = {handleBookDelete}
                    onClose ={toggleModal}
                    bookTitle = {bookFormData.title}
                    />
            }
        else if (crudAction === 'Review'){
            return <ReviewForm 
                    bookId = {bookFormData.id}
                    bookTitle = {bookFormData.title}
                    bookAuthor = {bookFormData.author}
                    actionText={crudAction}
                    onSubmit={handleBookEdit}
                    onClose={toggleModal}
                    />
        }

    }
    return( 
        <>
        <Navbar />
        <Switch>
           
  <PrivateRoute exact path= "/" >
  <Home 
        flashColor ={flashColor}
        message ={message} 
        showEditBook={showEditBook}
        showDeleteBook={showDeleteBook}
        showAddBook = {showAddBook}
        showReviewBook ={showReviewBook}
        isModalOpen={isModalOpen}
        pickModalChild={pickModalChild}
        toggleModal ={toggleModal}
        crudAction={crudAction}
        showFlash={showFlash}
        
    />

  </PrivateRoute>

  />
  
<Route path="/shared" component={Shared} />
<Route path="/register" component={SignUpForm}/>

    
   

<Route path="/login" component={LoginForm}/>


        </Switch>
        </>
     
        )
    }

export default App;