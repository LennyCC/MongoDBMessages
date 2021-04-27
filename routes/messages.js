const express = require('express');

const messagesController = require('../controllers/messages');

const router = express.Router();

router.get('/', messagesController.showMainPage);
router.get('/message/:idMessage', messagesController.showDetailsPage); //http://localhost:3000/message/100

router.get('/add-message', messagesController.showFormPage);
router.post('/add-message', messagesController.postFormParge);

module.exports = router;