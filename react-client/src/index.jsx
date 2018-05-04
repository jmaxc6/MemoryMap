import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import CityForm from './components/CityForm.jsx';
import exampleCities from './components/exampleCities.js';
import Map from './components/Map.jsx'

class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
  restaurants: '',
  centerlat: '',
  centerlong: ''
  }
}

  selectCity() {
    var city = document.getElementById('selectcity').value;
    $.ajax({
      url: '/cities',
      method: 'POST',
      data: city,
      contentType: 'text/plain',
      success: (data) => {
        console.log('the result is: ', data)
        this.grabLatLong(data)
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  grabLatLong(data) {
    var resultArray = data.data;
    var latArray = [];
    var longArray = [];
    for (var i = 0; i < resultArray.length; i++) {
      latArray.push(resultArray[i].coordinates.latitude);
      longArray.push(resultArray[i].coordinates.longitude);
    }
    getCenter(latArray, longArray)
  }

  getCenter(latArray, longArray) {
    console.log('the latArray is equal to ', latArray)
    console.log('the longArray is equal to ', longArray)

    var minLat = Math.min.apply(null, latArray);
    var maxLat = Math.max.apply(null, latArray);
    var minLong = Math.min.apply(null, longArray);
    var maxLong = Math.max.apply(null, longArray);

    var avgLat = (minLat + maxLat ) / 2;
    var avgLong = (minLong + maxLong) / 2;

    this.setState({
      centerlat: avgLat,
      centerlong: avgLong
    })
  };

  render () {
    return (<div>
      <h1> MemoryMap </h1>
      <h2> See your Favorite restaurants on a map! </h2>
      <br/>
      <h3> Enter the location to search restaurants for: </h3>
      <CityForm cities = {this.props.cities} citySubmit = {this.selectCity.bind(this)}/>
      <Map centerlat={this.state.centerlat} centerlong={this.state.centerlong}/>
    </div>)
  }
}

ReactDOM.render(<App cities = {exampleCities.exampleCities} />, document.getElementById('app'));




