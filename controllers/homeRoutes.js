const router = require('express').Router();
const { Champ, JiveTurkey, Keeper } = require('../models');

router.get('/', async (req, res) => {
    try {
        res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/champions', async (req, res) => {
    try {
        const champData = await Champ.findAll();
        const champs = champData.map((champ) => champ.get({ plain: true }));

        res.render('champions', {
            champs
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/jiveturkeys', async (req, res) => {
    try {
        const jtData = await JiveTurkey.findAll();
        const jts = jtData.map((jt) => jt.get({ plain: true }));

        res.render('jiveturkeys', {
            jts
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/keepers', async (req, res) => {
    try {
        const keeperData = await Keeper.findAll();
        const keepers = keeperData.map((keeper) => keeper.get({ plain: true }));

        res.render('keepers', {
            keepers
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;