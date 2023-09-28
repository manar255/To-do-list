const Task = require("../models/task");

exports.getTasks = (req, res, next) => {
  Task.fetchAll().then((tasks) => {
    console.log("tasks =>", tasks);
    res.render("index.ejs", { tasks: tasks, pageTitle: "Task manager " });
  });

  // console.log('controller work!')
  // next();
};

exports.postAddTask = (req, res, next) => {
  const taskName = req.body.name;
  const newTask = new Task(taskName, false);
  newTask.save().then(() => {
    Task.fetchAll().then((tasks) => {
      res.redirect('/');
    });
  });
};

exports.postDeleteTask = (req, res, next)=>{
    const taskId=req.body.taskId;
    Task.deleteById(taskId).then(()=>{
        res.redirect('/');
    }
    )
};

exports.getEditTask=(req,res,next)=>{
    const taskId = req.params.taskId;
    Task.findById(taskId).then(task=>{
        res.render("task.ejs", { task:task, pageTitle: "Eidt task " });
    })
}

exports.postEditTask = (req,res,next)=>{
    const taskId=req.body.taskId;
    const taskname=req.body.name;
    const taskcomplited=req.body.completed;
    const task=new Task(taskname,taskcomplited);
    Task.editById(taskId,task).then(()=>{
        res.redirect('/');
    })
}


