import React from "react";
import { Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
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
import EStyleSheet from "react-native-extended-stylesheet";
import {
	responsiveHeight,
	responsiveWidth,
	responsiveFontSize,
} from "react-native-responsive-dimensions";

export default class Email extends React.Component {
	render() {
		return (
			<View
				style={{
					backgroundColor: "#e6ae00",
					flex: 1,
				}}
			>
				<ScrollView
					contentContainerStyle={{
						width: "100%",
						top: 7,
					}}
					showsVerticalScrollIndicator={true}
				>
					<TouchableOpacity
						style={{
							flexDirection: "row",
							height: responsiveHeight(15),
							margin: 8,
							top: 5,
							left: 5,
						}}
					>
						<Image
							source={require("../assets/icon/puser.png")}
							style={{
								width: 81,
								height: 81,
							}}
						/>
						<Text
							style={{
								marginRight: 50,
								left: 10,
								fontSize: responsiveFontSize(3),
								fontFamily: "IRANSansMobile",
								top: 25,
								color: "#1A4B85",
							}}
						>
							نام کاربری
						</Text>
					</TouchableOpacity>
					<View style={styleMenu.space} />

					<TouchableOpacity style={styleMenu.Container}>
						<Image
							source={require("../assets/menu/email.png")}
							style={{
								width: 50,
								height: 30,
								position: "absolute",
								left: 15,
							}}
						/>
						<Text style={styleMenu.Text}>صندوق پستی</Text>
					</TouchableOpacity>
					<View style={styleMenu.space} />

					<TouchableOpacity style={styleMenu.Container}>
						<Image
							source={require("../assets/menu/news.png")}
							style={{
								width: 50,
								height: 40,
								position: "absolute",
								left: 15,
							}}
						/>
						<Text style={styleMenu.Text}>اخبار</Text>
					</TouchableOpacity>
					<View style={styleMenu.space} />

					<TouchableOpacity style={styleMenu.Container}>
						<Image
							source={require("../assets/menu/help.png")}
							style={{
								width: 28,
								height: 40,
								position: "absolute",
								left: 18,
							}}
						/>
						<Text style={styleMenu.Text}>راهنمای سامانه</Text>
					</TouchableOpacity>
					<View style={styleMenu.space} />

					<TouchableOpacity style={styleMenu.Container}>
						<Image
							source={require("../assets/menu/helping.png")}
							style={{
								width: 40,
								height: 38,
								position: "absolute",
								left: 18,
							}}
						/>
						<Text style={styleMenu.Text}>پشتیبانی</Text>
					</TouchableOpacity>
					<View style={styleMenu.space} />

					<TouchableOpacity style={styleMenu.Container}>
						<Image
							source={require("../assets/menu/question.png")}
							style={{
								width: 35,
								height: 45,
								position: "absolute",
								left: 18,
							}}
						/>
						<Text style={styleMenu.Text}>سوالات متداول</Text>
					</TouchableOpacity>
					<View style={styleMenu.space} />

					<TouchableOpacity style={styleMenu.Container}>
						<Image
							source={require("../assets/menu/link.png")}
							style={{
								width: 40,
								height: 40,
								position: "absolute",
								left: 18,
							}}
						/>
						<Text style={styleMenu.Text}>لینک های مرتبط</Text>
					</TouchableOpacity>
					<View style={styleMenu.space} />

					<TouchableOpacity style={styleMenu.Container}>
						<Image
							source={require("../assets/menu/callus.png")}
							style={{
								width: 22,
								height: 42,
								position: "absolute",
								left: 25,
							}}
						/>
						<Text style={styleMenu.Text}>تماس با ما</Text>
					</TouchableOpacity>
					<View style={styleMenu.space} />

					<TouchableOpacity style={styleMenu.Container}>
						<Image
							source={require("../assets/menu/exite.png")}
							style={{
								width: 38,
								height: 40,
								position: "absolute",
								left: 20,
							}}
						/>
						<Text style={styleMenu.Text}>خروج</Text>
					</TouchableOpacity>
				</ScrollView>
			</View>
		);
	}
}
export const styleMenu = StyleSheet.create({
	Container: {
		left: 0,
		width: responsiveWidth(50),
		height: responsiveHeight(10),
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center",
	},
	Text: {
		fontSize: responsiveFontSize(2),
		fontFamily: "IRANSansMobile",
		color: "#1A4B85",
		left: 20,
	},
	space: {
		backgroundColor: "#1A4B85",
		width: "100%",
		height: 2,
	},
});
