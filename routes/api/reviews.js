const express = require('express');
const router = express.Router();

//Review model
const Review = require('../../models/Review');

//@route GET api/reviews
//@desc Get all reviews
//@access Public
router.get('/', (req,res) => {
    Review.find()
        .sort({date: -1})
        .then(reviews => res.json(reviews));
});

//@route POST api/reviews
//@desc Create a review
//@access Public
router.post('/', (req,res) => {
    const newReview = new Review({
        address1: req.body.address1,
        address2: req.body.address2,
        province: req.body.province,
        pcode: req.body.pcode.toUpperCase(),
        comment: req.body.comment
    });
    newReview.save().then(review => res.json(review));
});

//@route DELETE api/review/:id
//@desc Delete a review
//@access Public
router.delete('/:id', (req,res) => {
    Review.findById(req.params.id)
        .then(review => review.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success:false}));
    });

module.exports = router;


