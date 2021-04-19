import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import NFTCard from '../components/NFTCard';
import testJson1 from '../sample1.json';
import testJson2 from '../sample2.json';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: '#16161a',
    height: "100vh",
  },
  right: {
    marginLeft: "auto",
    marginRight: 10,
  },
  bar: {
    flexGrow: 1,
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    // top: 50,
    background: 'transparent',
    boxShadow: 'none',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MyNFT() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.bar}>
        <section className={classes.right}>
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="My NFT Collection" {...a11yProps(0)} />
            <Tab label="My Assets for Sale" {...a11yProps(1)} />
          </Tabs>
        </section>
      </AppBar>
      <TabPanel value={value} index={0} className={classes.content}>
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
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.content}>
        <div className={classes.toolbar} />
        <div>
          <Grid container spacing={4}>
              {testJson2.map((data, index) => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <NFTCard dataFromParent={data} />
                  </Grid>
                );
              })}
          </Grid>
        </div>
      </TabPanel>
    </div>
  );
}