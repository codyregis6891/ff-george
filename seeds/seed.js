const sequelize = require('../config/connection');
const { Champ, JiveTurkey, Keeper } = require('../models');

const champData = require('./champData.json');
const jtData = require('./jtData.json');
const keeperData = require('./keeperData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await Champ.bulkCreate(champData, {

    });

    await JiveTurkey.bulkCreate(jtData, {

    });

    await Keeper.bulkCreate(keeperData, {

    });

    process.exit(0);
};

seedDatabase();