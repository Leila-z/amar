import React from "react";
import {
	StyleSheet,
	Image,
	Linking,
	TouchableOpacity,
	StatusBar,
	TextInput,
	AsyncStorage,
	BackHandler,
	PermissionsAndroid,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
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
import { goToAuth } from "../component/bottonTab";
import axios from "axios";
import {
	responsiveHeight,
	responsiveWidth,
	responsiveFontSize,
} from "react-native-responsive-dimensions";

export default class Login extends React.Component {
	constructor() {
		BackHandler.addEventListener("hardwareBackPress", function() {
			return BackHandler.exitApp();
		});
		super();

		this.state = {
			email: {
				value: "",
				error: "",
			},
			password: {
				value: "",
				error: "",
			},
			error: false,
		};
		this.requestCameraPermission();
		this.Email = React.createRef();
		this.pass = React.createRef();
	}

	render() {
		const emailError = this.state.email.error;
		const passwordError = this.state.password.error;

		return (
			<View
				style={{
					flex: 1,
				}}
			>
				<KeyboardAwareScrollView
					style={{ flex: 1, backgroundColor: "#1A4B85" }}
					contentContainerStyle={{
						height: "100%",
						justifyContent: "center",
					}}
				>
					<StatusBar backgroundColor="#6275AB" />
					{/* <Content style={{ backgroundColor: "#000" }}> */}

					<View
						style={{
							alignItems: "center",
						}}
					>
						<View
							style={{
								justifyContent: "flex-end",
								alignItems: "center",
								height: responsiveHeight(30),
								width: responsiveWidth(50),
								// backgroundColor: "#000",
							}}
						>
							<Image
								source={require("../assets/Logo.png")}
								style={{ width: "100%", height: "100%" }}
							/>
						</View>

						<TouchableOpacity
							activeOpacity={0.8}
							style={{
								backgroundColor: "#fff",
								justifyContent: "flex-end",
								borderRadius: 5,
								borderWidth: 2,
								borderColor: "#d6d7da",
								right: 2,
								marginTop: 4,
							}}
							onPress={() => {
								Linking.openURL("http://amarcht.ir");
							}}
						>
							<Text>www.amarcht.ir</Text>
						</TouchableOpacity>
					</View>
					{this.state.error == false ? null : (
						<Text
							style={{
								color: "red",
								textAlign: "center",
								fontFamily: "IRANSansMobile",
								fontSize: responsiveFontSize(1.5),
								top: 10,
							}}
						>
							نام کاربری یا رمز عبوراشتباه است
						</Text>
					)}

					<Form style={login.StyleForm}>
						<Item
							rounded
							style={login.item}
							error={emailError !== ""}
						>
							<TextInput
								ref={this.Email}
								placeholder="ایمیل خود را وارد کنید"
								style={login.input}
								onChangeText={this.changeEmailInput.bind(this)}
								onSubmitEditing={() =>
									this.pass.current.focus()
								}
								underlineColorAndroid={"transparent"}
								keyboardType="email-address"
								returnKeyType="next"
							/>
							<Image
								source={require("../assets/icon/user.png")}
								style={{ width: 50, height: 50, right: 0 }}
							/>
						</Item>
						<Text
							style={[
								login.error,
								this._checkDisplay(emailError),
							]}
						>
							پر کردن این فیلد الزامی است
						</Text>
						<Item
							rounded
							style={login.item}
							error={passwordError !== ""}
						>
							<TextInput
								ref={this.pass}
								adjustsFontSizeToFit
								placeholder="پسورد خود را وارد کنید"
								secureTextEntry
								style={login.input}
								onChangeText={this.changePasswordInput.bind(
									this
								)}
								onSubmitEditing={() =>
									this.pass.current.focus()
								}
								underlineColorAndroid={"transparent"}
							/>
							<Image
								source={require("../assets/icon/pass.png")}
								style={{ width: 50, height: 50, right: 0 }}
							/>
						</Item>
						<Text
							style={[
								login.error,
								this._checkDisplay(passwordError),
							]}
						>
							پر کردن این فیلد الزامی است
						</Text>
						<View style={{ alignItems: "center" }}>
							<Button
								full
								style={login.submitButton}
								onPress={() => {
									// goToAuth();
									this.Input();
								}}
							>
								<Text
									adjustsFontSizeToFit
									style={login.submitText}
								>
									ورود
								</Text>
							</Button>
						</View>
						<TouchableOpacity>
							<Text
								style={{
									fontFamily: "IRANSansMobile",
									fontSize: responsiveFontSize(1.5),
									color: "#fff",
									padding: 8,
								}}
							>
								حساب کاربری ندارید؟ ثبت نام کنید
							</Text>
						</TouchableOpacity>
					</Form>
					{/* </Content> */}
				</KeyboardAwareScrollView>
			</View>
		);
	}

	Input() {
		goToAuth();
		// // alert('login')
		// let { email, password } = this.state;
		// if (email.value === "") {
		// 	this.setState({
		// 		email: {
		// 			value: "",
		// 			error: "فیلد ایمیل نمیتواند خالی بماند",
		// 		},
		// 	});
		// 	return;
		// }

		// if (password.value === "") {
		// 	this.setState({
		// 		password: {
		// 			value: "",
		// 			error: "فیلد پسورد نمیتواند خالی بماند",
		// 		},
		// 	});
		// 	return;
		// }
		// this.Login(email.value, password.value);
	}

	_checkDisplay(field) {
		return { display: field === "" ? "none" : "flex" };
	}

	changeEmailInput(text) {
		this.setState({
			email: {
				value: text,
				error: "",
			},
		});
	}

	changePasswordInput(text) {
		this.setState({
			password: {
				value: text,
				error: "",
			},
		});
	}

	Login(user, pass) {
		axios
			.post("http://amarcht.ir/ws_app/AndroidService.asmx/Login", {
				email: user,
				pass: pass,
				headers: {
					"Content-Type": "application/json",
				},
			})

			.then(json => {
				// alert(json.data);
				if (json.data == '-2{"d":null}') {
					this.setState({
						error: true,
					});
				} else {
					this.setDataUser(user, pass);
				}
			})
			.catch(err => {
				alert("خطا");
			});
	}

	async setDataUser(user, pass) {
		try {
			await AsyncStorage.setItem("email", user);
			await AsyncStorage.setItem("pass", pass);
			goToAuth();
		} catch (error) {
			console.log(error);
		}
	}

	async requestCameraPermission() {
		try {
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
				{
					title: "استفاده از مکان شما?",
					message:
						"این برنامه برای پیدا کردن مکان شما نیاز به تغییر تنظیمات دارد",
				}
			);
		} catch (err) {
			return false;
		}
	}
}

