const express = require('express');
const router = express.Router();

// controllers
const { requireSignin, adminMiddleware , authMiddleware } = require('../controllers/auth');
const { create, list, read, remove } = require('../controllers/tag');

// validators
const { runValidation } = require('../validators');
const { createTagValidator } = require('../validators/tag');

// only difference is methods not name 'get' | 'post' | 'delete'
router.post('/tag', createTagValidator, requireSignin, create);
router.get('/tags', list);
router.get('/tag/:slug', read);
router.delete('/tag/:slug', requireSignin, adminMiddleware, remove);

module.exports = router; 
