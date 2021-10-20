const express = require('express');
const router = express.Router();
const SelectedMenu = require('../models/selectedMenu')

router.post('/add-new-item',(req,res)=>{
    res.json({message:'added successfuly'})
})

router.get('/items-list',(req,res)=>{
    res.json({message:'menu list'})
})

module.exports = router;