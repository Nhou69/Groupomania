const sequelize = require('sequelize');

const sequelizeDb = new sequelize('groupomania', 'root', 'pass20122014', {
    dialect: 'mysql',
    host: 'localhost'
});

try {
  sequelizeDb.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

sequelizeDb
  .sync()
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });

module.exports = sequelizeDb;