/* eslint-disable no-return-assign */
import React, { useState, useEffect } from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  Menu,
  // Checkbox,
  Switch,
  ListItemText
  // InputLabel
  // Input
} from '@material-ui/core';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
// import { useDispatch } from 'react-redux';
import { Bar, Line } from 'react-chartjs-2';
import BarChartIcon from '@material-ui/icons/BarChart';
import TimelineIcon from '@material-ui/icons/Timeline';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import moment from 'moment';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import DateRangeIcon from '@material-ui/icons/DateRange';
// import { makeStyles } from '@material-ui/core/styles';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
// import MyAppBar from '../../../blocks/MyAppBar';
// import DashboardFooter from '../../../blocks/DashboardFooter';
// import SideNav from '../../../blocks/SideNav';

// import { axiosInstance } from '../../../../util/axios';
// import {
//   startLoading,
//   stopLoading,
//   setMessage
// } from '../../../../redux/loader/loderActions';

import DashboardChart from '../Chart/DashboardChart';

// const pdfConverter = require('jspdf');
import './Analytics.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
// import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
function Analytics() {
  const [open, setOpen] = useState(false);
  const [barChart, setBarChart] = useState(true);
  const [leaderState, setLeaderState] = useState({
    topProducts: true,
    topCategories: true,
    topCustomers: false,
    topcoupons: false,
    totalSales: true,
    netSales: true,
    orders: true,
    averageOrderValue: true,
    itemsSold: true,
    returns: true,
    discountedOrders: true,
    grossDiscounted: true,
    netDiscountAmount: true,
    totalTax: true,
    orderTax: true,
    shippingTax: true,
    shipping: true,
    downloads: true,
    grossSales: false,
    visitors: false,
    views: false
  });
  // const [switchMenu, setSwitchMenu] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  // const dispatch = useDispatch();

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleClickCharts = e => {
    setAnchorEl2(e.currentTarget);
  };

  const handleClose = () => {
    console.log('hee');
    setAnchorEl(null);
  };

  const handleCloseCharts = () => {
    console.log('hee');
    setAnchorEl2(null);
  };
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [state, setState] = useState({
    userCount: 0,
    totalSaleAmount: 0,
    productMaxSaleRes: 0,
    ordersCount: 0,
    orderData: [],
    orderLabel: [],
    criteria: 'By day',
    orderRawData: {},
    days: '',
    weeks: '',
    months: '',
    itemSoldCount: 0,
    itemSoldData: [],
    itemSoldLabel: [],
    itemRawData: {},
    totalTaxRawData: {},
    totalTaxLabel: [],
    totalTaxData: [],
    totalTaxAmountSum: 0,
    totalNetSaleAmount: 0,
    averageOrderValue: 0,
    totalSaleRawData: {},
    totalSaleLabel: [],
    totalSaleData: [],
    netSaleRawData: {},
    netSaleLabel: [],
    netSaleData: [],
    averageOrderRawData: {},
    averageOrderLabel: [],
    averageOrderData: [],
    discountedOrdersRawData: {},
    discountedOrdersLabel: [],
    discountedOrdersData: [],
    returnsRawData: {},
    returnsLabel: [],
    returnsData: [],
    grossDiscountedRawData: {},
    grossDiscountedLabel: [],
    grossDiscountedData: [],
    shippingRawData: {},
    shippingLabel: [],
    shippingData: [],
    orderTaxRawData: [],
    orderTaxLabel: [],
    orderTaxData: []
  });

  function dataWeeklyWise(data) {
    let sum = 0;

    const weekObject = {};

    // eslint-disable-next-line no-restricted-syntax
    for (const key of Object.keys(data)) {
      sum += data[key];

      if (new Date(key).getDay() === 0) {
        weekObject[key] = sum;
        console.log('sun', key);
        sum = 0;
      }
    }
    console.log(weekObject);
    return weekObject;
  }
  function dataMonthlyWise(data) {
    let sum = 0;

    const monthObject = {};

    // eslint-disable-next-line no-restricted-syntax
    for (const key of Object.keys(data)) {
      const lastMonthDay = new Date(
        new Date(key).getFullYear(),
        new Date(key).getMonth() + 1,
        0
      );
      sum += data[key];
      if (lastMonthDay.toString() === new Date(key).toString()) {
        monthObject[key] = sum;
        sum = 0;
      }
    }
    console.log(monthObject);
    return monthObject;
  }

  const handleDwnld = () => {
    // const input = window.document.getElementById('divToPDF');
    // html2canvas(input).then(canvas => {
    //   const imgData = canvas.toDataURL('image/png');
    //   // eslint-disable-next-line new-cap
    //   const pdf = new jsPDF('l', 'pt');
    //   pdf.text('Chart Data', 10, 10);
    //   pdf.addImage(imgData, 'JPEG', 15, 110, 400, 250);
    //   pdf.save('test.pdf');
    // });
    html2canvas(window.document.getElementById('divToPDF')).then(canvas => {
      document.body.appendChild(canvas); // if you want see your screenshot in body.
      const imgData = canvas.toDataURL('image/png');
      canvas.toBlob(function (blob) {
        saveAs(blob, 'screenshot.png');
      }, 'image/png');
      // eslint-disable-next-line new-cap
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'JPEG', 0, 0, 200, 350);
      pdf.save('download.pdf');
    });
  };

  const handleCriteriaChange = e => {
    console.log('ee', e.target.value);

    setState({
      ...state,
      criteria: e.target.value
    });
  };
  useEffect(() => {
    console.log('ch', state.criteria);


  }, [state.criteria]);

  const handleFilter = async () => {
    setOpen(!open);

    const weeks =
      moment(dateRange[0].endDate).diff(
        moment(dateRange[0].startDate),
        'weeks'
      ) + 1;

    const months =
      moment(dateRange[0].endDate).diff(
        moment(dateRange[0].startDate),
        'months'
      ) + 1;

    const payload = {
      startDate: dateRange[0].startDate,
      endDate: dateRange[0].endDate
    };


    console.log('pp', payload);
    const res = 'hi'

    if (res) {
      const { data } = res.data.response;
      // console.log('initial', res.data.response.data.orderData);
      // dataWeeklyWise(res.data.response.data.orderData);
      // dataMonthlyWise(res.data.response.data.orderData);
      // const label = Object.keys(res.data.response.data.orderData);
      // const data = Object.values(res.data.response.data.orderData);
      setState({
        ...state,
        userCount: data.userCount,
        totalSaleAmount: data.totalSaleAmount,
        productMaxSaleRes: data.productMaxSaleRes ? data.productMaxSaleRes : 0,
        ordersCount: data.ordersCount,
        orderData: Object.values(data.orderData),
        orderLabel: Object.keys(data.orderData),
        orderRawData: data.orderData,
        weeks,
        months,
        criteria: 'By day',
        itemSoldCount: data.itemSoldCount,
        itemSoldData: Object.values(data.itemSoldCountData),
        itemSoldLabel: Object.keys(data.itemSoldCountData),
        itemRawData: data.itemSoldCountData,
        totalTaxRawData: data.totalTaxObject,
        totalTaxLabel: Object.keys(data.totalTaxObject),
        totalTaxData: Object.values(data.totalTaxObject),
        totalTaxAmountSum: data.totalTaxAmountSum,
        totalNetSaleAmount: data.totalNetSaleAmount,
        averageOrderValue: data.averageOrderValue,
        totalSaleRawData: data.saleTotalObject,
        totalSaleLabel: Object.keys(data.saleTotalObject),
        totalSaleData: Object.values(data.saleTotalObject),
        netSaleRawData: data.netSaleObject,
        netSaleLabel: Object.keys(data.netSaleObject),
        netSaleData: Object.values(data.netSaleObject),
        averageOrderRawData: data.averageOrderObject,
        averageOrderLabel: Object.keys(data.averageOrderObject),
        averageOrderData: Object.values(data.averageOrderObject),
        discountedOrdersRawData: data.discountedOrdersCountObject,
        discountedOrdersLabel: Object.keys(data.discountedOrdersCountObject),
        discountedOrdersData: Object.values(data.discountedOrdersCountObject),
        returnsRawData: data.returnsObject,
        returnsLabel: Object.keys(data.returnsObject),
        returnsData: Object.values(data.returnsObject),
        grossDiscountedRawData: data.grossDiscountedObject,
        grossDiscountedLabel: Object.keys(data.grossDiscountedObject),
        grossDiscountedData: Object.values(data.grossDiscountedObject),
        shippingRawData: data.shippingObject,
        shippingLabel: Object.keys(data.shippingObject),
        shippingData: Object.values(data.shippingObject),
        orderTaxRawData: data.orderTaxObject,
        orderTaxLabel: Object.keys(data.orderTaxObject),
        orderTaxData: Object.keys(data.orderTaxObject)
      });

    } else {

    }
  };

  const handleChange = e => {
    setLeaderState({ ...leaderState, [e.target.name]: e.target.checked });
  };
  return (
    <div >

      <div >
        <div >
          <h2 className="contentPageHeader" style={{ marginTop: 50 }}>Analytics</h2>
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
            <div
              style={{ marginLeft: '1rem' }}
            >
              <div
                style={{ marginLeft: '0.8rem' }}
              >Date Range:</div>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <DateRangeIcon />
              </IconButton>

              {open && (
                <Button variant="outlined" onClick={handleFilter}>
                  Filter
                </Button>
              )}
            </div>

            {open && (
              <DateRangePicker
                onChange={item => {
                  const newItem = item;
                  newItem.selection.endDate = moment(item.selection.endDate)
                    .set({
                      h: 23,
                      m: 59,
                      s: 59
                    })
                    .toDate();
                  //   .toString();
                  setDateRange([newItem.selection]);
                }}
                showSelectionPreview
                ranges={dateRange}
                direction="horizontal"
              />
            )}

            <div className="dashboardContent"
              style={{ width: '100%' }}
            >
              <Typography variant="h5" gutterBottom>
                Performance
              </Typography>
              <div className="analyticsBoxesWrapper"
                style={{ width: '100%' }}
              >
                <div className="analyticsBox">
                  <p className="analyticsBoxName">Total Sales </p>
                  <p className="boldText analyticsBoxNumber">
                    {/* <FontAwesomeIcon icon={faRupeeSign} />{' '} */}
                    1000
                  </p>
                  <p className="analyticsBoxDesc">Some Text</p>
                </div>

                <div className="analyticsBox">
                  <p className="analyticsBoxName">Net Sales</p>
                  <p className="boldText analyticsBoxNumber">
                    {/* <FontAwesomeIcon icon={faRupeeSign} />{' '} */}
                    1000
                  </p>
                  <p className="analyticsBoxDesc">Some Text</p>
                </div>

                <div className="analyticsBox">
                  <p className="analyticsBoxName">Orders</p>
                  <p className="boldText analyticsBoxNumber">
                    1000
                  </p>
                  <p className="analyticsBoxDesc">Some Text</p>
                </div>

                <div className="analyticsBox">
                  <p className="analyticsBoxName">Average order value</p>
                  <p className="boldText analyticsBoxNumber">
                    {/* <FontAwesomeIcon icon={faRupeeSign} />{' '} */}
                    1000
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
                  style={{ marginLeft: '1.5em' }}
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
                <FormControl
                  style={{ marginTop: '6px' }}
                >
                  {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}

                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={state.criteria}
                    onChange={handleCriteriaChange}
                    // defaultValue={state.criteria}
                    name="criteria"
                  >
                    <MenuItem value="By day">By day</MenuItem>
                    <MenuItem disabled={state.weeks < 2} value="By week">
                      By week
                    </MenuItem>
                    <MenuItem disabled={state.months < 2} value="By month">
                      By month
                    </MenuItem>
                  </Select>
                </FormControl>
                <IconButton
                  name="details"
                  onClick={() => {
                    setBarChart(false);
                  }}
                >
                  <TimelineIcon />
                </IconButton>
                <IconButton
                  name="details"
                  onClick={() => {
                    setBarChart(true);
                  }}
                >
                  <BarChartIcon />
                </IconButton>

                <IconButton name="details" onClick={handleClickCharts}>
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl2}
                  keepMounted
                  open={Boolean(anchorEl2)}
                  onClose={handleCloseCharts}
                >
                  <MenuItem onClick={handleClickCharts}>
                    <ListItemText primary="Total Sales" />
                    <Switch
                      checked={leaderState.totalSales}
                      color="primary"
                      name="totalSales"
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  </MenuItem>

                  <MenuItem onClick={handleClickCharts}>
                    <ListItemText primary="Net Sales" />
                    <Switch
                      checked={leaderState.netSales}
                      color="primary"
                      name="netSales"
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  </MenuItem>

                  <MenuItem onClick={handleClickCharts}>
                    <ListItemText primary="Orders" />
                    <Switch
                      checked={leaderState.orders}
                      color="primary"
                      name="orders"
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  </MenuItem>

                  <MenuItem onClick={handleClickCharts}>
                    <ListItemText primary="Average Order Value" />
                    <Switch
                      checked={leaderState.averageOrderValue}
                      color="primary"
                      name="averageOrderValue"
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  </MenuItem>
                  <MenuItem onClick={handleClickCharts}>
                    <ListItemText primary="Items Sold" />
                    <Switch
                      checked={leaderState.itemsSold}
                      color="primary"
                      name="itemsSold"
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  </MenuItem>

                  <MenuItem onClick={handleClickCharts}>
                    <ListItemText primary="Returns" />
                    <Switch
                      checked={leaderState.returns}
                      color="primary"
                      name="returns"
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  </MenuItem>

                  <MenuItem onClick={handleClickCharts}>
                    <ListItemText primary="Discounted Orders" />
                    <Switch
                      checked={leaderState.discountedOrders}
                      color="primary"
                      name="discountedOrders"
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  </MenuItem>

                  <MenuItem onClick={handleClickCharts}>
                    <ListItemText primary="Gross discounted" />
                    <Switch
                      checked={leaderState.grossDiscounted}
                      color="primary"
                      name="grossDiscounted"
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  </MenuItem>
                  <MenuItem onClick={handleClickCharts}>
                    <ListItemText primary="Total tax" />
                    <Switch
                      checked={leaderState.totalTax}
                      color="primary"
                      name="totalTax"
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  </MenuItem>

                  <MenuItem onClick={handleClickCharts}>
                    <ListItemText primary="Order tax" />
                    <Switch
                      checked={leaderState.orderTax}
                      color="primary"
                      name="orderTax"
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  </MenuItem>

                  <MenuItem onClick={handleClickCharts}>
                    <ListItemText primary="Shipping Tax" />
                    <Switch
                      checked={leaderState.shippingTax}
                      color="primary"
                      name="shippingTax"
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  </MenuItem>

                  <MenuItem onClick={handleClickCharts}>
                    <ListItemText primary="Shipping" />
                    <Switch
                      checked={leaderState.shipping}
                      color="primary"
                      name="shipping"
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  </MenuItem>
                  <MenuItem onClick={handleClickCharts}>
                    <ListItemText primary="Downloads" />
                    <Switch
                      checked={leaderState.downloads}
                      color="primary"
                      name="downloads"
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  </MenuItem>
                  <MenuItem onClick={handleClickCharts}>
                    <ListItemText primary="Gross Sales" />
                    <Switch
                      checked={leaderState.grossSales}
                      color="primary"
                      name="grossSales"
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  </MenuItem>

                  <MenuItem onClick={handleClickCharts}>
                    <ListItemText primary="Visitors" />
                    <Switch
                      checked={leaderState.visitors}
                      color="primary"
                      name="visitors"
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  </MenuItem>
                  <MenuItem onClick={handleClickCharts}>
                    <ListItemText primary="Views" />
                    <Switch
                      checked={leaderState.views}
                      color="primary"
                      name="views"
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </Grid>
        </Grid>

        {/* <div style={{}}> */}
        <div id="divToPDF">
          <Grid
            container
            spacing={1}
            justify="flex-start"
            style={{
              // height: '100%',
              // marginLeft: '0.5rem',
              maxWidth: '100%',
              marginTop: '1rem'
            }}
            alignContent="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={6}>
              <>
                {leaderState.totalSales ? (
                  <div className="analyticsBoxCharts">
                    <Typography
                      className="lowercase"
                      variant="h7"
                      gutterBottom
                    // style={{ display: 'flex', justifyContent: 'flex-start' }}
                    >
                      Total Sales
                    </Typography>

                    <DashboardChart />
                  </div>
                ) : null}
              </>

              <>
                {leaderState.netSales ? (
                  <div className="analyticsBoxCharts">
                    <Typography
                      className="lowercase"
                      variant="h7"
                      gutterBottom
                      style={{ display: 'flex', justifyContent: 'flex-start' }}
                    >
                      Net Sales
                    </Typography>
                    <DashboardChart />
                  </div>
                ) : null}
              </>
            </Grid>

            <Grid item xs={6}>
              <>
                {leaderState.orders ? (
                  <div className="analyticsBoxCharts">
                    <Typography
                      className="lowercase"
                      variant="h7"
                      gutterBottom
                      style={{ display: 'flex', justifyContent: 'flex-start' }}
                    >
                      Orders
                    </Typography>
                    <DashboardChart />
                  </div>
                ) : null}
              </>

              <>
                {leaderState.averageOrderValue ? (
                  <div className="analyticsBoxCharts">
                    <Typography
                      className="lowercase"
                      variant="h7"
                      gutterBottom
                      style={{ display: 'flex', justifyContent: 'flex-start' }}
                    >
                      Average Order Value
                    </Typography>
                    {/* <DashboardChart /> */}
                    <Line options={options} data={data} />;
                  </div>
                ) : null}
              </>
            </Grid>


          </Grid>
        </div>
        {/* </div> */}





      </div>
    </div>
  );
}

export default Analytics;
