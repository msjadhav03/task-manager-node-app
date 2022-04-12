const express = require('express')
const router = express.Router()
const TaskController  = require('../controllers/TaskController')
router.put('/updateTask',(req,res)=>{TaskController.updateTaskById(req,res)})
module.exports = router