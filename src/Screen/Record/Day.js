import React from "react";
import {
	AsyncStorage,
	Image,
	FlatList,
	TouchableOpacity,
	ScrollView,
	Alert,
	BackHandler,
	TextInput,
	TouchableHighlight,
	Animated,
	Easing,
	StyleSheet,
} from "react-native";
import {
	Container,
	Header,
	Left,
	Right,
	Text,
	Button,
	Icon,
	Card,
	CardItem,
	Body,
	Spinner,
	Content,
	View,
	Input,
	Item,
} from "native-base";
import {
	responsiveHeight,
	responsiveWidth,
	responsiveFontSize,
} from "react-native-responsive-dimensions";
import Modal from "react-native-modal";
import axios from "axios";
import { Navigation } from "react-native-navigation";
import PersianCalendarPicker from "react-native-jalali-date-picker-rtl";
import moment from "jalali-moment";

export default class Day extends React.Component {
	constructor() {
		super();

		this.state = {
			VisibleDate: false,
			changeCenter: false,
			changeDate: false,
			iranNo: 0,
			otherNo: 0,
			roomNumber: 0,
			iranIn: 0,
			numberExitFa: 0,
			numberInputEn: 0,
			numberExitEn: 0,
			dataEghamat: [],
			Date: new Date(),
			date: "تاریخ مورد نظر خود را انتخاب کنید",
			click: false,
			DayOnline: "",
			error: false,
		};

		this.onDateChange = this.onDateChange.bind(this);
		this.iranNo = React.createRef();
		this.otherNo = React.createRef();
		this.roomNumber = React.createRef();
		this.numberExitFa = React.createRef();
		this.numberExitEn = React.createRef();
		this.iranIn = React.createRef();
		this.numberInputEn = React.createRef();
	}

	onDateChange(Date) {
		this.setState({ Date: Date, click: true });
	}

	_toggleModalDate = () =>
		this.setState({ VisibleDate: !this.state.VisibleDate });

	renderCenter({ item }) {
		return (
			<TouchableHighlight
				style={{
					backgroundColor: "#1A4B85",
					borderRadius: 10,
					marginTop: 4,
					marginRight: 5,
					marginLeft: 5,
					height: 40,
				}}
				onPress={() => {
					this._toggleModal();
					this.setState({
						typeCenter: item.title,
						changeCenter: true,
					});
				}}
			>
				<Text style={styleDay.renderText}>{item.title}</Text>
			</TouchableHighlight>
		);
	}

