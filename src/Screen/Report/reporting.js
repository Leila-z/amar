import React from "react";
import { WebView, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Header, View, Text, Left, Button, Right, Spinner } from "native-base";
import { Navigation } from "react-native-navigation";
import {
	responsiveHeight,
	responsiveWidth,
	responsiveFontSize,
} from "react-native-responsive-dimensions";

export default class reporting extends React.Component {
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
								width: responsiveWidth(50),
							}}
						>
							گزارش آمار دیپلمات
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
				<View style={styles.container}>
					<WebView
						source={{
							uri:
								"https://www.amarcht.ir/eghamat_amar_diplomat.aspx?email=safarnejad@yahoo.com&pass=9132765530",
						}}
					/>
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
});
