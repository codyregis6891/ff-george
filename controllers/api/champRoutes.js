const router = require('express').Router();
const { Champ } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newChamp = await Champ.create({
            ...req.body,
        });
        res.status(200).json(newChamp);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;