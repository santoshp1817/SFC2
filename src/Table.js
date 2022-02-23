import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import TableHeaderCell from '@mui/material/TableHeaderCell'
// import Paper from '@mui/material/Paper';
import sound from "./assets/sound.png";

export default function BasicTable({ nodeData }) {
  console.log('nd', nodeData)
  return (
    <TableContainer >
      <Table sx={{ minWidth: 800, border: '2px solid black' }} aria-label="simple table" size='large'>
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
              justifyContent: 'flex-end',
              flexDirection: 'row',
              height: 80,
              marginTop: -2,


            }}> <h3 style={{
              color: 'white',

            }}>FPC Workcenter Data</h3></TableCell>
            <TableCell sx={{

              backgroundColor: "lightBlue",

            }} ></TableCell>



          </TableRow>
        </TableHead>
        <TableBody>


          <TableRow
            key={nodeData.name}

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


            }}>{nodeData.name}</TableCell>

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
              height: 60,
              width: 120,


            }}>{nodeData.noise}<img src={sound} alt="3M" width='50' height='50' /></TableCell>
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


            }}>{nodeData.alarm}</TableCell>



          </TableRow>


        </TableBody>
      </Table>
    </TableContainer >
  )
}