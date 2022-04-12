const express = require('express')
const router = express.Router()
const TaskController  = require('../controllers/TaskController')
router.get('/fetchAllTask',(req,res)=>{TaskController.fetchAllTask(req,res)})
module.exports = router