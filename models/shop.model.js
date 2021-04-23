module.exports = (sequelize, Sequelize) => {
    const Shop = sequelize.define("shop", {
        name: {type: Sequelize.STRING},
        createdAt: {type: Sequelize.STRING}
    });
    return Shop;
};