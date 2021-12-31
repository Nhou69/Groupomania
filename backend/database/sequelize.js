const sequelize = require('sequelize');

//Connexion à la base de données mysql local
const sequelizeDb = new sequelize('groupomania', 'root', 'pass20122014', {
  dialect: 'mysql',
  host: 'localhost'
});

//test de connexion à la base
try {
  sequelizeDb.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

//Synchronisation de sequelizeDb avec la database local groupomania => création des tables dans la bases de données
sequelizeDb
  .sync()
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });

module.exports = sequelizeDb;