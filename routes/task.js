const express = require('express');

const router= express.Router();

const taskController = require('../controllers/tasks')

router.get('/',taskController.getTasks)

router.post('/',taskController.postAddTask);

router.post('/delete',taskController.postDeleteTask);

router.get('/editTask/:taskId',taskController.getEditTask);

router.post('/editTask/:taskId',taskController.postEditTask)

module.exports = router;