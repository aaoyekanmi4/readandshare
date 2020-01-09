import React, {useContext, useEffect} from 'react';
import BookTable from './BookTable';
import Modal from './Modal';
import FlashMessage from './FlashMessage';
import { AuthContext } from '../context/AuthContext'
const Home = (props) => {
  const authContext = useContext(AuthContext);
  const {loadUser} = authContext;
  useEffect(() => {
    loadUser();
    //eslint-disable-next-line
  }, [])

  return (
    <>

    <div className="ui container">
        
        <h1 className="ui header" style={{textAlign:'center', marginBottom:'140px', marginTop: '60px'}}>Book App</h1>
        {props.showFlash ?<FlashMessage color ={props.flashColor}message={props.message} />: null }
        <BookTable 
                  clickReview ={props.showReviewBook}
                   clickEdit ={props.showEditBook}
                   clickDelete = {props.showDeleteBook}
               />
        <button style={{marginTop:10}}
                onClick={props.showAddBook}
                className="ui primary button right floated">
            Add Book
        </button>
        <Modal show={props.isModalOpen} onClose ={props.toggleModal} actionText ={props.crudAction} >         
                {props.pickModalChild()}
        </Modal>
     
    </div>
    </>
  )
}
export default Home;