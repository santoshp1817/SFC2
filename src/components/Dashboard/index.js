import React, { useState } from 'react'
import ButtonAppBar from '../AppBar'
import dashboard from '../../assets/dashboard.jpeg'
import loc from '../../assets/loc.svg'
import BasicTable from '../../Table'
import DashboardTableComp from '../DashboardTableComp'
import AnyReactComponent from '../AnyReactComponent/AnyReactComponent'
export default function Dashboard() {
  const [places, setPlaces] = useState([
    {
      lat: '44.9206673',
      lng: '-92.961875',
      label: 'Windgate Rd',
      name: 'node 1',
      noise: 'yes',
      alarm: 'yes',
      top: -400,
      left: 150,
      id: 1

    },
    {
      lat: '100.9214834',
      lng: '-92.957287',
      label: 'Leann Dr',
      name: 'node 2',
      noise: 'no',
      alarm: 'yes',
      top: -100,
      left: 200,
      id: 2
    },
    {
      lat: '44.9215549',
      lng: '-92.9844015',
      label: 'Century Ave S',
      name: 'node 3',
      noise: 'no',
      alarm: 'yes',
      top: 0,
      left: 1100,
      id: 3
    },
  ])
  const handlePlacesCallback = (childData) => {
    setPlaces(childData)
  }
  const [showTable, setShowTable] = useState(false);
  const [nodeData, setNodeData] = useState([]);
  const handleMarkerClick = (item) => {
    console.log('map', item.id);
    setNodeData([item])
    setShowTable(true)

  }
  return (
    <>
      {/* <ButtonAppBar /> */}
      <div style={{ marginTop: 0, marginLeft: 0 }}>
        <img src={dashboard} alt="3M" width='100%' height='400 px' />
        <h3 style={{ marginLeft: 464 }}>Select any FCM node to view its details</h3>
        {/* <div style={{ marginTop: -200, marginLeft: 100 }}>
          <img src={loc} alt="3M" width='50 px' height='50 px' />
        </div>
        <div style={{ marginTop: -200, marginLeft: 200 }}>
          <img src={loc} alt="3M" width='50 px' height='50 px' />
        </div>
        <div style={{ marginTop: -100, marginLeft: 1100 }}>
          <img src={loc} alt="3M" width='50 px' height='50 px' />
        </div>
        <div style={{ marginTop: -100, marginLeft: 600 }}>
          <img src={loc} alt="3M" width='50 px' height='50 px' />
        </div>   */}
        {places.map(item => (
          // <AnyReactComponent
          //   lat={item?.lat}
          //   lng={item?.lng}
          //   text={item?.label}
          //   onMarkerClick={() => handleMarkerClick(item)}
          // />
          <div style={{ marginTop: item.top, marginLeft: item.left, cursor: 'pointer' }} onClick={() => handleMarkerClick(item)}>
            <img src={loc} alt="3M" width='50 px' height='50 px' />
          </div>
        ))}
        {showTable && <DashboardTableComp nodeData={nodeData} places={places} handlePlacesCallback={handlePlacesCallback} setNodeData={setNodeData} />}
      </div>
    </>
  )
}
