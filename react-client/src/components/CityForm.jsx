import React from 'react';
import CityFormItem from './CityFormItem.jsx';

const CityForm = (props) => (
<form>
<select name="select" id = "selectcity">
{props.cities.map(city =>
 <CityFormItem city = {city}/>
 )};
</select>
<input type="Button" value="Submit" onClick={props.citySubmit}/>
</form>
);

export default CityForm;

