import { Dimensions, Platform } from "react-native";
import { Navigation } from "react-native-navigation";
//variables
const { width } = Dimensions.get("window");

export const goToAuth = () =>
	Navigation.startTabBasedApp({
		tabs: [
			{
				screen: "Profile",
				icon: require("../assets/icon/profile.png"),
				navigatorStyle: {
					navBarHidden: true,
				},
			},
			{
				screen: "Home",
				icon: require("../assets/icon/home.png"),
				navigatorStyle: {
					navBarHidden: true,
				},
			},
			{
				screen: "Email",
				icon: require("../assets/icon/email.png"),
				navigatorStyle: {
					navBarHidden: true,
				},
			},
		],
		appStyle: Platform.select({
			ios: {},
			android: {
				tabBarSelectedButtonColor: "#372b58", // optional, change the color of the selected tab icon and text (only selected). On Android, add this to appStyle
				orientation: "portrait",
				tabBarHideShadow: true,
				initialTabIndex: 1,
			},
		}),
		tabsStyle: Platform.select({
			ios: {
				tabBarSelectedButtonColor: "#372b58", // optional, change the color of the selected tab icon and text (only selected). On Android, add this to appStyle
				orientation: "portrait",
				tabBarHideShadow: true,
				initialTabIndex: 1,
			},
			android: {},
		}),
		drawer: {
			right: {
				// optional, define if you want a drawer from the right
				screen: "Menu", // unique ID registered with Navigation.registerScreen
				passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
				fixedWidth: width * 2, // a fixed width you want your right drawer to have (optional)
			},
			style: {
				// ( iOS only )
				drawerShadow: false, // optional, add this if you want a side menu drawer shadow
				contentOverlayColor: "rgba(0,0,0,0.25)", // optional, add this if you want a overlay color when drawer is open
				rightDrawerWidth: 65, // optional, add this if you want a define right drawer width (50=percent)
				shouldStretchDrawer: true, // optional, iOS only with 'MMDrawer' type, whether or not the panning gesture will “hard-stop” at the maximum width for a given drawer side, default : true
			},
			type: "MMDrawer", // optional, iOS only, types: 'TheSideBar', 'MMDrawer' default: 'MMDrawer'
			animationType: "parallax", //optional, iOS only, for MMDrawer: 'door', 'parallax', 'slide', 'slide-and-scale'
			// for TheSideBar: 'airbnb', 'facebook', 'luvocracy','wunder-list'
			disableOpenGesture: false, // optional, can the drawer be opened with a swipe instead of button
		},
		animationType:
			Platform.OS === "ios" ? "slide-down" : "slide-horizontal",
	});

export const gologin = () =>
	Navigation.startSingleScreenApp({
		screen: {
			screen: "Login",
			navigatorStyle: {
				navBarHidden: true,
			},
		},
		animationType: "fade",
	});

// export const goToAuth = () =>
// 	Navigation.setRoot({
// 		root: {
// 			sideMenu: {
// 				id: "sideMenu",
// 				right: {
// 					component: {
// 						id: "Drawer",
// 						name: "Email",
// 					},
// 				},
// 				center: {
// 					bottomTabs: {
// 						options: {
// 							bottomTabs: {
// 								visible: true,
// 								animate: true, // Controls whether BottomTabs visibility changes should be animated
// 								currentTabIndex: 1,
// 								currentTabId: "homeID",
// 								testID: "bottomTabsTestID",
// 								drawBehind: false,
// 								selectedFontSize: 20,
// 							},
// 						},
// 						children: [
// 							{
// 								component: {
// 									name: "Profile",
// 									options: {
// 										bottomTab: {
// 											// fontSize: 12,
// 											icon: require("../assets/icon/profile.png"),
// 											selectedFontSize: 19,
// 										},
// 									},
// 								},
// 							},
// 							{
// 								component: {
// 									id: "homeID",
// 									name: "Home",
// 									options: {
// 										bottomTab: {
// 											icon: require("../assets/icon/home.png"),
// 											selectedFontSize: 19,
// 										},
// 										style: {
// 											size: 50,
// 										},
// 										topBar: {
// 											visible: false,
// 											animate: false,
// 											drawBehind: true,
// 										},
// 									},
// 								},
// 							},
// 							{
// 								component: {
// 									name: "Email",
// 									options: {
// 										drawBehind: false,
// 										bottomTab: {
// 											// fontSize: 12,
// 											icon: require("../assets/icon/email.png"),
// 											selectedFontSize: 19,
// 										},
// 									},
// 								},
// 							},
// 						],
// 					},
// 				},
// 			},
// 		},
// 	});
