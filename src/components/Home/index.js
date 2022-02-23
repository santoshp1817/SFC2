import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import plm from '../../assets/plm.mp4'
// import './App.css';
import Autocomplete from "react-google-autocomplete";
import SimpleMap from '../../SimpleMap';
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
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
        <div style={{ margin: 30 }}>
            <div style={{ marginTop: 80 }}>

                <GooglePlacesAutocomplete
                    apiKey={`AIzaSyD3ggD8up3GhF-bPYrxIJKxXe4EUQbj6-s`}
                    selectProps={{
                        value,
                        onChange: setValue,
                    }}
                />
            </div>


            <div style={{ width: '100%', height: '400px' }}>
                {geoDetails.lat ? <SimpleMap value={value.label} geoDetails={geoDetails} /> : null}
            </div>
        </div>
    )
}
