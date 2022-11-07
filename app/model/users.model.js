module.exports = (sequelize, Sequelize) => {
    const users = sequelize.define('clients', {
        nom: {
            type: Sequelize.STRING
        },
        prenom: {
            type: Sequelize.STRING
        }
    });

    return users;
}