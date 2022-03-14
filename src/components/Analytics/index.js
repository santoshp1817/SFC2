import React from 'react'
import './Analytics.css'
import { Grid } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { DateRange } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { DateRangePicker } from 'react-date-range';
import { Typography } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { Menu } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { Switch } from '@mui/material';
import BarChartIcon from '@material-ui/icons/BarChart';
import TimelineIcon from '@material-ui/icons/Timeline';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {

  ListItemText
  // InputLabel
  // Input
} from '@material-ui/core';
export default function Analytics() {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ marginLeft: 10, marginTop: 62 }}>
      <div className="contentPageHeader">
        <h2>DashBoard</h2>
      </div>
      <Grid
        container
        spacing={2}
        justify="flex-start"
        style={{
          height: '100%',
          marginLeft: '1rem',
          maxWidth: '97%',
          marginTop: '1rem'
        }}
        alignContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={12}>
          <div style={{ marginLeft: '1rem' }}>
            <div style={{ marginLeft: '0.8rem' }}>Date Range:</div>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <DateRange />
            </IconButton>

            {open && (
              <Button variant="outlined" >
                Filter
              </Button>
            )}
          </div>

          {open && (
            <DateRangePicker
              // onChange={item => {
              //   const newItem = item;
              //   newItem.selection.endDate = moment(item.selection.endDate)
              //     .set({
              //       h: 23,
              //       m: 59,
              //       s: 59
              //     })
              //     .toDate();
              //   //   .toString();
              //   setDateRange([newItem.selection]);
              // }}
              showSelectionPreview
              // ranges={dateRange}
              direction="horizontal"
            />
          )}

          <div className="dashboardContent" style={{ width: '100%' }}>
            <Typography variant="h5" gutterBottom>
              Performance
            </Typography>
            <div className="analyticsBoxesWrapper" style={{ width: '150%' }}>
              <div className="analyticsBox">
                <p className="analyticsBoxName">Total Sales </p>
                <p className="boldText analyticsBoxNumber">
                  {/* <FontAwesomeIcon icon={faRupeeSign} />{' '} */}
                  {/* {state.totalSaleAmount} */}
                  1000
                </p>
                <p className="analyticsBoxDesc">Some Text</p>
              </div>

              <div className="analyticsBox">
                <p className="analyticsBoxName">Net Sales</p>
                <p className="boldText analyticsBoxNumber">
                  {/* <FontAwesomeIcon icon={faRupeeSign} />{' '} */}
                  {/* {state.totalNetSaleAmount} */}5000
                </p>
                <p className="analyticsBoxDesc">Some Text</p>
              </div>

              <div className="analyticsBox">
                <p className="analyticsBoxName">Orders</p>
                <p className="boldText analyticsBoxNumber">
                  {/* {state.ordersCount} */}600
                </p>
                <p className="analyticsBoxDesc">Some Text</p>
              </div>

              <div className="analyticsBox">
                <p className="analyticsBoxName">Average order value</p>
                <p className="boldText analyticsBoxNumber">
                  {/* <FontAwesomeIcon icon={faRupeeSign} />{' '}
                  {state.averageOrderValue
                    ? state.averageOrderValue.toFixed(2)
                    : state.averageOrderValue} */}
                  600
                </p>
                <p className="analyticsBoxDesc">Some Text</p>
              </div>
            </div>

            <div className="analyticsBoxesWrapper" style={{ width: '150%' }}>
              <div className="analyticsBox">
                <p className="analyticsBoxName">Items Sold</p>
                <p className="boldText analyticsBoxNumber">
                  {/* {state.itemSoldCount} */}800
                </p>
                <p className="analyticsBoxDesc">Some Text</p>
              </div>

              <div className="analyticsBox">
                <p className="analyticsBoxName">Total tax</p>
                <p className="boldText analyticsBoxNumber">
                  {/* <FontAwesomeIcon icon={faRupeeSign} />{' '}
                  {state.totalTaxAmountSum} */}
                  700
                </p>
                <p className="analyticsBoxDesc">Some Text</p>
              </div>

              <div className="analyticsBox">
                <p className="analyticsBoxName">Visitors</p>
                <p className="boldText analyticsBoxNumber">
                  {/* {state.productMaxSaleRes} */}
                </p>
                <p className="analyticsBoxDesc">Some Text</p>
              </div>

              <div className="analyticsBox">
                <p className="analyticsBoxName">Views</p>
                <p className="boldText analyticsBoxNumber">
                  {/* {state.totalSaleAmount} */}
                </p>
                <p className="analyticsBoxDesc">Some Text</p>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid item xs={12}>
          <div
            style={{
              padding: '5px',

              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <div
              style={{
                padding: '5px'
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                style={{ marginLeft: '50em' }}
              >
                Charts
              </Typography>
            </div>

            <div
              style={{
                padding: '5px',
                marginRight: '1em'
              }}
            >
              <FormControl style={{ marginTop: '6px' }}>
                {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}

                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={state.criteria}
                  // onChange={handleCriteriaChange}
                  // defaultValue={state.criteria}
                  name="criteria"
                >
                  <MenuItem value="By day">By day</MenuItem>
                  <MenuItem disabled={false} value="By week">
                    By week
                  </MenuItem>
                  <MenuItem disabled={false} value="By month">
                    By month
                  </MenuItem>
                </Select>
              </FormControl>
              <IconButton
                name="details"
                onClick={() => {
                  // setBarChart(false);
                }}
              >
                <TimelineIcon />
              </IconButton>
              <IconButton
                name="details"
                onClick={() => {
                  // setBarChart(true);
                }}
              >
                <BarChartIcon />
              </IconButton>

              <IconButton name="details"
              // onClick={handleClickCharts}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                // anchorEl={anchorEl2}
                keepMounted
              // open={Boolean(anchorEl2)}
              // open={true}
              // onClose={handleCloseCharts}
              >
                <MenuItem
                // onClick={handleClickCharts}
                >
                  <ListItemText primary="Total Sales" />
                  <Switch
                    // checked={leaderState.totalSales}
                    color="primary"
                    name="totalSales"
                    // onChange={handleChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                </MenuItem>

                <MenuItem
                //  onClick={handleClickCharts}
                >
                  <ListItemText primary="Net Sales" />
                  <Switch
                    // checked={leaderState.netSales}
                    color="primary"
                    name="netSales"
                    // onChange={handleChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                </MenuItem>


              </Menu>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
