import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import plm from '../../assets/plm.mp4'
import './player.css'
export default function VedioPlayer() {

    const [playing, setPlaying] = useState(false);
    const handleOnReady = () => {
        setTimeout(() => {
            setPlaying(true)
        }, 100);
    }
    return (
        <>

            <div className="player-wrapper">
                <ReactPlayer
                    className="react-player"
                    volume={0} onReady={handleOnReady}
                    playing={playing}
                    url={plm} height="400px" width={"100%"} loop={true}
                />
            </div >


        </>

    )
}
