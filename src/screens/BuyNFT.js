import React from 'react';
import PropTypes from 'prop-types';
import {
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText
} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { makeStyles } from '@material-ui/core/styles';
import NFTCard from '../components/NFTCard';
import testJson1 from '../sample1.json';
import Grid from '@material-ui/core/Grid';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // backgroundColor: 'white',
    backgroundColor: '#16161a',
    height: "100vh",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
}));

function BuyNFT(props) {
  const { window } = props;
  const classes = useStyles();
  // const theme = useTheme();

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div>
          <Grid container spacing={4}>
              {testJson1.map((data, index) => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <NFTCard dataFromParent={data} />
                  </Grid>
                );
              })}
          </Grid>
        </div>
      </main>
    </div>
  );
}

BuyNFT.propTypes = {
  window: PropTypes.func,
};

export default BuyNFT;