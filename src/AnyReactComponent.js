import React from 'react';
import sound from "./assets/sound.png";
import loc from "./assets/loc.svg";
const AnyReactComponent = ({ text, lat, lng, onMarkerClick, val }) => {

  return (
    <>
      <div style={{
        height: "2px"
      }}
        onClick={onMarkerClick} >
        {val ? <img src={loc} alt="3M" width='50' height='50' /> : <img src={sound} alt="3M" width='50' height='50' />}
      </div>

    </>
  )
}
export default AnyReactComponent;