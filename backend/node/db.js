const { Sequelize } = require("sequelize");
const sequelize = new Sequelize({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT,
    // By default, sequelize logs all SQL statements, which clutters the console.
    logging: () => false,
});
// you can redefine this file based on your preferences. Use class or set of functions if you wish.

// define model according to what you see in the description
// there is no need to create or sync database with sequelize's sync method or anything like that
// the database is running and migrated already
const model = sequelize.define("notes", {
    added: { type: Sequelize.STRING, allowNull: true},
    author: { type: Sequelize.STRING, allowNull: false},
    content: { type: Sequelize.STRING, allowNull: false}
}, { timestamps: false });

module.exports = { model };
