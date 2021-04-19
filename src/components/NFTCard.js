import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { shadows } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '16vw',
    // height: '19vw',
    maxWidth: 280,
    maxHeight: 300,
    backgroundColor: '#242629',
    raised: true,
    // backgroundColor: '#16161A',
    margin: 'auto',
    "&:hover": {
       backgroundColor: "#495057",
    },
  },
  title: {
    color: '#fffffe',
    fontWeight:'600',
  },
  subheader: {
    color: '#94a1b2',
    fontWeight:'300',
  },
  media: {
    paddingTop: '56.25%', // 16:9
    objectFit: 'fit',
  },
  buyButton: {
    margin: 'auto',
    background: '#7f5af0',
  }
}));

export default function NFTCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        classes={{
          title: classes.title,
          subheader: classes.subheader,
        }}
        title={props.dataFromParent["name"]}
        subheader={props.dataFromParent["location"]}
        color="#94a1b2"
      />
      <CardMedia
        className={classes.media}
        image={props.dataFromParent["uri"]}
      />
      <CardActions disableSpacing>
        <Button variant="contained" color="primary" className={classes.buyButton}>
          Buy: $5
        </Button>
      </CardActions>
    </Card>
  );
}