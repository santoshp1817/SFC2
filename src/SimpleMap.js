import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react';
import AnyReactComponent from './components/AnyReactComponent/AnyReactComponent';
import BasicTable from './Table';
// import { GoogleMap, Marker } from "react-google-maps"
const places = [
  {
    lat: '44.9206673',
    lng: '-92.961875',
    label: 'Windgate Rd',
    name: 'node 1',
    noise: 'yes',
    alarm: 'yes'

  },
  {
    lat: '44.9214834',
    lng: '-92.957287',
    label: 'Leann Dr',
    name: 'node 2',
    noise: 'no',
    alarm: 'no'
  },
  {
    lat: '44.9215549',
    lng: '-92.9844015',
    label: 'Century Ave S',
    name: 'node 2',
    noise: 'no',
    alarm: 'no'
  },
]
export default function SimpleMap({ value, geoDetails }) {
  const [showTable, setShowTable] = useState(false);
  const [nodeData, setNodeData] = useState({});
  console.log('pp', value, geoDetails);

  const handleMarkerClick = (item) => {
    console.log('map', item);
    setNodeData(item)
    setShowTable(true)

  }
  return (
    <>

      <GoogleMapReact
        bootstrapURLKeys={{ key: `` }}
        center={{
          lat: geoDetails.lat,
          lng: geoDetails.lng
        }}
        zoom={14}
      // onClick={handleMapClick}
      >
        <AnyReactComponent
          lat={geoDetails.lat}
          lng={geoDetails.lng}
          text={'current Location'}
          val={true}
        />
        {geoDetails.lat && places.map(item => (

          <AnyReactComponent
            lat={item.lat}
            lng={item.lng}
            text={item.label}
            onMarkerClick={() => handleMarkerClick(item)}
          />


        ))
        }
      </GoogleMapReact>
      <h3 style={{ display: 'flex', justifyContent: 'center' }}>Search & Select any FCM node to view its details</h3>

      {showTable && <BasicTable nodeData={nodeData} />}
    </>
  )
}
