const express = require('express')
const router = express.Router()
const TaskController  = require('../controllers/TaskController')
router.post('/createNewTask',(req,res)=>{TaskController.createNewTask(req,res)})
module.exports = router