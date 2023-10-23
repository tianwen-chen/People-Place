const express = require('express');

const router = express.Router();

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire state building',
        description: 'one of the most famous sky scrapers',
        location: {
            lat: 40.7,
            lng: - 73
        },
        address: 'mars',
        creator: 'u1'
    }
]

router.get('/:pid', (req, res, next) => {
    const placeId = req.params.pid;

    const place = DUMMY_PLACES.find(p => {
        return p.creator === placeId;
    });

    if (!place) {
        // send only one request
        return res.status(404).json({message: "Cannot find place"});
    } 

    res.json({place});
});

module.exports = router;