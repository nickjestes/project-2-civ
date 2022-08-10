const sequelize = require('../config/connection');
//TODO add seed files in this seeds folder and call it using await 


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
//TODO: add different seeds

    console.log('\n----- ALL IS DONE, EXITING -----\n');

    process.exit(0);
};

seedAll();
