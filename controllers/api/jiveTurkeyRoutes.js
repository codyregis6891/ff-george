const router = require('express').Router();
const { JiveTurkey } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newJT = await JiveTurkey.create({
            ...req.body,
        });
        res.status(200).json(newJT);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const jtData = await JiveTurkey.findAll();
        res.status(200).json(jtData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const jtData = await JiveTurkey.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!jtData) {
            res.status(404).json({ message: 'No team found with this ID.' });
            return;
        }

        res.status(200).json(jtData);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;