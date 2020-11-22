const router = require('express').Router();
const Tag = require('../controllers/tag.controller');
const authent = require('../middleware/authentication')

router.post('/', authent, Tag.create);

router.get('/', authent, Tag.readAll);

module.exports = router; 