import React from "react";
import {
	Container,
	Header,
	View,
	Text,
	Left,
	Button,
	Right,
	Content,
	Form,
	Item,
	Icon,
	Input,
	Body,
} from "native-base";
import {
	StyleSheet,
	Image,
	TouchableOpacity,
	Linking,
	ScrollView,
	AsyncStorage,
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { Navigation } from "react-native-navigation";
import { gologin } from "../component/bottonTab";
import ImageOverlay from "react-native-image-overlay";
import {
	responsiveHeight,
	responsiveWidth,
	responsiveFontSize,
} from "react-native-responsive-dimensions";

export default class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			sideMenu: false,
			visible: false,
		};
	}
	_VisibleMenu() {
		this.setState({
			visible: !this.state.visible,
		});
	}
	render() {
		return (
			<View style={{ flex: 1 }}>
				<Header
					style={{ backgroundColor: "#6275AB" }}
					androidStatusBarColor="#6275AB"
					iosBarStyle="light-content"
				>
					<Left>
						<TouchableOpacity
							activeOpacity={0.8}
							style={{
								width: responsiveWidth(20),
								marginTop: 10,
								height: responsiveHeight(7),
								// backgroundColor: "#000",
							}}
							onPress={() => {
								// this._VisibleMenu();
								Navigation.mergeOptions(
									this.props.componentId,
									{
										sideMenu: {
											right: {
												visible: this.state.visible,
											},
										},
									}
								);
							}}
						>
							<Image
								source={require("../assets/icon/menu.png")}
								style={{ width: "60%", height: "70%" }}
							/>
						</TouchableOpacity>
					</Left>
					<Right>
						<TouchableOpacity
							activeOpacity={0.8}
							style={{
								width: responsiveWidth(10),
								height: responsiveHeight(7),
								marginTop: 10,
							}}
							onPress={() => {
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
							}}
						>
							<Image
								source={require("../assets/icon/back.png")}
								style={{ width: "55%", height: "80%" }}
							/>
						</TouchableOpacity>
					</Right>
				</Header>

				<View style={form.Container}>
					<View
						style={{
							height: responsiveHeight(15),
							width: responsiveWidth(100),
						}}
					>
						<Image
							source={require("../assets/background.png")}
							style={{
								width: "100%",
								height: "100%",
							}}
						/>
					</View>
					<View
						style={{
							alignItems: "center",
							top: 40,
							position: "absolute",
							left: 0,
							right: 0,
						}}
					>
						<Image
							source={require("../assets/text.png")}
							style={{
								height: responsiveHeight(10),
								width: responsiveWidth(72),
							}}
						/>
					</View>

					<ScrollView
						contentContainerStyle={{
							width: "100%",
							paddingTop: 10,
						}}
					>
						<View
							style={{
								alignItems: "center",
								// top: 10,
							}}
						>
							<TouchableOpacity
								style={{
									alignItems: "center",
									height: responsiveHeight(20),
									width: responsiveWidth(90),
									// backgroundColor: "#fff",
								}}
								onPress={() => {
									this._VisibleMenu();

									Navigation.showModal({
										component: {
											name: "Eghamat",
											options: {
												topBar: {
													visible: false,
													animate: false,
													drawBehind: true,
												},
											},
										},
									});
								}}
							>
								<ImageOverlay
									containerStyle={{
										marginRight: 10,
										marginLeft: 10,
										justifyContent: "center",
										width: "100%",
										height: "100%",
									}}
									source={require("../assets/eghamati.jpg")}
									title={"مرکز اقامتی"}
									contentPosition="bottom"
									// rounded={5}
									titleStyle={{
										fontSize: responsiveFontSize(3),
										fontFamily: "IRANSansMobile",
										bottom: 0,
										position: "absolute",
										left: 0,
									}}
								/>
							</TouchableOpacity>

							<TouchableOpacity
								style={{
									alignItems: "center",
									height: responsiveHeight(20),
									width: responsiveWidth(90),
									marginTop: 5,
								}}
								onPress={() => {
									Navigation.showModal({
										component: {
											name: "recorder",
											options: {
												topBar: {
													visible: false,
													animate: false,
													drawBehind: true,
												},
											},
										},
									});
								}}
							>
								<ImageOverlay
									containerStyle={{
										marginRight: 10,
										marginLeft: 10,
										justifyContent: "center",
										width: "100%",
										height: "100%",
									}}
									source={require("../assets/amar.jpg")}
									title={"ثبت آمار"}
									contentPosition="bottom"
									titleStyle={{
										fontSize: responsiveFontSize(3),
										fontFamily: "IRANSansMobile",
										bottom: 0,
										position: "absolute",
										left: 0,
									}}
								/>
							</TouchableOpacity>

							<TouchableOpacity
								style={{
									alignItems: "center",
									// width: "90%",
									// height: 120,
									height: responsiveHeight(20),
									width: responsiveWidth(90),
									marginTop: 5,
								}}
								onPress={() => {
									Navigation.showModal({
										component: {
											name: "report",
											options: {
												topBar: {
													visible: false,
													animate: false,
													drawBehind: true,
												},
											},
										},
									});
								}}
							>
								<ImageOverlay
									containerStyle={{
										marginRight: 10,
										marginLeft: 10,
										justifyContent: "center",
										width: "100%",
										height: "100%",
									}}
									source={require("../assets/g.jpg")}
									title={"گزارشات"}
									contentPosition="bottom"
									titleStyle={{
										fontSize: responsiveFontSize(3),
										fontFamily: "IRANSansMobile",
										position: "absolute",
										left: 0,
										bottom: 0,
									}}
								/>
							</TouchableOpacity>
							<View
								style={{
									alignItems: "center",
									height: responsiveHeight(50),
									width: responsiveWidth(60),
									top: 10,
									// bottom: 0,
								}}
							>
								<Image
									source={require("../assets/Logo.png")}
									style={{
										width: "50%",
										height: "50%",
										justifyContent: "flex-end",
									}}
								/>
								<TouchableOpacity
									activeOpacity={0.8}
									style={{
										backgroundColor: "#fff",
										// bottom: 20,
										justifyContent: "flex-end",
										borderRadius: 5,
										borderWidth: 2,
										borderColor: "#d6d7da",
										top: 10,
									}}
									onPress={() => {
										Linking.openURL("http://amarcht.ir");
									}}
								>
									<Text>www.amarcht.ir</Text>
								</TouchableOpacity>
							</View>
						</View>
					</ScrollView>
				</View>
			</View>
		);
	}
	logOut() {
		AsyncStorage.removeItem("email");
		AsyncStorage.removeItem("pass");
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
	}
}
export const form = StyleSheet.create({
	Container: {
		flex: 1,
		width: "100%",
		// height: "100%",
		backgroundColor: "#1A4B85",
	},
});
