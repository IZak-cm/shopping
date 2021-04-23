module.exports = {
    HOST: "localhost",
    USER: "fortest",
    PASSWORD: "Pa55w0rd",
    DB: "shoppingdb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };