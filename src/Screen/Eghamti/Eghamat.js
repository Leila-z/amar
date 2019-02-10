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
import {
	responsiveHeight,
	responsiveWidth,
	responsiveFontSize,
} from "react-native-responsive-dimensions";
import { TouchableOpacity, Image } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { Navigation } from "react-native-navigation";
// import { goToAuth } from "../../component/bottonTab";
import ImageOverlay from "react-native-image-overlay";
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
							مرکز اقامتی
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
								Navigation.dismissModal();
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
						// paddingTops: 50,
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
							source={require("../../assets/eghamati.jpg")}
							height={"25%"}
							title={"مراکز اقامتی"}
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
									// flex: 1,
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "#5EC3CE",
									// marginRight: 2,
									margin: 2,
									height: responsiveHeight(24),
									width: responsiveWidth(46),
								}}
								onPress={() => {
									Navigation.showModal({
										screen: "showTur",
										navigatorStyle: {
											navBarHidden: true,
										},
									});
								}}
							>
								<Image
									source={require("../../assets/1.png")}
									style={{
										width: 80,
										height: 80,
										margin: 5,
										top: 5,
									}}
								/>
								<Text
									style={{
										textAlign: "center",
										justifyContent: "center",
										alignItems: "center",
										padding: 10,
										// top: 10,
										color: "#fff",
										fontSize: responsiveFontSize(2),
										fontFamily: "IRANSansMobile",
									}}
								>
									لیست مراکز اقامتی/بین راهی
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "#5EC3CE",
									// marginLeft: 4,
									margin: 2,
									height: responsiveHeight(24),
									width: responsiveWidth(46),
								}}
								onPress={() => {
									Navigation.showModal({
										screen: "Tur",
										navigatorStyle: {
											navBarHidden: true,
										},
									});
								}}
							>
								<Image
									source={require("../../assets/2.png")}
									style={{
										width: 80,
										height: 80,
										top: 10,
									}}
								/>
								<Text
									numberOfLines={2}
									style={{
										textAlign: "center",
										justifyContent: "center",
										alignItems: "center",
										padding: 10,
										top: 10,
										color: "#fff",
										fontSize: responsiveFontSize(2),
										fontFamily: "IRANSansMobile",
									}}
								>
									ثبت مرکز اقامتی/بین راهی
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		);
	}
}
