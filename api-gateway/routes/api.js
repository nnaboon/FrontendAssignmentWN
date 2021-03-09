var express = require('express');
var axios = require('axios');
var router = express.Router();

router.get('/trips', (req, res) => {

    // get data from json-server
    axios.get('http://localhost:9000/trips')
    .then(response => {
        req.trips = response.data;

        const keyword = req.query.keyword;
        const keywords = keyword ? keyword.split(" ") : keyword;
        const trips = req.trips;
        if (!keyword) {
            return res.status(200).json({trips: trips });
        }

        // filter, includes
        // filter will create new array
        // include return true, false
        SearchKeyword = (trip) => {
            let match = false;
            trip.tags.forEach((tag) => {
                keywords.some((keyword) => tag.includes(keyword)) ? (match = true) : null
            });
 
            if(trip.title.includes(keyword) || trip.description.includes(keyword) ) match = true;
            return match;
        }

        const FilterKeyword = trips.filter((trip) => SearchKeyword(trip));
        if(FilterKeyword) {
            res.status(200).json({trips: FilterKeyword});
        }else{
            res.status(200).json({trips: {}});
        }

    })
    .catch(err => {
        res.status(500).json({ message: "Cannot fetch data " + err })
    })
})

module.exports = router;