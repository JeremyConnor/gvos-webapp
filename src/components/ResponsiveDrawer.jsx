import React from 'react';
import PropTypes from 'prop-types';
import {
	AppBar,
	CssBaseline,
	Divider,
	Drawer,
	Hidden,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography
} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import {
	makeStyles,
	useTheme
} from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
		background: '#814ee6',
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	// necessary for content to be below app bar
	toolbar: {
		...theme.mixins.toolbar,
	},
	drawerPaper: {
		backgroundColor: '#242629',
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	sideBar: {
		color: '#fffffe',
		background: '#242629',
	    "&:hover": {
	       backgroundColor: "#495057",
	    },
	},
}));

function ResponsiveDrawer(props) {
	const { window, history } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = React.useState(false);
  	const [state, setState] = React.useState("Home");

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const itemList = [
		{
			text: "Authentication",
			onClick: () => {
        		history.push("/")
        		setState("Auth");
      		}
		},
		{
			text: "Buy Asset",
			onClick: () => {
        		history.push("/BuyNFT")
        		setState("Buy Asset");
      		}
		},
		{
			text: "Create Asset",
			onClick: () => {
		        history.push("/CreateNFT")
		        setState("Create Asset");
	        }
		},
		{
			text: "My Assets",
			onClick: () => {
		        history.push("/MyNFT")
			    setState("My Assets");
		    }
	    }
	];

	const drawer = (
	<div>
		<div className={classes.toolbar} />
			<Divider />
				<List>
					{itemList.map((item, index) => {
						const { text, onClick } = item;
						return(
						    <ListItem className={classes.sideBar} button key={text} onClick={onClick}>
							    <ListItemText primary={text} />
						    </ListItem>
						);
					})}
				</List>
			<Divider />
		</div>
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h5" noWrap>
						{state}
					</Typography>
				</Toolbar>
			</AppBar>
			<Hidden smUp implementation="css">
				<Drawer
					container={container}
					variant="temporary"
					anchor={theme.direction === 'rtl' ? 'right' : 'left'}
					open={mobileOpen}
					onClose={handleDrawerToggle}
					classes={{
						paper: classes.drawerPaper,
					}}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
				>
					{drawer}
				</Drawer>
			</Hidden>
			<Hidden xsDown implementation="css">
				<Drawer
					classes={{
						paper: classes.drawerPaper,
					}}
					variant="permanent"
					open
				>
					{drawer}
				</Drawer>
			</Hidden>
		</div>
	);
};

export default withRouter(ResponsiveDrawer);