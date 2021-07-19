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

router.get('/', async (req, res) => {
    try {
        const champData = await Champ.findAll();
        res.status(200).json(champData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const champData = await Champ.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!champData) {
            res.status(404).json({ message: 'No team found with this ID.' });
            return;
        }

        res.status(200).json(champData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;