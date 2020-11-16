const router = require('express').Router();
const Tag = require('../controllers/tag.controller');

router.post('/', Tag.create);

router.get('/', Tag.readAll);

module.exports = router; 