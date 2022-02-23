import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Autocomplete from "react-google-autocomplete";
import SimpleMap from './SimpleMap';
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// import VedioPlayer from "./components/VedioPlayer";
import './Table'
import ButtonAppBar from './components/AppBar';
function App() {

  // const [value, setValue] = useState('');
  // const [geoDetails, setGeoDetails] = useState({
  //   lat: '',
  //   lng: ''
  // })

  // useEffect(() => {
  //   window.addEventListener('install', (event) => {
  //     console.log('service worker installed', event);
  //   })
  //   if (value) {
  //     geocodeByAddress(value.label)
  //       .then(results => getLatLng(results[0]))
  //       .then(({ lat, lng }) => {
  //         console.log('Successfully got latitude and longitude', { lat, lng })
  //         setGeoDetails({
  //           ...geoDetails,
  //           lat,
  //           lng,
  //         })
  //       }

  //       );
  //   }

  // }, [value])




  return (
    <>

      <div >
        <ButtonAppBar />
      </div>





    </>

  );
}

export default App;

