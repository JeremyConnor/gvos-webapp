import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
  Button
} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Grid,
  Box,
  TextField
} from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';
import NFTCard from '../components/NFTCard';
import CustomInput from '../components/CustomInput';

const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
var uploadData = '';
const drawerWidth = 240;
var IPFS_HASH = '';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    backgroundColor: '#16161a',
    height: "100vh",
  },
  input: {
    display: 'none',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    bgcolor: 'background.paper',
    m: 1,
    styles: {
      width: '20',
      height: '20'
    },
    borderColor: 'text.primary',
    padding: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  btn: {
    color: '#fffffe',
    background: '#7f5af0',
  },
  textInput: {
    // background: '#16161a'
  },
  cssFocused: {
    // color: '#7f5af0'
    color: '#fffffe'
  },
  cssLabel: {
    color: '#7f5af0'
  },
  notchedOutline: {
    borderWidth: '1px',
    borderColor: '#7f5af0 !important'
  },
}));

function CreateNFT(props) {
  const { window } = props;
  const classes = useStyles();
  const [data, setData] = React.useState({
    name: "",
    location: "",
    uri: ""
  });
  var uri = "";
  const [image, setImage] = React.useState();
  const [state, setState] = React.useState({
    mainState: "initial", // initial, search, gallery, uploaded
    imageUploaded: 0,
    selectedFile: null
  });
  // const theme = useTheme();

  const handleChange = e => {
    console.log(`${e.currentTarget.id}: ${e.currentTarget.value}`);
    setData({ [e.currentTarget.id]: e.currentTarget.value });
  };

  const handleUploadClick = event => {
    var file = event.target.files[0];
    console.log("file: ", JSON.stringify(event.target.files[0], null, 2));
    const reader = new FileReader();
    var url = reader.readAsDataURL(file);
    setImage(URL.createObjectURL(file));
    console.log("image: ", image);
    uri = image;

    reader.onloadend = function(e) {
      setData({
        ...data,
        uri: uri
      });
      // console.log("data.uri 1: ", data.uri);
      // console.log("data.uri 2: ", data.uri);
      setState({
        selectedFile: [reader.result]
      });
    }.bind(this);
    console.log("url: ", event.target.files[0]); // Would see a path?
    uploadData = event.target.files[0];
    console.log("uploadData: ", uploadData);
    setState({
      mainState: "uploaded",
      selectedFile: event.target.files[0],
      imageUploaded: 1
    });
  };

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <TextField 
                    id="name"
                    label="Name"
                    variant="outlined"
                    onChange={handleChange}
                    InputLabelProps={{
                      classes: {
                        root: classes.cssLabel,
                        focused: classes.cssFocused,
                      }
                    }}
                    InputProps={{
                      classes: {
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline,
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                    id="location"
                    label="Location"
                    variant="outlined"
                    onChange={handleChange}
                    InputLabelProps={{
                      classes: {
                        root: classes.cssLabel,
                        focused: classes.cssFocused,
                      }
                    }}
                    InputProps={{
                      classes: {
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline,
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="uri"
                    multiple
                    type="file"
                    onChange={handleUploadClick}
                  />
                  <label htmlFor="uri">
                    <Grid container spacing={4}>
                      <Grid item xs={12}>
                        <Button variant="contained" color="primary" className={classes.btn} component="span">
                          Upload
                        </Button>
                      </Grid>
                      <Grid item xs={12}>
                        <Button type="button" variant="contained" color="primary" className={classes.btn}>
                          Create
                        </Button>
                      </Grid>
                    </Grid>
                  </label>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <NFTCard dataFromParent={data} />
            </Grid>
          </Grid>
        </div>
      </main>
    </div>
  );
}

CreateNFT.propTypes = {
  window: PropTypes.func,
};

export default CreateNFT;