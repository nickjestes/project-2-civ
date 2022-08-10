(async () => {
    const sequelize = require('../config/connection');
    const defaultUser = require('./default-root-user.json');
    const secondUser = require('./second-user.json');
    //TODO add seed files in this seeds folder and call it using await 
    const { Country, User, Tweet } = require("../models");

    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    //TODO: add different seeds
    await User.create(defaultUser, { individualHooks: true });
    console.log('\n----- DEFAULT ROOT USER SEEDED -----\n');

    await User.create(secondUser, { individualHooks: true });
    console.log('\n----- SECOND USER SEEDED -----\n');

    process.exit(0);
})();