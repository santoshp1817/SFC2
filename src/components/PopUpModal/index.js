import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Dashboard from '../Dashboard';
import DashboardChart from '../Chart/DashboardChart';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  height: '70%'
};

export default function PopUpModal({ open, handleCloseModal, modalHeading, showChartInModal }) {
  // const [open, setOpen] = React.useState(open);
  // const handleOpen = () => setOpen(open);
  const handleClose = () => {
    // setOpen(false)
    console.log('modal closed')
    handleCloseModal()
  }

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: showChartInModal ? '60%' : 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          height: showChartInModal ? '70%' : 150
        }}>
          <Typography sx={{ display: 'flex', justifyContent: 'center' }} id='modal-modal-title' variant='h6' component='h2'>
            {modalHeading}
          </Typography>
          {showChartInModal && <DashboardChart />}


        </Box>
      </Modal>
    </div>
  );
}
