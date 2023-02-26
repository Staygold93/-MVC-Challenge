const sequelize = require('../config/connection');

const seedUsers = require('./userSeeds');
const seedPosts = require('./postSeeds');
const seedComments = require('./commentSeeds');

const seedDatabase = async () => {
    console.log("--------SYNCING DATABASE--------");
    await sequelize.sync({ force: true });
    console.log("--------DATABASE SYNCED---------");

    console.log("--------SEEDING USERS--------");
    await seedUsers();
    console.log("--------USERS SEEDED---------");

    console.log("--------SEEDING POSTS--------");
    await seedPosts();
    console.log("--------POSTS SEEDED---------");

    console.log("--------SEEDING COMMENTS--------");
    await seedComments();
    console.log("--------COMMENTS SEEDED---------");

    process.exit(0);
};

seedDatabase();