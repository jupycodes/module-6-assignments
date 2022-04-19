const Sequelize = require('sequelize');
const config = require('./../config');

const TaskComplete = config.define('complete_tasks', {
    task_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    taskName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    taskStart: {
        type: Sequelize.DATE,
        allowNull: false
    },
    taskEnd: {
        type: Sequelize.DATE,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {timestamps:false});

module.exports = TaskComplete;