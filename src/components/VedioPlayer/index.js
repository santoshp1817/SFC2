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
                    controls={false}
                    className="react-player"
                    volume={0} onReady={handleOnReady}
                    playing={playing}
                    fileConfig={{
                        attributes: {
                            style: {
                                display: 'block',
                                width: 'auto',
                                height: 'auto'
                            }
                        }
                    }}
                    // wrapper={"audio"}
                    // progressInterval={200}
                    // config={{
                    //     file: {
                    //         attributes: { preload: "auto" },
                    //         forceAudio: true,
                    //     },
                    // }}
                    url={plm} height="400px" width={"100%"} loop={true}
                />
            </div >

            {/* <div
                style={{
                    display: `flex`,
                    minHeight: `100vh`,
                    background: `black`,
                }}
            >
                <div
                    style={{
                        width: `90%`,
                        maxWidth: 1000,
                        margin: `auto`,
                    }}
                >
                    <div
                        style={{
                            position: `relative`,
                            paddingTop: `56.25%`,
                        }}
                    >
                        <ReactPlayer
                            controls={false}
                            className="react-player"
                            volume={0} onReady={handleOnReady}
                            playing={playing}
                            fileConfig={{
                                attributes: {
                                    style: {
                                        display: 'block',
                                        width: 'auto',
                                        height: 'auto'
                                    }
                                }
                            }}

                            url={plm} height="70%" width={"100%"} loop={true}
                        />
                    </div>
                </div>
            </div> */}

        </>

    )
}
