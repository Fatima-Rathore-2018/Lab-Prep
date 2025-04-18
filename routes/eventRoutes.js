const express = require('express');
const router = express.Router();

const {
    createEvent,
    getEventSortDate
} = require('../controllers/eventController');


router.post('/createEvent', createEvent);
router.get('/getEventSortByDate/:id', getEventSortDate);

module.exports = router;
