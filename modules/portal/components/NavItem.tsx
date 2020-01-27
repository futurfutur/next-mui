import React from "react";
import Link from "next/link";
import Router from "next/router";

import {
  makeStyles,
  useTheme,
  Theme,
  createStyles
} from "@material-ui/core/styles";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      borderRadius: 5,
      marginTop: 5,
      transition: "all 200ms linear"
      // marginLeft: 5,
      // marginRight: 5
      // backgroundColor: "pink"
    }
  })
);

interface IProps {
  title: string;
  link: string;
}

const NavItem: React.FC<IProps> = ({ link, title }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <ListItem
      button
      key={title}
      classes={{
        button: classes.button
      }}
      onClick={() => {
        Router.push(link);
      }}
    >
      <ListItemText primary={title} />
    </ListItem>
  );
};

export default NavItem;
