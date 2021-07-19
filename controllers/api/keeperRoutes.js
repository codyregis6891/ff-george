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


module.exports = router;