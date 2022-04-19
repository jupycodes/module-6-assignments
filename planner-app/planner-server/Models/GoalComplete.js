const Sequelize = require('sequelize');
const config = require('./../config');

const GoalComplete = config.define('complete_goals', {
    goal_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    goalName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    goalDescription: {
        type: Sequelize.STRING,
        allowNull: true
    },
    goalStart: {
        type: Sequelize.DATE,
        allowNull: false
    },
    goalEnd: {
        type: Sequelize.DATE,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {timestamps:false});

module.exports = GoalComplete;