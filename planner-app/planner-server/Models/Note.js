const Sequelize = require('sequelize');
const config = require('./../config');

const Note = config.define('notes', {
    note_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    noteName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    noteHeader: {
        type: Sequelize.STRING,
        allowNull: true
    },
    noteDetails: {
        type: Sequelize.STRING,
        allowNull: true
    },
    noteImportance: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {timestamps:false});

module.exports = Note;