export const login = StyleSheet.create({
	content: {
		flex: 1,
		backgroundColor: "#1A4B85",
	},
	logo: {
		justifyContent: "center",
		top: 35,
	},
	web: {
		elevation: 1,
		width: "36%",
		borderRadius: 5,
		borderWidth: 2,
		borderColor: "#d6d7da",
		shadowOpacity: 0.75,
		shadowRadius: 1,
		shadowColor: "gray",
		shadowOffset: { height: 0, width: 0 },
		bottom: 50,
		paddingLeft: 5,
		justifyContent: "flex-end",
		backgroundColor: "#fff",
		// left: 85,
		right: 0,
	},
	StyleForm: {
		padding: 20,
		alignItems: "center",
		// top: 15,
		// backgroundColor: "#000",
	},
	item: {
		borderRadius: 40,
		marginBottom: 10,
		// paddingRight: 10,
		paddingLeft: 10,
		backgroundColor: "#fff",
	},
	input: {
		fontFamily: "IRANSansMobile",
		fontSize: responsiveFontSize(1.5),
		color: "#000",
		width: responsiveWidth(60),
	},
	submitButton: {
		borderRadius: 40,
		backgroundColor: "#E6AF0D",
		width: responsiveWidth(60),
		// alignItems: "center",
		// justifyContent: "flex-end",
	},
	submitText: {
		fontFamily: "IRANSansMobile",
		fontSize: responsiveFontSize(2),
		color: "#1A4B85",
	},
	error: {
		fontFamily: "IRANSansMobile",
		fontSize: responsiveFontSize(1.5),
		color: "#ed2f2f",
		marginBottom: 10,
	},
});
