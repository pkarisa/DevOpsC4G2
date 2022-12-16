const handlers = require('./handlers');

const router = {
    home: handlers.home,
    about: handlers.about,
};

module.exports = router;