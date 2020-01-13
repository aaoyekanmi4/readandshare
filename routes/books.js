const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../middleware/auth')
const Book= require('../models/Book')

//GET all books
router.get('/', auth,  async (req, res) => {
  try {
    const books = await Book.find({user:req.user.id}).sort({date: -1}) 
    res.json(books);
  } catch (err) {
    console.error(err.message);
    
  }
});

//Create a book entry
router.post('/', [
  auth,
  [
    check('title', 'Title is required')
    .not()
    .isEmpty()
  ]
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()})
  }
  const {title, author, pages, status } = req.body;
  try {
    const newBook= new Book({
      title, 
      author,
      pages,
      status,
      user:req.user.id
    });
    const book = await newBook.save()

    res.json(book);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }
});

//Edit book entry
router.put('/:id',auth, async (req, res) => {
  const {title, author, pages, status, review_content, reviewed, rating } = req.body;
  //Build Book object
  const bookFields = {};
  if (title) bookFields.title = title;
  if (author) bookFields.author = author;
  if (pages) bookFields.pages = pages;
  if (status) bookFields.status = status;
  if (rating) bookFields.rating = rating;
  if  (reviewed) bookFields.reviewed = reviewed;
  if (review_content) bookFields.review_content = review_content;

  try {
    let book = await Book.findById(req.params.id)
    if (!book) return res.status(404).json({msg:'Book not found'})
    //Make sure user owns book
    if(book.user.toString() !== req.user.id) {
      return res.status(401).json({msg: 'Not authorized'})
    }
    book = await Book.findByIdAndUpdate(req.params.id, 
      { $set: bookFields },
      {new:true}

    )
    res.json(book)
  }
  catch(err){
    console.error(err.message);
    res.status(500).send('Server Error')

  }
});



//Delete a book 
router.delete('/:id',auth, async (req, res) => {
 
  try {
    let book = await Book.findById(req.params.id)
    if (!book) return res.status(404).json({msg:'Book not found'})
    //Make sure user owns book
    if(book.user.toString() !== req.user.id) {
      return res.status(401).json({msg: 'Not authorized'})
    }
 
    await Book.findByIdAndRemove(req.params.id);
    res.json({msg:'Book removed'});
  }
  catch(err){
    console.error(err.message);
    res.status(500).send('Server Error')

  }
});





module.exports = router;