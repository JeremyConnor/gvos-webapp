import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import AuthCluster from "./AuthCluster";
import BuyNFT from "./screens/BuyNFT";
import MyNFT from "./screens/MyNFT";
import CreateNFT from "./screens/CreateNFT";

const useStyles = makeStyles({
	container: {
		display: "flex",
	}
});

function App() {
	const classes = useStyles();
	return (
		<div className="App">
			<ResponsiveDrawer />
			<Switch>
		        <Route exact path="/" render={(props) => <AuthCluster {...props} />} />
				<Route exact path="/CreateNFT" render={(props) => <CreateNFT {...props} />} />
				<Route exact from="/BuyNFT" render={(props) => <BuyNFT {...props} />} />
				<Route exact path="/MyNFT" render={(props) => <MyNFT {...props} />} />
			</Switch>
		</div>
	);
}

export default App;