	render() {
		const { Date, prevDay, prevDays } = this.state;
		const typeCenter = this.state.changeCenter ? "#edeff2" : "#abacad";
		const datecolor = this.state.changeDate ? "#edeff2" : "#abacad";
		const colorError = this.state.error == false ? "#700209" : "#d10613";

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
							اطلاعات روزانه
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
				<Body
					style={{
						backgroundColor: "#1A4B85",
						width: "100%",
						flex: 1,
					}}
				>
					<ScrollView
						contentContainerStyle={{
							width: "100%",
							justifyContent: "center",
							alignItems: "center",
							top: 7,
						}}
						showsVerticalScrollIndicator={true}
					>
						{/* تاریخ  */}
						<View style={styleDay.ViewItem}>
							<Item style={styleDay.ItemInputText}>
								<Image
									source={require("../../assets/image/date.png")}
									style={styleDay.icon}
								/>
								<Text
									style={{
										marginRight: 5,
										marginLeft: 5,
										color: "#fff",
										fontFamily: "IRANSansMobile",
										fontSize: responsiveFontSize(2),
									}}
								>
									تاریخ :
								</Text>
								{/* </Item>
							<Item
								style={{
									// top: 8,
									// alignItems: "center",
									// justifyContent: "flex-end",
									// width: "80%",
									width: responsiveWidth(80),
									flexDirection: "row",
								}}
							> */}
								<TouchableOpacity
									onPress={() => {
										this._toggleModalDate();
										if (this.state.click == false) {
											this.setState({
												click: false,
												DayOnline: moment(
													this.state.Date.toString(),
													"ddd MMM D YYYY"
												).format("jYYYY/jM/jD"),
											});
										}
									}}
								>
									<Text
										style={{
											// marginRight: 3,
											color: datecolor,
											fontFamily: "IRANSansMobile",
											fontSize: responsiveFontSize(2),
										}}
									>
										{this.state.date}
									</Text>
								</TouchableOpacity>
							</Item>

							<Modal
								isVisible={this.state.VisibleDate}
								animationOut={"slideOutDown"}
							>
								<View
									style={{
										height: "65%",
										backgroundColor: "#fff",
										borderRadius: 5,
									}}
								>
									{/* <View style={{ flexDirection: "row" }}> */}
									<Left>
										<View
											style={{
												flexDirection: "row",
												right: 0,
												position: "absolute",
											}}
										>
											<Text
												style={{
													margin: 10,
													position: "absolute",
													right: 0,
												}}
											>
												تاریخ :
												{moment(
													this.state.Date.toString(),
													"ddd MMM D YYYY"
												).format("jYYYY/jM/jD")}
											</Text>
										</View>
									</Left>

									<Right
										style={{
											flexDirection: "row",
											right: 0,
											position: "absolute",
										}}
									>
										<TouchableOpacity
											style={{
												width: responsiveWidth(15),
												height: responsiveHeight(10),
												// backgroundColor: "#000",
											}}
											activeOpacity={0.8}
											onPress={() => {
												this._toggleModalDate();
											}}
										>
											<Image
												source={require("../../assets/icon/close.png")}
												style={{
													width: 30,
													height: 30,
													marginTop: 4,
												}}
											/>
										</TouchableOpacity>

										<TouchableOpacity
											style={{
												width: responsiveWidth(15),
												height: responsiveHeight(10),
												// backgroundColor: "#000",
											}}
											activeOpacity={0.6}
											onPress={() => {
												if (
													this.state.DayOnline !=
													moment(
														this.state.Date.toString(),
														"ddd MMM D YYYY"
													).format("jYYYY/jM/jD")
												) {
													this.setState({
														date: moment(
															this.state.Date.toString(),
															"ddd MMM D YYYY"
														).format("jYYYY/jM/jD"),
													});
													this._toggleModalDate();
												} else {
													this.setState({
														error: true,
													});
												}
											}}
										>
											<Image
												source={require("../../assets/icon/tick.png")}
												style={{
													width: 40,
													height: 40,
													// margin: 4,
												}}
											/>
										</TouchableOpacity>
									</Right>
									{/* </View> */}

									<View
										style={{
											backgroundColor: "#ffff",
											width: "100%",
											height: "80%",
											paddingRight: 10,
											paddingLeft: 10,
										}}
									>
										<Text
											style={{
												fontFamily: "IRANSansMobile",
												fontSize: responsiveFontSize(2),
												color: colorError,
												textAlign: "center",
											}}
										>
											تاریخ انتخابی شما باید از روز جاری
											کمتر باشد
										</Text>

										<PersianCalendarPicker
											selectedDate={Date}
											onDateChange={this.onDateChange}
											width={"90%"}
											nextTitle={" "}
										/>
									</View>
								</View>
							</Modal>
						</View>
						{/* تعداد مشافران ایرانی  */}
						<View style={styleDay.ViewItem}>
							<Item style={styleDay.ItemInputText}>
								<Image
									source={require("../../assets/image/numberFa.png")}
									style={styleDay.icon}
								/>
								<Text
									style={{
										marginRight: 5,
										marginLeft: 5,
										color: "#fff",
										fontFamily: "IRANSansMobile",
										fontSize: responsiveFontSize(2),
									}}
								>
									تعداد مسافران ایرانی :
								</Text>

								<TextInput
									ref={this.iranNo}
									placeholder="0"
									placeholderTextColor="#abacad"
									keyboardType="numeric"
									style={{
										width: responsiveWidth(55),
										color: "#fff",
										fontSize: responsiveFontSize(2),
										textAlign: "right",
									}}
									onChangeText={iranNo =>
										this.setState({ iranNo })
									}
									underlineColorAndroid={"transparent"}
									returnKeyType="next"
									onSubmitEditing={() =>
										this.otherNo.current.focus()
									}
								/>
							</Item>
						</View>

						{/* تعداد مسافران خارجی  */}
						<View style={styleDay.ViewItem}>
							<Item style={styleDay.ItemInputText}>
								<Image
									source={require("../../assets/image/numberFa.png")}
									style={styleDay.icon}
								/>
								<Text
									style={{
										marginRight: 5,
										marginLeft: 5,
										color: "#fff",
										fontFamily: "IRANSansMobile",
										fontSize: responsiveFontSize(2),
									}}
								>
									تعداد مسافران خارجی :
								</Text>

								<TextInput
									ref={this.otherNo}
									placeholder="0"
									placeholderTextColor="#abacad"
									keyboardType="numeric"
									style={{
										width: responsiveWidth(55),
										color: "#fff",
										fontSize: responsiveFontSize(2),
										textAlign: "right",
									}}
									onChangeText={otherNo =>
										this.setState({ otherNo })
									}
									underlineColorAndroid={"transparent"}
									returnKeyType="next"
									onSubmitEditing={() =>
										this.roomNumber.current.focus()
									}
								/>
							</Item>
						</View>
						{/* تعداد اتاق اشغال شده  */}

						<View style={styleDay.ViewItem}>
							<Item style={styleDay.ItemInputText}>
								<Image
									source={require("../../assets/image/key.png")}
									style={styleDay.icon}
								/>
								<Text
									style={{
										marginRight: 5,
										marginLeft: 5,
										color: "#fff",
										fontFamily: "IRANSansMobile",
										fontSize: responsiveFontSize(2),
									}}
								>
									تعدا اتاق اشغال شده :
								</Text>

								<TextInput
									ref={this.roomNumber}
									placeholder="0"
									placeholderTextColor="#abacad"
									keyboardType="numeric"
									style={{
										width: responsiveWidth(55),
										color: "#fff",
										fontSize: responsiveFontSize(2),
										textAlign: "right",
									}}
									onChangeText={roomNumber =>
										this.setState({ roomNumber })
									}
									underlineColorAndroid={"transparent"}
									returnKeyType="next"
									onSubmitEditing={() =>
										this.iranIn.current.focus()
									}
								/>
							</Item>
						</View>
						{/* تعداد مسافر ایرانی وارد شده */}
						<View style={styleDay.ViewItem}>
							<Item style={styleDay.ItemInputText}>
								<Image
									source={require("../../assets/image/input.png")}
									style={styleDay.icon}
								/>
								<Text
									style={{
										marginRight: 5,
										marginLeft: 5,
										color: "#fff",
										fontFamily: "IRANSansMobile",
										fontSize: responsiveFontSize(2),
									}}
								>
									تعداد مسافر ایرانی وارد شده :
								</Text>

								<TextInput
									ref={this.iranIn}
									placeholder="0"
									placeholderTextColor="#abacad"
									keyboardType="numeric"
									maxLength={5}
									style={{
										width: responsiveWidth(55),
										color: "#fff",
										fontSize: responsiveFontSize(2),
										textAlign: "left",
									}}
									onChangeText={iranIn =>
										this.setState({ iranIn })
									}
									underlineColorAndroid={"transparent"}
									returnKeyType="next"
									onSubmitEditing={() =>
										this.numberExitFa.current.focus()
									}
								/>
							</Item>
						</View>
						{/* تعداد مسافر ایرانی خارج شده */}
						<View style={styleDay.ViewItem}>
							<Item style={styleDay.ItemInputText}>
								<Image
									source={require("../../assets/image/exite.png")}
									style={styleDay.icon}
								/>
								<Text
									style={{
										marginRight: 5,
										marginLeft: 5,
										color: "#fff",
										fontSize: responsiveFontSize(2),
										fontFamily: "IRANSansMobile",
									}}
								>
									تعداد مسافر ایرانی خارج شده :
								</Text>

								<TextInput
									ref={this.numberExitFa}
									placeholder="0"
									placeholderTextColor="#abacad"
									keyboardType="numeric"
									maxLength={5}
									style={{
										width: responsiveWidth(55),
										color: "#fff",
										fontSize: responsiveFontSize(2),
										textAlign: "right",
									}}
									onChangeText={numberExitFa =>
										this.setState({ numberExitFa })
									}
									underlineColorAndroid={"transparent"}
									returnKeyType="next"
									onSubmitEditing={() =>
										this.numberInputEn.current.focus()
									}
								/>
							</Item>
						</View>
						{/* تعداد مسافر خارجی وارد شده */}
						<View style={styleDay.ViewItem}>
							<Item style={styleDay.ItemInputText}>
								<Image
									source={require("../../assets/image/input.png")}
									style={styleDay.icon}
								/>
								<Text
									style={{
										marginRight: 5,
										marginLeft: 5,
										color: "#fff",
										fontSize: responsiveFontSize(2),
										fontFamily: "IRANSansMobile",
									}}
								>
									تعداد مسافر خارجی وارد شده :
								</Text>

								<TextInput
									ref={this.numberInputEn}
									placeholder="0"
									placeholderTextColor="#abacad"
									keyboardType="numeric"
									maxLength={5}
									style={{
										width: responsiveWidth(55),
										color: "#fff",
										fontSize: responsiveFontSize(2),
										textAlign: "right",
									}}
									onChangeText={numberInputEn =>
										this.setState({ numberInputEn })
									}
									underlineColorAndroid={"transparent"}
									returnKeyType="next"
									onSubmitEditing={() =>
										this.numberExitEn.current.focus()
									}
								/>
							</Item>
						</View>
						{/* تعداد مسافر خارجی خارج شده */}
						<View style={styleDay.ViewItem}>
							<Item style={styleDay.ItemInputText}>
								<Image
									source={require("../../assets/image/exite.png")}
									style={styleDay.icon}
								/>
								<Text
									style={{
										marginRight: 5,
										marginLeft: 5,
										color: "#fff",
										fontFamily: "IRANSansMobile",
										fontSize: responsiveFontSize(2),
									}}
								>
									تعداد مسافر خارجی خارج شده :
								</Text>

								<TextInput
									ref={this.numberExitEn}
									placeholder="0"
									placeholderTextColor="#abacad"
									keyboardType="numeric"
									maxLength={5}
									style={{
										width: responsiveWidth(55),
										color: "#fff",
										fontSize: responsiveFontSize(2),
										textAlign: "right",
									}}
									onChangeText={numberExitEn =>
										this.setState({ numberExitEn })
									}
									underlineColorAndroid={"transparent"}
									onSubmitEditing={() =>
										this.numberExitEn.current.focus()
									}
								/>
							</Item>
						</View>
						<TouchableOpacity
							style={{
								width: "75%",
								height: 60,
								flexDirection: "row",
								backgroundColor: "#f4cb42",
								justifyContent: "flex-end",
								borderRadius: 15,
								marginTop: 40,
								alignItems: "center",
								bottom: 10,
							}}
						>
							<Text
								style={{
									position: "absolute",
									textAlign: "center",
									right: 0,
									left: 0,
									fontFamily: "IRANSansMobile",
									fontSize: 16,
									color: "#1A4B85",
								}}
							>
								ثبت تغییرات
							</Text>
						</TouchableOpacity>
					</ScrollView>
				</Body>
			</View>
		);
	}
}
export const styleDay = StyleSheet.create({
	Container: {
		width: "90%",
		height: 60,
		flexDirection: "row",
		backgroundColor: "#fff",
		justifyContent: "flex-end",
		borderRadius: 15,
		marginTop: 20,
		alignItems: "center",
	},
	dropDown: {
		position: "absolute",
		left: 10,
	},
	subText: {
		position: "absolute",
		right: 50,
		fontFamily: "IRANSansMobile",
		fontSize: 16,
	},
	subImage: {
		width: 30,
		height: 30,
		position: "absolute",
		right: 10,
	},
	ViewItem: {
		height: 40,
		flexDirection: "row",
		justifyContent: "flex-end",
		marginTop: 5,
	},
	Iconedit_text: {
		width: 20,
		height: 20,
		fontFamily: "IRANSansMobile",
	},
	ItemInputText: {
		width: "90%",
		// left: 20,
		// justifyContent: "flex-end",
		fontFamily: "IRANSansMobile",
	},
	textInput: {
		width: "100%",
		textAlign: "right",
		marginRight: 2,
		fontFamily: "IRANSansMobile",
		fontSize: 14,
		padding: 5,
	},
	icon: {
		width: 20,
		height: 20,
		// flex: 0,
		justifyContent: "center",
		right: 0,
	},
	viewModal: {
		height: "60%",
		backgroundColor: "#fff",
		borderRadius: 5,
	},
	text: {
		fontFamily: "IRANSansMobile",
		fontSize: 14,
	},
	renderText: {
		flex: 1,
		color: "#fff",
		textAlign: "center",
		marginTop: 5,
		fontFamily: "IRANSansMobile",
		fontSize: 14,
	},
	annotationFill: {
		width: 15,
		height: 15,
		borderRadius: 15,
		borderColor: "#eaecf6",
		backgroundColor: "#a28fc3",
		width: 15,
		height: 15,
		backgroundColor: "black",
	},
});
