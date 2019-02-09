/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from "react";
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Image,
	alert,
	// Button,
} from "react-native";
import axios from "axios";
import { Button } from "native-base";
// import { Image } from "native-base";
const instructions = Platform.select({
	ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
	android:
		"Double tap R on your keyboard to reload,\n" +
		"Shake or press menu button for dev menu",
});

// type Props = {};
export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			arr: [{}],
		};
	}
	render() {
		return (
			<View style={styles.container}>
				<Button onPress={() => alert(this.state.arr)}>
					<Text>kjsdhfkjs</Text>
				</Button>
			</View>
		);
	}
	getPostpoint() {
		// let id = this.state.catid;
		axios
			.post("http://amarcht.ir/ws_app/AndroidService.asmx/Login", {
				email: "safarnejad@yahoo.com",
				pass: "9132765530",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
			})
			.then(res => {
				let products = res;
				// alert(products);
				if (products.length > 0) {
					this.setState({
						arr: products,
					});
				}
			})
			.catch(err => {
				alert(err);
			});
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF",
	},
	welcome: {
		fontSize: 20,
		textAlign: "center",
		margin: 10,
	},
	instructions: {
		textAlign: "center",
		color: "#333333",
		marginBottom: 5,
	},
});
