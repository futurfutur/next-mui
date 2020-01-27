import React from "react";

import { useSelector } from "react-redux";

import clsx from "clsx";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Badge from "@material-ui/core/Badge";
import ListItem from "@material-ui/core/ListItem";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Info from "@material-ui/icons/Info";
import ListItemText from "@material-ui/core/ListItemText";
import { getThemeProps } from "@material-ui/styles";

import { any } from "prop-types";

import MessageBar from "./components/MessageBar";

import NavItem from "./components/NavItem";

import MessageType from "./types/MessageType";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      borderRadius: 5,
      marginTop: 5,
      transition: "all 200ms linear"
      // marginLeft: 5,
      // marginRight: 5
      // backgroundColor: "pink"
    },
    buttonVisible: {
      backgroundColor: "green"
    },
    buttonSelected: {
      backgroundColor: "pink"
    },
    root: {
      display: "flex",
      height: "100%"
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    hide: {
      display: "none"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: "flex-end"
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: -drawerWidth
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    }
  })
);

export const PortalContext = React.createContext<{
  setPageTitle: any;
  showMsg: any;
}>({
  setPageTitle: () => { },
  showMsg: () => { }
});



const ContentPage: React.FC = props => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [open, setOpen] = React.useState(true);
  const [msgBarOpen, handleMsgBarClose] = React.useState(false);
  const [msgBarText, setMsgBartext] = React.useState("");
  const [msgBarType, setMsgBarType] = React.useState("info");
  const [pageTitle, setPageTitle] = React.useState('app bar');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const showMsg = (txt: string, type: MessageType) => {
    setMsgBarType(type);
    setMsgBartext(txt);
    handleMsgBarClose(true);
  };

  React.useEffect(() => {
    console.log("portal mounted " + new Date());
  }, []);

  return (
    <PortalContext.Provider
      value={{ setPageTitle: setPageTitle, showMsg: showMsg }}
    >
      <MessageBar
        msg={msgBarText}
        open={msgBarOpen}
        type={msgBarType as MessageType}
        handleClose={() => {
          handleMsgBarClose(false);
        }}
      />
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar
            style={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              {pageTitle}
            </Typography>
            <div>
              <IconButton color="inherit">
                <Badge color="secondary">
                  <Info />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                //   onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <img
              style={{
                maxWidth: "75%"
              }}
              src={"/logoname.svg"}
              alt="logo"
            />
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                  <ChevronRightIcon />
                )}
            </IconButton>
          </div>




        </Drawer>
        <main
          style={{ height: "100%" }}
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          {props.children}
        </main>
      </div>
    </PortalContext.Provider>
  );
};

export default ContentPage;
