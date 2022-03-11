import React, { useState, useEffect } from 'react';
import SimpleMap from '../../SimpleMap';
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import VedioPlayer from '../VedioPlayer';
export default function Home() {
  const [value, setValue] = useState('');
  const [geoDetails, setGeoDetails] = useState({
    lat: '',
    lng: ''
  })

  useEffect(() => {

    console.log('home');
    if (value) {
      geocodeByAddress(value.label)
        .then(results => getLatLng(results[0]))
        .then(({ lat, lng }) => {
          console.log('Successfully got latitude and longitude', { lat, lng })
          setGeoDetails({
            ...geoDetails,
            lat,
            lng,
          })
        }

        );
    }

  }, [value])
  return (
    <>
      <div style={{ marginLeft: 10, backgroundColor: 'black' }}>
        <div style={{ marginTop: 64, border: '2px solid blue' }}>

          <GooglePlacesAutocomplete
            apiKey={``}
            selectProps={{
              value,
              onChange: setValue,
            }}
          />
        </div>


        <div style={{ width: '100%', height: '400px', border: '2px solid blue', borderTop: 'none' }}>
          {geoDetails.lat ? <SimpleMap value={value.label} geoDetails={geoDetails} /> : <div style={{ width: '100%' }}>
            <VedioPlayer />
          </div>}
        </div>
      </div>
      {!geoDetails.lat && <h3 style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>Search & Select any FCM node to view its details</h3>}
    </>
  )
}
