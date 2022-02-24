import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Home from "../Home";
import SpeedIcon from '@mui/icons-material/Speed';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DevicesIcon from '@mui/icons-material/Devices';
import {
    Drawer,
    ListItemIcon,
    ListItemText,
    AppBar,
    Toolbar,
    List,
    CssBaseline,
    Typography,
    Divider,
    ListItem,
    IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import logo from '../../assets/3m.svg'
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        // backgroundColor: theme.palette.primary.main,
        // height: "100vh",
    },
    appBar: {
        // background: "transparent",
        backgroundColor: 'red',
        height: 50,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundImage: "url('https://images.pexels.com/photos/929382/pexels-photo-929382.jpeg?cs=srgb&dl=pexels-chris-leboutillier-929382.jpg&fm=jpg')"
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
        color: "white",
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        paddingTop: "0px",
        paddingBottom: "0px",
        paddingRight: "0px",
        paddingLeft: "0px",
    },
    empty: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: 0,
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -10,
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: -10,
    },
    labelColor: {
        color: "white",
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    whiteLabel: {
        color: "white",
    },
    textWrap: {
        color: "white",
        whiteSpace: "normal",
    },
    backGround: {
        // backgroundColor: 'red',
        // backgroundImage: "url('https://images.pexels.com/photos/929382/pexels-photo-929382.jpeg?cs=srgb&dl=pexels-chris-leboutillier-929382.jpg&fm=jpg')"
        // backgroundImage: "url(logo)"
        // backgroundImage: (props) =>
        //     props.darkMode ? `url(${backgroundDark})` : `url(${backgroundLight})`,
        backgroundImage: "url('https://images.pexels.com/photos/3044479/pexels-photo-3044479.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"
    },
    navbarContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "1200px",
        flexGrow: 1,
    },
    navbarTitle: {
        color: "white",
    },
    navbarIcons: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "250px",
    },
    navIconLink: {
        color: "white",
        textDecoration: "none",
    },
    navbarIcon: {
        fontSize: 30,
    },
    navbarLogo: { marginRight: "20px", height: "32px" },
    chip: {
        color: theme.palette.primary.main,
    },
    navIconColor: {
        color: "white",
    },
    sidebarIcon: {
        color: 'red',
    },
}));
export default function ButtonAppBar({ data }) {


    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [openQuickLink, setOpenQuickLink] = useState(false);
    const [openHelp, setOpenHelp] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setOpenQuickLink(false);
        setOpenHelp(false);
    };



    data = data === "" ? "No ID" : data;



    return (
        <div className={classes.root}>
            <CssBaseline />

            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >


                <Toolbar className={classes.backGround}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />

                    </IconButton>
                    <img src={logo} alt="3M" className={classes.navbarLogo} />
                    <div className={classes.navbarContainer}>
                        <Typography variant="h6" noWrap className={classes.navbarTitle}>
                            3M Smart Factory
                        </Typography>

                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                        [classes.backGround]: true,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton
                        onClick={handleDrawerClose}
                        className={classes.labelColor}
                    >
                        {theme.direction === "rtl" ? (
                            <ChevronRightIcon />
                        ) : (
                            <ChevronLeftIcon />
                        )}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem
                        button
                        key={"Dashboard"}
                    // onClick={handleOpenQuickLinkClick}
                    >
                        <ListItemIcon className={classes.whiteLabel}>
                            {/* <LinkIcon className={classes.sidebarIcon} /> */}
                            <IconButton><SpeedIcon /></IconButton>
                        </ListItemIcon>
                        <ListItemText
                            className={classes.whiteLabel}
                            primary={"Dashboard"}
                        />

                    </ListItem>
                    <Divider />
                    <ListItem
                        button
                        key={"Alarms"}
                    // onClick={handleOpenQuickLinkClick}
                    >
                        <ListItemIcon className={classes.whiteLabel}>
                            <IconButton><AccessAlarmsIcon /></IconButton>
                        </ListItemIcon>
                        <ListItemText
                            className={classes.whiteLabel}
                            primary={"Alarms"}
                        />

                    </ListItem>
                    <Divider />
                    <ListItem
                        button
                        key={"Analytics"}
                    // onClick={handleOpenQuickLinkClick}
                    >
                        <ListItemIcon className={classes.whiteLabel}>
                            <IconButton><AnalyticsIcon /></IconButton>
                        </ListItemIcon>
                        <ListItemText
                            className={classes.whiteLabel}
                            primary={"Analytics"}
                        />

                    </ListItem>
                    <Divider />
                    <ListItem
                        button
                        key={"Devices"}
                    // onClick={handleOpenQuickLinkClick}
                    >
                        <ListItemIcon className={classes.whiteLabel}>
                            <IconButton><DevicesIcon /></IconButton>
                        </ListItemIcon>
                        <ListItemText
                            className={classes.whiteLabel}
                            primary={"Devices"}
                        />

                    </ListItem>
                    <Divider />

                </List>


            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <Home />



            </main>

        </div>
    );
}
