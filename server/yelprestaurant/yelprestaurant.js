const yelp = require('yelp-fusion');
const _ = require('lodash');

// const client = yelp.client(API_Key)
// let yelpConfig;
// try {
//   yelpConfig = API_Key;
// } catch(e) {
//   yelpConfig = undefined;
// }

const client = yelp.client(API_Key);

var findRestaurant = function (input, callback){

  var business = [];
  console.log('the input is ', input)

  let p1 = client.search({
    term: 'Restaurant',
    location: input,
    limit: 30,
  })
  .then(response => {
    restaurants = response.jsonBody.businesses;
      restaurants.forEach(restaurant => {
          business.push(restaurant);
        }
      );
    callback(business);
  })
  .catch(e => {
    console.log(e);
  });
}

module.exports.findRestaurant = findRestaurant;



