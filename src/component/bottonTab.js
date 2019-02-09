import { Navigation } from "react-native-navigation";

export const goToAuth = () =>
	Navigation.setRoot({
		root: {
			sideMenu: {
				id: "sideMenu",

				right: {
					component: {
						id: "Drawer",
						name: "Menu",
					},
					width: 260,
					height: 270,
					visible: false,
					enabled: false,
				},
				center: {
					bottomTabs: {
						id: "BottomTabsId",
						options: {
							bottomTabs: {
								currentTabIndex: 1,
							},
						},

						children: [
							{
								stack: {
									children: [
										{
											component: {
												name: "Profile",
												options: {
													topBar: {
														visible: false,
														animate: false,
														drawBehind: true,
													},
													bottomTab: {
														fontSize: 12,
														// text: "Profile",
														icon: require("../assets/icon/profile.png"),
														// selectedIcon: require("./src/assets"),
													},
												},
											},
										},
									],
								},
							},
							{
								stack: {
									id: "homestack",
									children: [
										{
											component: {
												id: "homeID",
												name: "Home",
												options: {
													topBar: {
														visible: false,
														animate: false,
														drawBehind: true,
													},
													bottomTab: {
														// text: "Booking",
														fontSize: 12,
														icon: require("../assets/icon/home.png"),
														// selectedIcon: require("./src/assets/booking_active.png"),
													},
												},
											},
										},
									],
								},
							},
							{
								stack: {
									children: [
										{
											component: {
												name: "Email",
												options: {
													topBar: {
														visible: false,
														animate: false,
														drawBehind: true,
													},
													bottomTab: {
														fontSize: 12,
														// text: "Profile",
														icon: require("../assets/icon/email.png"),
														// selectedIcon: require("./src/assets"),
													},
												},
											},
										},
									],
								},
							},
						],
					},
				},
			},
		},
	});

export const goHome = () =>
	Navigation.mergeOptions("homestack", {
		bottomTabs: {
			currentTabIndex: 1,
		},
	});

export const gologin = () =>
	Navigation.setRoot({
		root: {
			stack: {
				id: "login",
				children: [
					{
						component: {
							name: "Login",
						},
					},
				],
				options: {
					topBar: {
						visible: false,
						animate: false,
						drawBehind: true,
					},
				},
			},
		},
	});

export const sidemenu = () =>
	Navigation.mergeOptions(this.props.componentId, {
		sideMenu: {
			right: {
				visible: true,
			},
		},
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
