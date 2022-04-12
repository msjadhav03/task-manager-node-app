const express = require('express')
const router = express.Router()
const TaskController  = require('../controllers/TaskController')
router.delete('/deleteTask',(req,res)=>{TaskController.deleteTaskById(req,res)})
module.exports = router