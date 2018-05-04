var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var restaurant = require('./yelprestaurant/yelprestaurant.js')

app.use(express.static(__dirname + '/../react-client/dist'));

app.use(bodyParser.text({ type: 'text/plain' }))

app.post('/cities', function (req, res) {
  console.log('we received the POST request on the server!');
  console.log('the city is ', req.body);
  restaurant.findRestaurant(req.body, (restaurants) => {
    res.status(200).send({tag: 'restaurants', data: restaurants});
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
