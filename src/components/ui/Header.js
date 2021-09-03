import React from "react";
import { useEffect, useState, useCallback} from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
// 
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";




function ElevationScroll(props) {
  const { children} = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down("md")]: {
      
    },
    [theme.breakpoints.down("xs")]: {
    
    }
  },

  tabContainer: {
    marginLeft: "auto"
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
    
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    }
  },
  menu: {
    backgroundColor: "white",
    color: "white",
    borderRadius: "0px"
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1
    }
  },
  drawerIcon: {
    height: "40px",
    width: "40px"
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1
    }
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
    display: "inline-block",
    color: "#1a1a1a",
   
    padding: "5px 0",
    width: "auto",
    marginRight: "auto",
    backgroundColor: "rgba(0, 0, 255, 0)",

    [theme.breakpoints.down("md")]: {
      padding: "0"
    },
  }
}));

export default function Header(props) {
  const theme = useTheme();
  const classes = useStyles();
  // find out if matches is true, to decide wether to show nav or sidedrawer
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const i0S = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleChange = (e, newValue) => {
    props.setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(i);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

 
  

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    { name: "Projects", link: "/projects", activeIndex: 1 },
    { name: "About Us", link: "/about", activeIndex: 2 },
    { name: "Contact Us", link: "/contact", activeIndex: 3 },
  ];

  // function useTodosCountDisplaying(todos) {
  //   const countCompletedTodos = useCallback(() => {
  //     return todos.filter(todo => todo.completed).length;
  //   }, [todos]);
   
  //   useEffect(() => {
  //     document.title = `Fetched ${countCompletedTodos()} completed todos`
  //   }, [countCompletedTodos])
  // }

  function GetRoute() {
    const getTheRoute = useCallback(() => {
      routes.forEach((route) => {
        switch (window.location.pathname) {
          case `${route.link}`:
            if (props.value !== route.activeIndex) {
              props.setValue(route.activeIndex);
              if (
                route.selectedIndex &&
                route.selectedIndex !== props.selectedIndex
              ) {
                props.setSelectedIndex(route.selectedIndex);
              }
            }
            break;
          default:
            break;
        }
      });
    }, []);
    useEffect(() => {
      // slide array and then a forEach loop
      getTheRoute()
    }, [getTheRoute]);
  }
  // https://wanago.io/2019/11/18/useeffect-hook-in-react-custom-hooks/
  // maybe fix using https://stackoverflow.com/questions/65321359/how-to-fix-warning-function-makes-the-dependencies-of-useeffect-hook-change


  // drawer jsx element. A swipeable drawer with button that appears
  // at certain screen widths
  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!i0S}
        disableDiscovery={i0S}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) => {
            return (
              <ListItem
                divider
                key={`${route}${route.activeIndex}`}
                button
                component={Link}
                to={route.link}
                classes={{ selected: classes.drawerItemSelected }}
                selected={props.value === route.activeIndex}
                onClick={() => {
                  setOpenDrawer(false);
                  props.setValue(route.activeIndex);
                }}
              >
                <ListItemText className={classes.drawerItem} disableTypography>
                  {route.name}
                </ListItemText>
              </ListItem>
            );
          })}
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(5);
            }}
            divider
            button
            component={Link}
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSelected,
            }}
            to="/estimate"
            selected={props.value === 5}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );
  // tabs jsx element - appears at larger screen widths
  const tabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
   
      
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar position="absolute"  className={classes.appbar}>
          <Toolbar disableGutters>
            {/* setvalue to 0 to ensure that active tab is returned to Home and disableRipple*/}
          
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
