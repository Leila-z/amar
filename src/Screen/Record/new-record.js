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
	Dimensions,
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
import PersianCalendarPicker from "react-native-jalali-date-picker-rtl";
import moment from "jalali-moment";
import axios from "axios";
import { Navigation } from "react-native-navigation";

export default class newrecord extends React.Component {
	constructor() {
		super();

		this.state = {
			typeCenter: "مرکز",
			typeCountry: "کشور",
			typeSex: "جنسیت",
			fname: "",
			lname: "",
			codeMeli: "",
			NameEn: "",
			FamiliEn: "",
			TextDate: "تاریخ ثبت",
			VisibleCenter: false,
			VisibleCountry: false,
			VisibleSex: false,
			VisibleDate: false,
			changeSex: false,
			changeCountry: false,
			numberNight: 0,
			numberFollow: 0,
			followText: "",
			followText1: "توضیحات",
			followText2: "توضیحات تکمیل شد",
			VisibleText: false,
			SendText: false,
			Date: new Date(),
			date: "تاریخ مورد نظر خود را انتخاب کنید",
			click: false,
			error: false,
			dataCountry: [],
			DayOnline: "",
			changeDate: false,
			countryId: "",
		};
		this.GetCountry();
		this.onDateChange = this.onDateChange.bind(this);
		this.fname = React.createRef();
		this.lname = React.createRef();
		this.NameEn = React.createRef();
		this.FamiliEn = React.createRef();
		this.codeMeli = React.createRef();
		this.numberNight = React.createRef();
		this.numberNight = React.createRef();
		this.numberFollow = React.createRef();
	}

	_toggleModalCenter = () =>
		this.setState({ VisibleCenter: !this.state.VisibleCenter });

	_toggleModalCountry = () =>
		this.setState({ VisibleCountry: !this.state.VisibleCountry });

	_toggleModalSex = () =>
		this.setState({ VisibleSex: !this.state.VisibleSex });

	_toggleModalDate = () =>
		this.setState({ VisibleDate: !this.state.VisibleDate });

	_toggleModalText() {
		return this.setState({ VisibleText: !this.state.VisibleText });
	}

	onDateChange(Date) {
		this.setState({ Date, error: true });
	}

