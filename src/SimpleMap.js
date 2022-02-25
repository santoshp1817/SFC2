import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react';
import AnyReactComponent from './AnyReactComponent';
import BasicTable from './Table';
// import { GoogleMap, Marker } from "react-google-maps"
const places = [
  {
    lat: '12.9656106',
    lng: '77.5761364',
    label: 'A',
    name: 'node 1',
    noise: 'yes',
    alarm: 'yes'

  },
  {
    lat: '12.9697059',
    lng: '77.5842332',
    label: 'B',
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

      {showTable && <div style={{ marginLeft: -2, marginRight: -1.5 }}><BasicTable nodeData={nodeData} /> </div>}
    </>
  )
}
