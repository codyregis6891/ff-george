const router = require('express').Router();
const champRoutes = require('./champRoutes');
const jiveTurkeyRoutes = require('./jiveTurkeyRoutes');
const keeperRoutes = require('./keeperRoutes');

router.use('/champions', champRoutes);
router.use('/jiveturkeys', jiveTurkeyRoutes);
router.use('/keepers', keeperRoutes);

module.exports = router;