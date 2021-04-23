module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        username: {type: Sequelize.STRING},
        password: {type: Sequelize.STRING},
        email: {type: Sequelize.STRING},
        phone: {type: Sequelize.STRING},
        country: {type: Sequelize.STRING},
        city: {type: Sequelize.STRING},
        postcode: {type: Sequelize.STRING},
        name: {type: Sequelize.STRING},
        address: {type: Sequelize.STRING}
    });
    return User;
};