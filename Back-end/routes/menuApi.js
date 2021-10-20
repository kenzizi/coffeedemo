const express = require('express');
const router = express.Router();
const User = require('../models/menuSchema')

router.post('/add-menu',(req,res)=>{
    res.json({message:'added successfuly'})
})

router.get('/menu-list',(req,res)=>{
    res.json({message:'menu list'})
})

module.exports = router;