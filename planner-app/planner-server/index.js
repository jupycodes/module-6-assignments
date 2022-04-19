const express = require('express');
const app = express();
const config = require('./config');
const Task = require('./Models/Task');
const Goal = require('./Models/Goal');
const Note = require('./Models/Note');
const GoalComplete = require('./Models/GoalComplete');
const TaskComplete = require('./Models/TaskComplete');
const cors = require('cors');

app.use(cors()); 
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//create database connection
config.authenticate().then(function(){
    console.log('Database is connected');
}).catch(function(err){
    console.log(err);
});

//retrieve all tasks
app.get('/tasks', function(req,res){
    Task.findAll().then(function(result){
        res.send(result);
    }).catch(function(err){
        res.send(err);
    });
});

//retrieve all goals
app.get('/goals', function(req,res){
    Goal.findAll().then(function(result){
        res.send(result);
    }).catch(function(err){
        res.send(err);
    });
});

//retrieve all notes
app.get('/notes', function(req,res){
    Note.findAll().then(function(result){
        res.send(result);
    }).catch(function(err){
        res.send(err);
    });
});

//create new task
app.post('/tasks', function(req,res){
    Task.create(req.body).then(function(Result){
        res.redirect('/tasks');
    }).catch(function(err){
        res.send(err);
    });
});

//create new goal
app.post('/goals', function(req,res){
    Goal.create(req.body).then(function(Result){
        res.redirect('/goals');
    }).catch(function(err){
        res.send(err);
    });
});

//create new note
app.post('/notes', function(req,res){
    Note.create(req.body).then(function(Result){
        res.redirect('/notes');
    }).catch(function(err){
        res.send(err);
    });
});

//delete a note
app.delete('/notes/:note_id', function(req,res){
    var noteId = req.params.note_id
    Note.findByPk(noteId).then(function(result){
        if(result){
            result.destroy().then(function(){
                res.send(result);
            }).catch(function(err){
                res.send(err);
            });
        } else {
            res.send('Note not found');
        };
    }).catch(function(err){
        res.send(err);
    });
});

//delete a task
app.delete('/tasks/:task_id', function(req,res){
    var taskId = req.params.task_id
    Task.findByPk(taskId).then(function(result){
        if(result){
            result.destroy().then(function(){
                res.send(result);
            }).catch(function(err){
                res.send(err);
            });
        } else {
            res.send('Task not found');
        };
    }).catch(function(err){
        res.send(err);
    });
});

//delete a goal
app.delete('/goals/:goal_id', function(req,res){
    var goalId = req.params.goal_id
    Goal.findByPk(goalId).then(function(result){
        if(result){
            result.destroy().then(function(){
                res.send(result);
            }).catch(function(err){
                res.send(err);
            });
        } else {
            res.send('Note not found');
        };
    }).catch(function(err){
        res.send(err);
    });
});

//get all achieved tasks
app.get('/complete_tasks', function(req,res){
    TaskComplete.findAll().then(function(result){
        res.send(result);
    }).catch(function(err){
        res.send(err);
    });
});

//get all achieved goals
app.get('/complete_goals', function(req,res){
    GoalComplete.findAll().then(function(result){
        res.send(result);
    }).catch(function(err){
        res.send(err);
    });
});

//post goal to achieved goals table
app.post('/complete_goals', function(req,res){
    GoalComplete.create(req.body).then(function(Result){
        res.redirect('/complete_goals');
    }).catch(function(err){
        res.send(err);
    });
});

//post task to achieved tasks table
app.post('/complete_tasks', function(req,res){
    TaskComplete.create(req.body).then(function(Result){
        res.redirect('/complete_tasks');
    }).catch(function(err){
        res.send(err);
    });
});

app.listen(3000, function(){
    console.log("server is running on port 3000");
});