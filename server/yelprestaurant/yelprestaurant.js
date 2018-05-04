const yelp = require('yelp-fusion');
const _ = require('lodash');
const API_Key = '-0J7XMe_dh6ASo3mVtCeuiye30r_dktCYSio5i690lRIWlG_lU5FP4fZpI0v_-kWT1CyICQt2eaWJ1SzFksYlOVJr0oNfCrV3bpLq92k_foLpjCONZ-LGu4VlC-5WnYx'

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



