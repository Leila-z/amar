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
} from "native-base";
import { TouchableOpacity, Image } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { Navigation } from "react-native-navigation";
import { goToAuth, sidemenu } from "../../component/bottonTab";
import ImageOverlay from "react-native-image-overlay";
import {
	responsiveHeight,
	responsiveWidth,
	responsiveFontSize,
} from "react-native-responsive-dimensions";
// import { Actions } from "react-native-router-flux";
// import { form } from "./../assets/styles";

export default class Eghamat extends React.Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<Header
					style={{ backgroundColor: "#6275AB" }}
					androidStatusBarColor="#6275AB"
					iosBarStyle="light-content"
				>
					<Left>
						<Text
							style={{
								color: "#ffcc2a",
								right: 3,
								fontFamily: "IRANSansMobile",
								fontSize: responsiveFontSize(2),
							}}
						>
							گزارشات
						</Text>
					</Left>
					<Right>
						<TouchableOpacity
							activeOpacity={0.8}
							style={{
								width: responsiveWidth(10),
								height: responsiveHeight(7),
								marginTop: 10,
								// backgroundColor: "#fff",
							}}
							onPress={() => {
								Navigation.dismissModal(this.props.componentId);
							}}
						>
							<Image
								source={require("../../assets/icon/back.png")}
								style={{ width: "55%", height: "80%" }}
							/>
						</TouchableOpacity>
					</Right>
				</Header>
				<View
					style={{
						flex: 1,
						backgroundColor: "#1A4B85",
						justifyContent: "center",
						paddingTop: 50,
						bottom: 0,
					}}
				>
					<View
						style={{
							flex: 1,
							justifyContent: "center",
							alignItems: "center",
							left: 0,
							bottom: 0,
							height: responsiveHeight(20),
							width: responsiveWidth(100),
						}}
					>
						<ImageOverlay
							containerStyle={{
								width: "95%",
								// justifyContent: "center",
							}}
							source={require("../../assets/g.jpg")}
							height={"25%"}
							title={"گزارشات"}
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
						<View
							style={{
								flexDirection: "row",
								top: 2,
							}}
						>
							<TouchableOpacity
								style={{
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "#5EC3CE",
									margin: 2,
									width: "47%",
									height: "62%",
								}}
								onPress={() => {
									Navigation.showModal({
										stack: {
											children: [
												{
													component: {
														name: "Day-report",
														options: {
															topBar: {
																visible: false,
																animate: false,
																drawBehind: true,
															},
														},
													},
												},
											],
										},
									});
								}}
							>
								<Image
									source={require("../../assets/1.2.png")}
									style={{
										width: 80,
										height: 80,
										margin: 10,
									}}
								/>
								<Text
									style={{
										margin: 5,
										color: "#fff",
										justifyContent: "center",
										alignItems: "center",
										textAlign: "center",
										fontSize: responsiveFontSize(2),
										fontFamily: "IRANSansMobile",
										bottom: 12,
									}}
								>
									آمار روزانه مراکز اقامتی دائم
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "#5EC3CE",
									// marginLeft: 4,
									margin: 2,
									width: "47%",
									height: "62%",
								}}
								onPress={() => {
									Navigation.showModal({
										component: {
											name: "reporting",
											options: {
												topBar: {
													visible: false,
													animate: false,
													drawBehind: true,
												},
											},
										},
									});
									// this.setState({
									// 	sideMenu: !this.state.sideMenu,
									// });
								}}
							>
								<Image
									source={require("../../assets/1.1.png")}
									style={{
										width: 90,
										height: 90,
										top: 10,
									}}
								/>
								<Text
									numberOfLines={2}
									style={{
										margin: 5,
										color: "#fff",
										justifyContent: "center",
										alignItems: "center",
										textAlign: "center",
										fontSize: responsiveFontSize(2),
										fontFamily: "IRANSansMobile",
										bottom: 12,
										top: 3,
									}}
								>
									آمار پذیرش دیپلمات مراکز اقامتی دائم
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		);
	}
}
