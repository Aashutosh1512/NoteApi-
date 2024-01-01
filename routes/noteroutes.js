const express=require('express');
const { retrieve, retrievesingle,create, update, deletenote } = require('../controllers/controllers');
const { body} = require('express-validator');

const router=express.Router();
const validator =[
    body('title').notEmpty().withMessage('Title is required').isLength({ max: 255 }).withMessage('Title must be at most 255 characters'),
    body('content').notEmpty().withMessage('Content is required'),
  ]

router.post('/notes',
validator
, create
)
router.get('/notes', retrieve)
router.get('/notes/:id', retrievesingle)
router.put('/notes/:id',update)
router.delete('/notes/:id', deletenote)




module.exports=router;