	renderSex({ item }) {
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
					this._toggleModalSex();
					this.setState({
						typeSex: item.title,
						changeSex: true,
					});
				}}
			>
				<Text style={styleDay.renderText}>{item.title}</Text>
			</TouchableHighlight>
		);
	}

	renderCountry({ item }) {
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
					this._toggleModalCountry();
					this._toggleModalSex();
					this.setState({
						typeCountry: item.title,
						changeCountry: true,
						countryId: item.id,
					});
				}}
			>
				<Text style={styleDay.renderText}>{item.title}</Text>
			</TouchableHighlight>
		);
	}

	async GetCountry() {
		let usrname = await AsyncStorage.getItem("email");
		let pass = await AsyncStorage.getItem("pass");
		axios
			.post("http://amarcht.ir/ws_app/AndroidService.asmx/GetCountry", {
				email: usrname,
				pass: pass,
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
			})
			.then(json => {
				let res = json.data.replace(`{"d":null}`, "");
				let Data = JSON.parse(res);
				let Table = Data.Table;
				this.setState({
					dataCountry: Table,
				});
			})
			.catch(err => {
				alert("خطا کشور");
			});
	}

	render() {
		const sex = [
			{ title: "مرد", key: "item1" },
			{ title: "زن", key: "item2" },
		];

		const text =
			this.state.SendText == false
				? this.state.followText1
				: this.state.followText2;

		const { Date, prevDay, prevDays } = this.state;

		const datecolor = this.state.changeDate == false ? "#edeff2" : "#fff";
		const colorSex = this.state.changeSex ? "#edeff2" : "#abacad";
		const country = this.state.changeCountry ? "#edeff2" : "#abacad";
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
							ثبت افراد مقیم
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
							top: 4,
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
											width: responsiveWidth(90),
											height: responsiveHeight(50),
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
						{/* نام فارسی   */}
						<View style={styleDay.ViewItem}>
							<Item style={styleDay.ItemInputText}>
								<Image
									source={require("../../assets/image/userFa.png")}
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
									نام فارسی :
								</Text>

								<TextInput
									ref={this.fname}
									placeholder="نام"
									placeholderTextColor="#d1d1d1"
									style={{
										width: responsiveWidth(65),
										color: "#fff",
										fontSize: responsiveFontSize(2),
										textAlign: "right",
									}}
									onChangeText={fname =>
										this.setState({ fname })
									}
									underlineColorAndroid={"transparent"}
									returnKeyType="next"
									onSubmitEditing={() =>
										this.lname.current.focus()
									}
								/>
							</Item>
						</View>
						{/* نام خانوادگی فارسی   */}
						<View style={styleDay.ViewItem}>
							<Item style={styleDay.ItemInputText}>
								<Image
									source={require("../../assets/image/usersFa.png")}
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
									نام خانوادگی فارسی :
								</Text>

								<TextInput
									ref={this.lname}
									placeholder=" نام خانوادگی "
									placeholderTextColor="#d1d1d1"
									// keyboardType="numeric"
									style={{
										width: responsiveWidth(60),
										color: "#fff",
										fontSize: responsiveFontSize(2),
										textAlign: "right",
									}}
									onChangeText={lname =>
										this.setState({ lname })
									}
									underlineColorAndroid={"transparent"}
									returnKeyType="next"
									onSubmitEditing={() =>
										this.NameEn.current.focus()
									}
								/>
							</Item>
						</View>
						{/* نام انگلیسی   */}
						<View style={styleDay.ViewItem}>
							<Item style={styleDay.ItemInputText}>
								<Image
									source={require("../../assets/image/userFa.png")}
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
									نام انگلیسی :
								</Text>

								<TextInput
									ref={this.NameEn}
									placeholder="First Name"
									placeholderTextColor="#d1d1d1"
									// keyboardType="numeric"
									style={{
										// height: responsiveHeight(10),
										width: responsiveWidth(65),
										textAlign: "right",
										// marginRight: 2,
										color: "#fff",
										fontSize: responsiveFontSize(2),
									}}
									onChangeText={NameEn =>
										this.setState({ NameEn })
									}
									underlineColorAndroid={"transparent"}
									returnKeyType="next"
									onSubmitEditing={() =>
										this.FamiliEn.current.focus()
									}
								/>
							</Item>
						</View>
						{/* نام خانوادگی انگلییسی   */}
						<View style={styleDay.ViewItem}>
							<Item style={styleDay.ItemInputText}>
								<Image
									source={require("../../assets/image/usersFa.png")}
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
									نام خانوادگی انگلیسی :
								</Text>

								<TextInput
									ref={this.FamiliEn}
									placeholder="Last Name "
									placeholderTextColor="#d1d1d1"
									// keyboardType="numeric"
									style={{
										width: responsiveWidth(55),
										textAlign: "right",
										// marginRight: 2,
										color: "#fff",
										fontSize: responsiveFontSize(2),
									}}
									onChangeText={FamiliFa =>
										this.setState({ FamiliFa })
									}
									underlineColorAndroid={"transparent"}
									returnKeyType="next"
									onSubmitEditing={() =>
										this.codeMeli.current.focus()
									}
								/>
							</Item>
						</View>
						{/* شماره گذرنامه  */}
						<View style={styleDay.ViewItem}>
							<Item style={styleDay.ItemInputText}>
								<Image
									source={require("../../assets/image/pasport.png")}
									style={{
										width: 30,
										height: 30,
										flex: 0,
										justifyContent: "center",
										left: 2,
									}}
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
									شماره گذرنامه :
								</Text>

								<TextInput
									ref={this.codeMeli}
									placeholder="Passport Number "
									placeholderTextColor="#d1d1d1"
									keyboardType="numeric"
									style={{
										width: responsiveWidth(60),
										textAlign: "right",
										marginRight: 2,
										color: "#fff",
									}}
									onChangeText={codeMeli =>
										this.setState({ codeMeli })
									}
									underlineColorAndroid={"transparent"}
									returnKeyType="next"
									onSubmitEditing={this._toggleModalCountry}
								/>
							</Item>
						</View>
						{/* انتخاب کشور */}
						<View style={styleDay.ViewItem}>
							<Item
								style={styleDay.ItemInputText}
								onPress={this._toggleModalCountry}
							>
								<Image
									source={require("../../assets/image/country.png")}
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
									انتخاب کشور :
								</Text>

								<Text
									style={[
										styleDay.text,
										{
											color: country,
											marginRight: 5,
											fontFamily: "IRANSansMobile",
											fontSize: responsiveFontSize(2),
										},
									]}
								>
									{this.state.typeCountry}
								</Text>
							</Item>

							<Modal
								isVisible={this.state.VisibleCountry}
								animationOut={"slideOutDown"}
							>
								<View
									style={{
										height: "60%",
										backgroundColor: "#fff",
										borderRadius: 5,
									}}
								>
									<View style={{ flexDirection: "row" }}>
										<Left>
											<Text
												style={{
													left: 5,
												}}
											>
												انتخاب کشور :
											</Text>
										</Left>

										<Right>
											<TouchableOpacity
												activeOpacity={0.8}
												onPress={
													this._toggleModalCountry
												}
											>
												<Image
													source={require("../../assets/icon/close.png")}
													style={{
														width: 30,
														height: 30,
														margin: 10,
													}}
												/>
											</TouchableOpacity>
										</Right>
									</View>

									<FlatList
										data={this.state.dataCountry}
										renderItem={this.renderCountry.bind(
											this
										)}
										style={{ margin: 10 }}
									/>
								</View>
							</Modal>
						</View>
						{/* جنسیت */}
						<View style={styleDay.ViewItem}>
							<Item
								style={styleDay.ItemInputText}
								onPress={this._toggleModalSex}
							>
								<Image
									source={require("../../assets/image/centertype.png")}
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
									جنسیت :
								</Text>

								<Text
									style={[
										styleDay.text,
										{
											color: colorSex,
											marginRight: 5,
											fontFamily: "IRANSansMobile",
											fontSize: responsiveFontSize(2),
										},
									]}
								>
									{this.state.typeSex}
								</Text>
							</Item>

							<Modal
								isVisible={this.state.VisibleSex}
								animationOut={"slideOutDown"}
							>
								<View
									style={{
										height: "60%",
										backgroundColor: "#fff",
										borderRadius: 5,
									}}
								>
									<View style={{ flexDirection: "row" }}>
										<Left>
											<Text
												style={{
													left: 5,
												}}
											>
												نوع جنسیت :
											</Text>
										</Left>
										<Right>
											<TouchableOpacity
												activeOpacity={0.8}
												onPress={this._toggleModalSex}
											>
												<Image
													source={require("../../assets/icon/close.png")}
													style={{
														width: 30,
														height: 30,
														margin: 10,
													}}
												/>
											</TouchableOpacity>
										</Right>
									</View>

									<FlatList
										data={sex}
										renderItem={this.renderSex.bind(this)}
										style={{ margin: 10 }}
									/>
								</View>
							</Modal>
						</View>
						{/* تعداد شب اقامت */}
						<View style={styleDay.ViewItem}>
							<Item style={styleDay.ItemInputText}>
								<Image
									source={require("../../assets/image/night.png")}
									style={{
										width: 30,
										height: 30,
										flex: 0,
										justifyContent: "center",
										left: 2,
									}}
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
									تعداد شب اقامت :
								</Text>

								<TextInput
									ref={this.numberNight}
									placeholder="0 "
									placeholderTextColor="#d1d1d1"
									keyboardType="numeric"
									style={{
										width: responsiveWidth(59),
										color: "#fff",
										fontSize: responsiveFontSize(2),
										textAlign: "right",
									}}
									onChangeText={numberNight =>
										this.setState({ numberNight })
									}
									underlineColorAndroid={"transparent"}
									returnKeyType="next"
									onSubmitEditing={() =>
										this.numberFollow.current.focus()
									}
								/>
							</Item>
						</View>
						{/* تعدا همراه */}
						<View style={styleDay.ViewItem}>
							<Item style={styleDay.ItemInputText}>
								<Image
									source={require("../../assets/image/number.png")}
									style={{
										width: 30,
										height: 30,
										flex: 0,
										justifyContent: "center",
										left: 2,
									}}
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
									تعداد همراه :
								</Text>

								<TextInput
									ref={this.numberFollow}
									placeholder="0 "
									placeholderTextColor="#d1d1d1"
									keyboardType="numeric"
									style={{
										width: responsiveWidth(65),
										color: "#fff",
										fontSize: responsiveFontSize(2),
										textAlign: "right",
									}}
									onChangeText={numberFollow =>
										this.setState({ numberFollow })
									}
									underlineColorAndroid={"transparent"}
									returnKeyType="next"
									onSubmitEditing={() =>
										this._toggleModalText()
									}
								/>
							</Item>
						</View>
						{/* توضیحات همراه */}
						<View style={styleDay.ViewItem}>
							<Item
								style={styleDay.ItemInputText}
								onPress={() => {
									this._toggleModalText();
								}}
							>
								<Image
									source={require("../../assets/image/text.png")}
									style={{
										width: 30,
										height: 30,
										flex: 0,
										justifyContent: "center",
										left: 2,
									}}
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
									توضیحات همراه :
								</Text>

								{/* <TouchableOpacity> */}
								<Text
									style={{
										marginRight: 5,
										color: "#d1d1d1",
										fontFamily: "IRANSansMobile",
										fontSize: responsiveFontSize(2),
									}}
								>
									{text}
								</Text>
								{/* </TouchableOpacity> */}
							</Item>

							<Modal
								isVisible={this.state.VisibleText}
								animationOut={"slideOutDown"}
							>
								<View
									style={{
										height: "60%",
										backgroundColor: "#fff",
										borderRadius: 5,
									}}
								>
									<View
										style={{
											flexDirection: "row",
											top: 15,
										}}
									>
										<Left>
											<Text
												style={{
													left: 5,
													bottom: 5,
												}}
											>
												نام و نام خانوادگی همراهان شما:
											</Text>
										</Left>
										<Right
											style={{
												flexDirection: "row",
												right: 0,
												position: "absolute",
												// top: 10,
											}}
										>
											<TouchableOpacity
												style={{
													width: responsiveWidth(10),
													height: responsiveHeight(
														10
													),
												}}
												activeOpacity={0.8}
												onPress={() => {
													this._toggleModalText();
												}}
											>
												<Image
													source={require("../../assets/icon/close.png")}
													style={{
														width: 30,
														height: 30,
														marginTop: 5,
													}}
												/>
											</TouchableOpacity>
											{this.state.followText ==
											"" ? null : (
												<TouchableOpacity
													style={{
														width: responsiveWidth(
															12
														),
														height: responsiveHeight(
															10
														),
													}}
													activeOpacity={0.8}
													onPress={() => {
														this.setState({
															SendText: !this
																.state.SendText,
														});
														this._toggleModalText();
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
											)}
										</Right>
									</View>
									<Text
										style={{
											padding: 15,
											fontFamily: "IRANSansMobile",
											fontSize: responsiveFontSize(2),
											color: "#91020b",
											textAlign: "center",
										}}
									>
										توجه داشته باشید نام های وارد شده با
										تعداد همراه وارد شده باید یکی بوده و با
										کاما از یکدیگر جدا شود
									</Text>
									<TextInput
										placeholder=" توضیحات "
										placeholderTextColor="#d1d1d1"
										// keyboardType="numeric"
										style={{
											width: "88%",
											textAlign: "right",
											marginRight: 2,
											color: "#000",
										}}
										onChangeText={followText =>
											this.setState({ followText })
										}
										underlineColorAndroid={"transparent"}
										multiline={true}
										numberOfLines={4}
										maxLength={400}
									/>
								</View>
							</Modal>
						</View>
						<TouchableOpacity
							style={{
								width: "75%",
								height: 50,
								flexDirection: "row",
								backgroundColor: "#f4cb42",
								justifyContent: "flex-end",
								borderRadius: 15,
								marginTop: 32,
								alignItems: "center",
								bottom: 5,
							}}
						>
							<Text
								style={{
									position: "absolute",
									textAlign: "center",
									right: 0,
									left: 0,
									fontFamily: "IRANSansMobile",
									fontSize: responsiveFontSize(2),
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
		flex: 0,
		justifyContent: "center",
		left: 0,
	},
	viewModal: {
		height: "60%",
		backgroundColor: "#fff",
		borderRadius: 5,
	},
	text: {
		fontFamily: "IRANSansMobile",
		fontSize: 12,
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
