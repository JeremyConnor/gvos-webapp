import React, {useState, useEffect} from "react"
import * as fcl from "@onflow/fcl";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { useCurrentUser } from "./hooks/current-user";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // backgroundColor: 'white',
    backgroundColor: '#242629',
    height: "100vh",
  },
  btn: {
    color: '#fffffe',
    background: '#7f5af0',
  },
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

export default function AuthCluster(props) {

  const classes = useStyles();
  const cu = useCurrentUser();
  const theme = useTheme();
  const [user, setUser] = useState({loggedIn: null})
  useEffect(() => fcl.currentUser().subscribe(setUser), [])

  if (user.loggedIn) {

    return (
      <div className={classes.root}>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <Card>
                  <CardHeader
                    title={"Account Address: "}
                    subheader={cu.addr ?? "No Address"}
                    color="#94a1b2"
                  />
                  <CardActions disableSpacing>
                    <Button variant="contained" color="primary" onClick={cu.logOut} className={classes.btn}>
                      Log Out
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </div>
        </main>
      </div>
    )
  } else {
    return (
      <div className={classes.root}>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div>
            <Grid container spacing={4}>
              <Grid item xs={2}>
                <Button variant="contained" color="primary" onClick={cu.logIn} className={classes.btn}>
                  Log In
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button variant="contained" color="primary" onClick={cu.signUp} className={classes.btn}>
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </div>
        </main>
      </div>
    )
  }
}


// import React, {useState, useEffect} from 'react';
// import * as fcl from "@onflow/fcl";

// const AuthCluster = () => {
//   const [user, setUser] = useState({loggedIn: null})
//   useEffect(() => fcl.currentUser().subscribe(setUser), [])
//   if (user.loggedIn) {
//     console.log("user: ", JSON.stringify(user, null, 2));
//     return (
//       <div>
//         <span>{user?.addr ?? "No Address"}</span>
//         <button className="btn-primary" onClick={fcl.unauthenticate}>Log Out</button>
//       </div>
//     )
//   } else {
//     return (
//       <div>
//         <button className="btn-primary" onClick={fcl.logIn}>Log In</button>
//         <button className="btn-secondary" onClick={fcl.signUp}>Sign Up</button>
//       </div>
//     )
//   }
// }

// export default AuthCluster;