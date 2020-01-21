const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../middleware/auth')
const Review = require('../models/Review')




//Create a book entry
router.post('/', [
  auth,
  [
    check('rating', 'Rating is required')
    .not()
    .isEmpty()
  ]
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()})
  }
  const {bookId, userName, rating, content, author, title, date} = req.body;
  try {
    const newReview= new Review({
      bookId,
      userName,
      rating,
      content,
      author,
      title,
      date
    });
    const review = await newReview.save()

    res.json(review);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }
});

//Get all reviews
router.get('/',  async (req, res) => {
  try {
    const reviews = await Review.find({}).sort({date: -1}) 
    res.json(reviews);
  } catch (err) {
    console.error(err.message);
    
  }
});

module.exports = router;