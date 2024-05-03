// imports express
const router = require('express').Router();

// imports the main homepage route into a variable
const homepageroute = require('./homepage_routes');
const apiRoutes = require('./api');

//sets the variable as the default route
router.use('/', homepageroute);
router.use('/api', apiRoutes)

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;