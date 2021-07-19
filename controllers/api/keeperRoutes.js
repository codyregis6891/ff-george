const router = require('express').Router();
const { Keeper } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newKeeper = await Keeper.create({
            ...req.body,
        });
        res.status(200).json(newKeeper);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const keeperData = await Keeper.findAll();
        res.status(200).json(keeperData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const keeperData = await Keeper.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!keeperData) {
            res.status(404).json({ message: 'No player found with this ID.' });
            return;
        }

        res.status(200).json(keeperData);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;