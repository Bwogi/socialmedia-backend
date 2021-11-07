const router = require('express').Router();
module.exports = router; // to use it in index.js i have to export it

router.get('/', (req, res) => {
    res.send("Welcome to the results page");
})

