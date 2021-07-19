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


module.exports = router;