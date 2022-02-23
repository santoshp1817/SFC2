import React, { useState } from 'react';
// import UseAnimations from "react-useanimations";
import sound from "./assets/sound.png";
import loc from "./assets/loc.svg";
const AnyReactComponent = ({ text, lat, lng, onMarkerClick, val }) => {

  return (
    <>
      <div style={{
        // color: 'white',
        // background: 'grey',
        // padding: '15px 10px',
        // display: 'inline-flex',
        // textAlign: 'center',
        // alignItems: 'center',
        // justifyContent: 'center',
        // borderRadius: '100%',
        // transform: 'translate(-50%, -50%)'
        height: "2px"
      }}

        onClick={onMarkerClick} >
        {/* {text} */}
        {val ? <img src={loc} alt="3M" width='50' height='50' /> : <img src={sound} alt="3M" width='50' height='50' />}
      </div>

    </>
  )
}
export default AnyReactComponent;