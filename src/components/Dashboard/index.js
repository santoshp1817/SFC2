import React, { useState } from 'react'
import ButtonAppBar from '../AppBar'
import dashboard from '../../assets/dashboard.jpeg'
import loc from '../../assets/loc.svg'
import BasicTable from '../../Table'
import DashboardTableComp from '../DashboardTableComp'
import AnyReactComponent from '../AnyReactComponent/AnyReactComponent'
import '../AnyReactComponent/animationGreen.scss'
import '../AnyReactComponent/animationRed.scss'
import { alarmPlaces } from '../../userConfig'
import MiniTableAndChart from '../MiniTableAndChart'
import DashboardChart from '../Chart/DashboardChart'
import { selectAnyNodeHeading } from '../../userConfig'
export default function Dashboard() {
  const [miniTable, setMiniTable] = useState(false)
  const [color, setColor] = useState('red')
  const [places, setPlaces] = useState(alarmPlaces)
  const handlePlacesCallback = (childData) => {
    setPlaces(childData)
  }
  const [showTable, setShowTable] = useState(false);
  const [nodeData, setNodeData] = useState([]);
  const handleMarkerClick = (item) => {
    console.log('map', item.id);
    setNodeData([item])
    // setShowTable(true)
    setMiniTable(true)

  }
  const handleShowTableCallback = (childData) => {
    setShowTable(childData)
    setMiniTable(true)
  }

  return (
    <>
      {/* <ButtonAppBar /> */}
      <div style={{ marginTop: 41, marginLeft: 0 }}>
        <img src={dashboard} alt="3M" width='100%' height='320 px' />
        <h3 style={{ marginLeft: 460 }}>{selectAnyNodeHeading}</h3>
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
          <div style={{ marginTop: item.top, marginLeft: item.left, cursor: 'pointer', position: 'absolute' }} onClick={() => handleMarkerClick(item)}>
            {/* <img src={loc} alt="3M" width='50 px' height='50 px' /> */}
            <div className={item.color}>

            </div>
          </div>
        ))}
        {showTable ? <DashboardTableComp nodeData={nodeData} places={places} handlePlacesCallback={handlePlacesCallback} setNodeData={setNodeData} handleShowTableCallback={handleShowTableCallback} /> : null}
        {miniTable && <MiniTableAndChart nodeData={nodeData} places={places} handlePlacesCallback={handlePlacesCallback} setNodeData={setNodeData} />}
      </div>
    </>
  )
}
