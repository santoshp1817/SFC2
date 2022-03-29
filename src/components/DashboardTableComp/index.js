import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import TableHeaderCell from '@mui/material/TableHeaderCell'
// import Paper from '@mui/material/Paper';
import sound from "../../assets/sound.png";
import PopUpModal from '../PopUpModal';
import BarChartIcon from '@mui/icons-material/BarChart';
import { IconButton } from '@mui/material';
export default function DashboardTableComp({ nodeData, places, handlePlacesCallback, setNodeData, handleShowTableCallback }) {
  const [open, setOpen] = useState(false)
  const [modalHeading, setModalHeading] = useState('')
  const handleCloseModal = () => {
    setOpen(false)
  }
  const [showChartInModal, setShowChartInModal] = useState(true)
  const handleAlarmClick = (node) => {
    setShowChartInModal(false)

    setModalHeading('Acknowledged')
    console.log('clicked', node)
    let temp = [...places]
    const res = temp.filter(data => data.id === node.id).map(item => ({

      ...item,
      alarm: 'no',
      color: 'green'
    }))
    console.log('res', res)
    setNodeData(res)
    // temp = [...places]
    // const placesRes = temp.map(item => ({

    //   ...item,
    //   color: item.id === node.id ? 'green' : item.color
    // }))
    const placesRes = temp.filter(item => item.id !== node.id)
    handlePlacesCallback(placesRes)
    setOpen(true)
  }
  const handleChartIcon = () => {
    setOpen(true)
    setModalHeading('')
    setShowChartInModal(true)
    handleShowTableCallback(false)
  }
  return (
    <div style={{ marginTop: 0, marginLeft: 9, position: 'relative' }}>
      <TableContainer sx={{ marginLeft: -0.50 }} >
        <Table sx={{ border: '2px solid black' }} aria-label="simple table" size='large'>
          <TableHead >
            <TableRow sx={{
              backgroundColor: "lightBlue",
              borderBottom: "3px solid black",
              borderTop: "2px solid black",
              "& th": {
                fontSize: "1.25rem",
                color: "rgb(101,160,227)"
              },
              // maxHeight: 30

            }}>

              <TableCell sx={{

                width: '100%',
                backgroundColor: "lightBlue",
                display: 'flex',
                justifyContent: 'right',
                flexDirection: 'row',
                height: 80,
                marginTop: -2,
                // marginLeft: 50


              }}> <h3 style={{
                color: 'white',
                paddingLeft: 80

              }}>FPC Workcenter Data</h3></TableCell>
              <TableCell sx={{

                backgroundColor: "lightBlue",

              }} ></TableCell>



            </TableRow>
          </TableHead>
          <TableBody>


            <TableRow
              key={nodeData[0]?.name}

            >

              <TableCell sx={{
                paddingLeft: '80px',
                borderRight: "2px solid black",
                backgroundColor: "#FFFFFF",
                fontSize: "1.1rem",
                height: 60,
                width: 100,


              }}>{"Name"}</TableCell>
              <TableCell sx={{
                paddingLeft: '80px',
                borderRight: "2px solid black",
                backgroundColor: "#FFFFFF",
                fontSize: "1.1rem",
                height: 60,
                width: 120,


              }}>{nodeData[0]?.name}</TableCell>

            </TableRow>

            <TableRow>

              <TableCell sx={{
                paddingLeft: '80px',
                borderRight: "2px solid black",
                backgroundColor: "#DBE6EC",
                fontSize: "1.1rem",
                height: 60,
                width: 100,


              }}>{"Noise"}</TableCell>
              <TableCell sx={{
                paddingLeft: '80px',
                borderRight: "2px solid black",
                backgroundColor: "#DBE6EC",
                fontSize: "1.1rem",
                height: 40,
                width: 120,
                // display: 'flex'


              }}>{nodeData[0]?.noise}<span style={{ cursor: 'pointer', display: 'flex', marginTop: -30, paddingLeft: 50 }}><span style={{ margin: 0 }} className={nodeData[0]?.color} onClick={() => handleAlarmClick(nodeData[0])} ></span></span></TableCell>
            </TableRow>

            <TableRow>

              <TableCell sx={{
                paddingLeft: '80px',
                borderRight: "2px solid black",
                backgroundColor: "#FFFFFF",
                fontSize: "1.1rem",
                height: 60,
                width: 100,


              }}>{"Alarm"}</TableCell>
              <TableCell sx={{
                paddingLeft: '80px',
                borderRight: "2px solid black",
                backgroundColor: "#FFFFFF",
                fontSize: "1.1rem",
                height: 60,
                width: 120,


              }}>{nodeData[0]?.alarm}</TableCell>



            </TableRow>


          </TableBody>
        </Table>
        {/* {open && <PopUpModal open={open} handleCloseModal={handleCloseModal} modalHeading={modalHeading} showChartInModal={showChartInModal} />} */}
      </TableContainer >
    </div >
  )
}
