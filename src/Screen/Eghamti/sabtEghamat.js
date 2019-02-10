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
	responsiveHeight,
	responsiveWidth,
	responsiveFontSize,
} from "react-native-responsive-dimensions";
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
import Modal from "react-native-modal";
import MapboxGL from "@mapbox/react-native-mapbox-gl";
import MapboxClient from "mapbox";
import { Navigation } from "react-native-navigation";
import axios from "axios";

const MBClient = new MapboxClient(
	"pk.eyJ1IjoibGVpbGF6eiIsImEiOiJjam5oNGNtbzAwNGthM3ducnZkZ3Q1c21oIn0.WWSsGDjhXyJ6nuJ3CGtFBw"
);
MapboxGL.setAccessToken(
	"pk.eyJ1IjoibGVpbGF6eiIsImEiOiJjam5oNGNtbzAwNGthM3ducnZkZ3Q1c21oIn0.WWSsGDjhXyJ6nuJ3CGtFBw"
);

export default class sabtEghamat extends React.Component {
	constructor() {
		super();

		this.state = {
			region: {
				latitude: 51.4427,
				longitude: 33.9883,
			},
			region: {},
			visible: false,
			visibleSocial: false,
			visiblemanager: false,
			visibleB: false,
			visibleOstan: false,
			visibleCity: false,
			visibleinformation: false,
			visibleStar: false,
			visibleinMap: false,
			visibleHotel: false,
			code: "کد مرکز",
			title: "عنوان فارسی مرکز",
			title_en: "English name",
			licenseNumber: "شماره پروانه",
			address: "اردبیل اولین خیابان",
			first_name: "نام مسئول",
			last_name: "نام خانوادگی مسئول",
			mobile: "شماره موبایل",
			first_name_b: "نام بهره بردار",
			last_name_b: "نام خانوادگی بهربردار",
			typeCenter: "نوع مرکز اقامتی",
			centerTypeId: "",
			TextHotel: "برنامه هتل داری",
			Ostan: "استان",
			City: "شهرستان",
			roomNumber: "تعداد اتاق ها",
			bedNumber: "تعداد تخت",
			suitNumber: "تعداد سوئیت ها",
			Email: "ایمیل مرکز",
			webSite: "آدرس وب سایت",
			cityId: "",
			provinceId: "",
			capacity: "ظرفیت پذیرش",
			star0: "",
			star1: "",
			star2: "",
			star3: "",
			star4: "",
			star5: "",
			map: "51.4427 , 33.9883",
			chanageCenter: false,
			chanageProvince: false,
			chanageCity: false,
			changeStar: false,
			Hotel: false,
			editnumberP: false,
			editaddress: false,
			editnameManager: false,
			editfamiliManager: false,
			editPhoneManager: false,
			editNameB: false,
			editFamiliB: false,
			editeSize: false,
			editeRoom: false,
			editeBed: false,
			editnameEmail: false,
			text: "",
			isModalVisible: false,
			checked1: false,
			checked2: false,
			value: "رای شما به این مرکز",
			icon: false,
			coordinate: [0, 0],
			coordinates: [0, 0],
			dataEghamat: [],
			dataCountry: [],
			dataProvince: [],
			dataCity: [],
			dataHotel: [],
			email: "",
			pass: "",
			hotelSoftWareId: "",
		};
		this.getEghamatTypeList();
		this.GetCountry();
		this.GetProvince();
		this.EghamatHotelSoftware();
		this.codeCenter = React.createRef();
		this.nameCenter = React.createRef();
		this.nameEnCenter = React.createRef();
		this.licenseNumber = React.createRef();
		this.address = React.createRef();
		this.first_name = React.createRef();
		this.last_name = React.createRef();
		this.mobile = React.createRef();
		this.web = React.createRef();
		this.email = React.createRef();
		this.first_name_b = React.createRef();
		this.last_name_b = React.createRef();
		this.roomNumber = React.createRef();
		this.bedNumber = React.createRef();
		this.suitNumber = React.createRef();
		this.capacity = React.createRef();
	}

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(
			position => {
				const lat = parseFloat(position.coords.latitude);
				const long = parseFloat(position.coords.longitude);

				this.setState({
					latuser: lat,
					lonuser: long,
					error: "true",
				});
			},
			error => this.setState({ error: error.message }),
			{ enableHighAccuracy: true, timeout: 10000, maximumAge: 500 }
		);
	}

	_toggleModal = () =>
		this.setState({ isModalVisible: !this.state.isModalVisible });

	_toggleModalStar = () =>
		this.setState({ visibleStar: !this.state.visibleStar });

	_visibleOstan = () =>
		this.setState({ visibleOstan: !this.state.visibleOstan });

	_visibleCity = () =>
		this.setState({ visibleCity: !this.state.visibleCity });

	_toggleHotel = () => this.setState({ Hotel: !this.state.Hotel });

	licenseNumber = () => this.licenseNumber.current.focus();

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
					this._visibleOstan();
					this.setState({
						centerTypeId: item.id,
						typeCenter: item.title,
						chanageCenter: true,
					});
				}}
			>
				<Text style={styleTur.renderText}>{item.title}</Text>
			</TouchableHighlight>
		);
	}
	renderStar({ item }) {
		return (
			<TouchableOpacity
				activeOpacity={0.8}
				style={{
					backgroundColor: "#1A4B85",
					borderRadius: 10,
					marginTop: 4,
					marginRight: 5,
					marginLeft: 5,
					height: 40,
				}}
				onPress={() => {
					this._toggleModalStar();
					this.setState({
						value: item.value,
						changeStar: true,
					});

					if (item.value == 0) {
						this.setState({
							star0: "0",
						});
					} else if (item.value == 1) {
						this.setState({
							star1: "1",
						});
					} else if (item.value == 2) {
						this.setState({
							star2: "2",
						});
					} else if (item.value == 3) {
						this.setState({
							star3: 3,
						});
					} else if (item.value == 4) {
						this.setState({
							star4: "4",
						});
					} else if (item.value == 5) {
						star5: "5";
					}
				}}
			>
				<Text style={styleTur.renderText}>{item.label}</Text>
			</TouchableOpacity>
		);
	}
	renderOstan({ item }) {
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
					this._visibleOstan();
					this.GetCity(item.id);
					this._visibleCity();
					this.setState({
						Ostan: item.title,
						provinceId: item.id,
						chanageProvince: true,
					});
				}}
			>
				<Text style={styleTur.renderText}>{item.title}</Text>
			</TouchableHighlight>
		);
	}

	renderCity({ item }) {
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
					this._visibleCity();
					this.setState({
						City: item.title,
						cityId: item.id,
						chanageCity: true,
					});
				}}
			>
				<Text style={styleTur.renderText}>{item.title}</Text>
			</TouchableHighlight>
		);
	}

	renderHotel({ item }) {
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
					this._toggleHotel();
					this.setState({
						TextHotel: item.title,
						hotelSoftWareId: item.id,
					});
				}}
			>
				<Text style={styleTur.renderText}>{item.title}</Text>
			</TouchableHighlight>
		);
	}

	LocationUser() {
		return (
			<MapboxGL.PointAnnotation
				key="pointAnnotation"
				id="pointAnnotation"
				coordinate={[
					this.state.coordinate[0],
					this.state.coordinate[1],
				]}
			>
				<Icon name={"flag"} size={20} style={{ color: "red" }} />

				{/* <MapboxGL.Callout title="برای انتخاب دوباره کلیک کن" /> */}
			</MapboxGL.PointAnnotation>
		);
	}

	async getEghamatTypeList() {
		let usrname = await AsyncStorage.getItem("email");
		let pass = await AsyncStorage.getItem("pass");
		axios

			.post(
				"http://amarcht.ir/ws_app/AndroidService.asmx/EghamatTypeList",
				{
					email: usrname,
					pass: pass,
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
				}
			)
			.then(json => {
				let res = json.data.replace(`{"d":null}`, "");
				let Data = JSON.parse(res);
				let Table = Data.Table;
				this.setState({
					dataEghamat: Table,
					email: usrname,
					pass: pass,
				});
			})
			.catch(err => {
				alert(" لطفا از اتصال اینترنت خود اطمینان حاصل فرمایید");
			});
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
			});
		// .catch(err => {
		// 	alert("خطا کشور");
		// });
	}

	async GetProvince() {
		let usrname = await AsyncStorage.getItem("email");
		let pass = await AsyncStorage.getItem("pass");
		axios

			.post("http://amarcht.ir/ws_app/AndroidService.asmx/GetProvince", {
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
					dataProvince: Table,
				});
			});
		// .catch(err => {
		// 	alert("خطا استان");
		// });
	}

	async GetCity(id) {
		let usrname = await AsyncStorage.getItem("email");
		let pass = await AsyncStorage.getItem("pass");

		axios
			.post("http://amarcht.ir/ws_app/AndroidService.asmx/GetCity", {
				email: usrname,
				pass: pass,
				provinceId: id,
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
			})
			.then(json => {
				let res = json.data.replace(`{"d":null}`, "");
				let Data = JSON.parse(res);
				let Table = Data.Table;
				this.setState({
					dataCity: Table,
				});
			});
		// .catch(err => {
		// 	alert(id);
		// });
	}

	async EghamatHotelSoftware() {
		let usrname = await AsyncStorage.getItem("email");
		let pass = await AsyncStorage.getItem("pass");

		axios
			.post(
				"http://amarcht.ir/ws_app/AndroidService.asmx/EghamatHotelSoftware",
				{
					email: usrname,
					pass: pass,

					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
				}
			)
			.then(json => {
				let res = json.data.replace(`{"d":null}`, "");
				let Data = JSON.parse(res);
				let Table = Data.Table;
				this.setState({
					dataHotel: Table,
				});
			});
		// .catch(err => {
		// 	alert(id);
		// });
	}

	async EghamatEdit() {
		let usrname = await AsyncStorage.getItem("email");
		let pass = await AsyncStorage.getItem("pass");

		axios
			.post("http://amarcht.ir/ws_app/AndroidService.asmx/EghamatEdit", {
				email: usrname,
				pass: pass,
				title: this.state.title,
				title_en: this.state.title_en,
				address: this.state.address,
				first_name: this.state.first_name,
				last_name: this.state.last_name,
				first_name_b: this.state.first_name_b,
				last_name_b: this.state.last_name_b,
				mobile: this.state.mobile,
				cityId: this.state.cityId,
				provinceId: this.state.provinceId,
				map: this.state.map,
				bedNumber: this.state.bedNumber,
				roomNumber: this.state.roomNumber,
				suitNumber: this.state.suitNumber,
				licenseNumber: this.state.licenseNumber,
				centerTypeId: this.state.centerTypeId,
				capacity: this.state.capacity,
				star0: this.state.star0,
				star1: this.state.star1,
				star2: this.state.star2,
				star3: this.state.star3,
				star4: this.state.star4,
				star5: this.state.star5,
				webSite: this.state.webSite,
				hotelSoftWareId: this.state.hotelSoftWareId,

				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
			})
			.then(json => {
				// let res = json.data.replace(`{"d":null}`, "");
				// let Data = JSON.parse(res);
				// let Table = Data.Table;
				// this.setState({
				// 	// dataHotel: Table,
				// });
				alert(JSON.stringify(json));
			});
		// .catch(err => {
		// 	alert(id);
		// });
	}

	render() {
		const radio_props = [
			{
				label: [<Icon name={"star"} style={{ color: "#f7f740" }} />],
				value: 1,
			},
			{
				label: [
					<Icon name={"star"} style={{ color: "#f7f740" }} />,
					<Icon name={"star"} style={{ color: "#f7f740" }} />,
				],
				value: 2,
			},
			{
				label: [
					<Icon name={"star"} style={{ color: "#f7f740" }} />,
					<Icon name={"star"} style={{ color: "#f7f740" }} />,
					<Icon name={"star"} style={{ color: "#f7f740" }} />,
				],
				value: 3,
			},
			{
				label: [
					<Icon name={"star"} style={{ color: "#f7f740" }} />,
					<Icon name={"star"} style={{ color: "#f7f740" }} />,
					<Icon name={"star"} style={{ color: "#f7f740" }} />,
					<Icon name={"star"} style={{ color: "#f7f740" }} />,
				],
				value: 4,
			},
			{
				label: [
					<Icon name={"star"} style={{ color: "#f7f740" }} />,
					<Icon name={"star"} style={{ color: "#f7f740" }} />,
					<Icon name={"star"} style={{ color: "#f7f740" }} />,
					<Icon name={"star"} style={{ color: "#f7f740" }} />,
					<Icon name={"star"} style={{ color: "#f7f740" }} />,
				],
				value: 5,
			},
			{
				label: ["هیچ ستاره نمیگیرد"],
				value: 0,
			},
		];
		const dropDown = this.state.visible ? "arrow-dropdown" : "arrow-dropup";
		const dropDownSocial = this.state.visibleSocial
			? "arrow-dropdown"
			: "arrow-dropup";
		const dropDownmanager = this.state.visiblemanager
			? "arrow-dropdown"
			: "arrow-dropup";
		const dropDownB = this.state.visibleB
			? "arrow-dropdown"
			: "arrow-dropup";

		const dropDowninformation = this.state.visibleinformation
			? "arrow-dropdown"
			: "arrow-dropup";
		const dropDownMap = this.state.visibleinMap
			? "arrow-dropdown"
			: "arrow-dropup";
		const dropDownHotel = this.state.visibleHotel
			? "arrow-dropdown"
			: "arrow-dropup";

		const typeCenter = this.state.chanageCenter ? "#edeff2" : "#abacad";
		const typeProvince = this.state.chanageProvince ? "#edeff2" : "#abacad";
		const typeCity = this.state.chanageCity ? "#edeff2" : "#abacad";
		const star = this.state.changeStar ? "#edeff2" : "#abacad";

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
							top: 10,
						}}
						showsVerticalScrollIndicator={true}
					>
						<TouchableOpacity
							activeOpacity={0.8}
							onPress={() => {
								this.setState({
									visible: !this.state.visible,
								});
							}}
							style={styleTur.Container}
						>
							<Left>
								<Text style={styleTur.subText}>
									اطلاعات مکان
								</Text>
								<Image
									source={require("../../assets/image/information.png")}
									style={styleTur.subImage}
								/>
							</Left>

							<Right>
								<Icon
									name={dropDown}
									style={styleTur.dropDown}
								/>
							</Right>
						</TouchableOpacity>
						<Content>
							{this.state.visible ? (
								<Body>
									<ScrollView
										scrollEnabled={true}
										showsVerticalScrollIndicator={true}
										contentContainerStyle={{
											justifyContent: "flex-end",
											alignItems: "center",
										}}
									>
										{/* کد مرکز */}
										<View style={styleTur.ViewItem}>
											<Item
												style={styleTur.ItemInputText}
											>
												<Image
													source={require("../../assets/image/edit.png")}
													style={styleTur.icon}
												/>

												<TextInput
													ref={this.codeCenter}
													placeholder={
														this.state.code
													}
													placeholderTextColor="#abacad"
													style={styleTur.textInput}
													onChangeText={code =>
														this.setState({
															code,
														})
													}
													underlineColorAndroid={
														"transparent"
													}
													keyboardType="numeric"
													returnKeyType="next"
													onSubmitEditing={() =>
														this.nameCenter.current.focus()
													}
												/>
											</Item>
										</View>
										{/* اسم مرکز */}
										<View style={styleTur.ViewItem}>
											<Item
												style={styleTur.ItemInputText}
											>
												<Image
													source={require("../../assets/image/home_page.png")}
													style={styleTur.icon}
												/>
												<TextInput
													ref={this.nameCenter}
													placeholder={
														this.state.title
													}
													placeholderTextColor="#abacad"
													style={styleTur.textInput}
													onChangeText={title =>
														this.setState({ title })
													}
													underlineColorAndroid={
														"transparent"
													}
													returnKeyType="next"
													onSubmitEditing={() =>
														this.nameEnCenter.current.focus()
													}
												/>
											</Item>
										</View>
										{/* اسم مرکز انگلیسی */}
										<View style={styleTur.ViewItem}>
											<Item
												style={styleTur.ItemInputText}
											>
												<Image
													source={require("../../assets/image/home_page.png")}
													style={styleTur.icon}
												/>
												<TextInput
													ref={this.nameEnCenter}
													placeholder={
														this.state.title_en
													}
													placeholderTextColor="#abacad"
													style={styleTur.textInput}
													onChangeText={title_en =>
														this.setState({
															title_en,
														})
													}
													underlineColorAndroid={
														"transparent"
													}
													returnKeyType="next"
													onSubmitEditing={() =>
														this.licenseNumber.current.focus()
													}
												/>
											</Item>
										</View>

										{/* شماره پروانه */}
										<View style={styleTur.ViewItem}>
											<Item
												style={styleTur.ItemInputText}
												onPress={() =>
													this.setState({
														editnumberP: !this.state
															.editnumberP,
													})
												}
											>
												<Image
													source={require("../../assets/image/services.png")}
													style={styleTur.icon}
												/>
												<TextInput
													ref={this.licenseNumber}
													placeholder={
														this.state.licenseNumber
													}
													placeholderTextColor="#abacad"
													style={styleTur.textInput}
													onChangeText={licenseNumber =>
														this.setState({
															licenseNumber,
														})
													}
													editable={
														this.state.editnumberP
													}
													underlineColorAndroid={
														"transparent"
													}
													returnKeyType="next"
													onSubmitEditing={() =>
														this.address.current.focus()
													}
												/>
											</Item>
										</View>
										{/* آدرس مرکز */}
										<View style={styleTur.ViewItem}>
											<Item
												style={styleTur.ItemInputText}
												onPress={() =>
													this.setState({
														editaddress: !this.state
															.editaddress,
													})
												}
											>
												<Image
													source={require("../../assets/image/address.png")}
													style={styleTur.icon}
												/>
												<TextInput
													ref={this.address}
													placeholder={
														this.state.address
													}
													placeholderTextColor="#abacad"
													// multiline={true}
													numberOfLines={4}
													style={styleTur.textInput}
													onChangeText={address =>
														this.setState({
															address,
														})
													}
													editable={
														this.state.editaddress
													}
													underlineColorAndroid={
														"transparent"
													}
													returnKeyType="next"
													onSubmitEditing={
														this._toggleModal
													}
												/>
											</Item>
										</View>
										{/* نوع مرکز */}
										<View style={styleTur.ViewItem}>
											<Item
												style={[
													styleTur.ItemInputText,
													{ top: 5 },
												]}
												onPress={this._toggleModal}
											>
												<Image
													source={require("../../assets/image/typecenter.png")}
													style={styleTur.icon}
												/>
												<Text
													style={[
														styleTur.text,
														{ color: typeCenter },
													]}
												>
													{this.state.typeCenter}
												</Text>
											</Item>

											<Modal
												isVisible={
													this.state.isModalVisible
												}
												animationOut={"slideOutDown"}
											>
												<View
													style={styleTur.viewModal}
												>
													<View
														style={{
															flexDirection:
																"row",
														}}
													>
														<Left>
															<Text
																style={{
																	margin: 10,
																	// position:
																	// 	"absolute",
																	left: 0,
																	fontSize: responsiveFontSize(
																		2
																	),

																	fontFamily:
																		"IRANSansMobile",
																	color:
																		"#1A4B85",
																}}
															>
																نوع مرکز :
															</Text>
														</Left>

														<Right>
															<TouchableOpacity
																activeOpacity={
																	0.8
																}
																onPress={
																	this
																		._toggleModal
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
														data={
															this.state
																.dataEghamat
														}
														renderItem={this.renderCenter.bind(
															this
														)}
														style={{ margin: 10 }}
													/>
												</View>
											</Modal>
										</View>
										{/* استان  */}
										<View style={styleTur.ViewItem}>
											<Item
												style={[
													styleTur.ItemInputText,
													{ top: 5 },
												]}
												onPress={this._visibleOstan}
											>
												<Image
													source={require("../../assets/image/houses.png")}
													style={styleTur.icon}
												/>
												<Text
													style={[
														styleTur.text,
														{ color: typeProvince },
													]}
												>
													{this.state.Ostan}
												</Text>
											</Item>

											<Modal
												isVisible={
													this.state.visibleOstan
												}
												animationOut={"slideOutDown"}
												// onBackdropPress={this._toggleModal()}
											>
												<View
													style={styleTur.viewModal}
												>
													<View
														style={{
															flexDirection:
																"row",
														}}
													>
														<Left>
															<Text
																style={{
																	margin: 10,
																	// position:
																	// 	"absolute",
																	left: 0,
																	fontSize: responsiveFontSize(
																		2
																	),

																	fontFamily:
																		"IRANSansMobile",
																	color:
																		"#1A4B85",
																}}
															>
																استان :
															</Text>
														</Left>
														<Right>
															<TouchableOpacity
																activeOpacity={
																	0.8
																}
																onPress={
																	this
																		._visibleOstan
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
														data={
															this.state
																.dataProvince
														}
														renderItem={this.renderOstan.bind(
															this
														)}
														style={{ margin: 10 }}
													/>
												</View>
											</Modal>
										</View>
										{/* شهرستان */}
										<View style={styleTur.ViewItem}>
											<Item
												style={[
													styleTur.ItemInputText,
													// { top: 3 },
												]}
												onPress={this._visibleCity}
											>
												<Image
													source={require("../../assets/image/home.png")}
													style={styleTur.icon}
												/>
												<Text
													style={[
														styleTur.text,
														{ color: typeCity },
													]}
												>
													{this.state.City}
												</Text>
											</Item>

											<Modal
												isVisible={
													this.state.visibleCity
												}
												animationOut={"slideOutDown"}
											>
												<View
													style={styleTur.viewModal}
												>
													<View
														style={{
															flexDirection:
																"row",
														}}
													>
														<Left>
															<Text
																style={{
																	margin: 10,
																	// position:
																	// 	"absolute",
																	left: 0,

																	fontSize: responsiveFontSize(
																		2
																	),
																	fontFamily:
																		"IRANSansMobile",
																	color:
																		"#1A4B85",
																}}
															>
																شهرستان:
															</Text>
														</Left>
														<Right>
															<TouchableOpacity
																activeOpacity={
																	0.8
																}
																onPress={
																	this
																		._visibleCity
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
														data={
															this.state.dataCity
														}
														renderItem={this.renderCity.bind(
															this
														)}
														style={{ margin: 10 }}
													/>
												</View>
											</Modal>
										</View>
									</ScrollView>
								</Body>
							) : null}
						</Content>
						{/* شبکه های اجتماعی  */}
						<TouchableOpacity
							activeOpacity={0.8}
							onPress={() => {
								this.setState({
									visibleSocial: !this.state.visibleSocial,
								});
							}}
							style={styleTur.Container}
						>
							<Left style={{ flexDirection: "row" }}>
								<Text style={styleTur.subText}>
									شبکه های اجتماعی
								</Text>
								<Image
									source={require("../../assets/image/public_service.png")}
									style={styleTur.subImage}
								/>
							</Left>

							<Right>
								<Icon
									name={dropDownSocial}
									style={styleTur.dropDown}
								/>
							</Right>
						</TouchableOpacity>
						<Content>
							{this.state.visibleSocial ? (
								<Body>
									<ScrollView
										scrollEnabled={true}
										showsVerticalScrollIndicator={true}
										contentContainerStyle={{
											justifyContent: "flex-end",
											alignItems: "center",
										}}
									>
										{/* وب سایت   */}
										<View style={styleTur.ViewItem}>
											<Item
												style={styleTur.ItemInputText}
											>
												<Image
													source={require("../../assets/image/website.png")}
													style={styleTur.icon}
												/>
												<TextInput
													ref={this.web}
													placeholder={
														this.state.webSite
													}
													placeholderTextColor="#abacad"
													style={styleTur.textInput}
													onChangeText={webSite =>
														this.setState({
															webSite,
														})
													}
													underlineColorAndroid={
														"transparent"
													}
													returnKeyType="next"
													onSubmitEditing={() =>
														this.email.current.focus()
													}
													keyboardType={
														"email-address"
													}
												/>
											</Item>
										</View>
										{/* ایمیل */}
										<View style={styleTur.ViewItem}>
											<Item
												style={styleTur.ItemInputText}
												onPress={() =>
													this.setState({
														editnameEmail: !this
															.state
															.editnameEmail,
													})
												}
											>
												<Image
													source={require("../../assets/image/email1.png")}
													style={styleTur.icon}
												/>
												<TextInput
													ref={this.email}
													placeholder={
														this.state.Email
													}
													placeholderTextColor="#abacad"
													style={styleTur.textInput}
													onChangeText={Email =>
														this.setState({ Email })
													}
													underlineColorAndroid={
														"transparent"
													}
													onSubmitEditing={() =>
														this.email.current.focus()
													}
													keyboardType={
														"email-address"
													}
												/>
											</Item>
										</View>
									</ScrollView>
								</Body>
							) : null}
						</Content>

						{/* مسئول  */}
						<TouchableOpacity
							activeOpacity={0.8}
							onPress={() => {
								this.setState({
									visiblemanager: !this.state.visiblemanager,
								});
							}}
							style={styleTur.Container}
						>
							<Left>
								<Text style={styleTur.subText}>مسئول</Text>
								<Image
									source={require("../../assets/image/social_networks.png")}
									style={styleTur.subImage}
								/>
							</Left>
							<Right>
								<Icon
									name={dropDownmanager}
									style={styleTur.dropDown}
								/>
							</Right>
						</TouchableOpacity>
						<Content
						// style={{ width: "90%" }}
						>
							{this.state.visiblemanager ? (
								<Body>
									<ScrollView
										scrollEnabled={true}
										showsVerticalScrollIndicator={true}
										contentContainerStyle={{
											justifyContent: "flex-end",
											alignItems: "center",
										}}
									>
										{/* نام مسئول  */}
										<View style={styleTur.ViewItem}>
											<Item
												style={styleTur.ItemInputText}
												onPress={() =>
													this.setState({
														editnameManager: !this
															.state
															.editnameManager,
													})
												}
											>
												<Image
													source={require("../../assets/image/manager.png")}
													style={styleTur.icon}
												/>
												<TextInput
													ref={this.first_name}
													placeholder={
														this.state.first_name
													}
													placeholderTextColor="#abacad"
													style={styleTur.textInput}
													onChangeText={first_name =>
														this.setState({
															first_name,
														})
													}
													returnKeyType="next"
													onSubmitEditing={() =>
														this.last_name.current.focus()
													}
													underlineColorAndroid={
														"transparent"
													}
												/>
											</Item>
										</View>
										{/* نام خانوادگی مسئول  */}
										<View style={styleTur.ViewItem}>
											<Item
												style={styleTur.ItemInputText}
												onPress={() =>
													this.setState({
														editfamiliManager: !this
															.state
															.editfamiliManager,
													})
												}
											>
												<Image
													source={require("../../assets/image/manager.png")}
													style={styleTur.icon}
												/>
												<TextInput
													ref={this.last_name}
													placeholder={
														this.state.last_name
													}
													placeholderTextColor="#abacad"
													style={styleTur.textInput}
													onChangeText={last_name =>
														this.setState({
															last_name,
														})
													}
													onSubmitEditing={() =>
														this.mobile.current.focus()
													}
													underlineColorAndroid={
														"transparent"
													}
													returnKeyType="next"
												/>
											</Item>
										</View>

										{/* تلفن همراه مسئول */}
										<View style={styleTur.ViewItem}>
											<Item
												style={styleTur.ItemInputText}
												onPress={() =>
													this.setState({
														editPhoneManager: !this
															.state
															.editPhoneManager,
													})
												}
											>
												<Image
													source={require("../../assets/image/mobile.png")}
													style={styleTur.icon}
												/>
												<TextInput
													ref={this.mobile}
													placeholder={
														this.state.mobile
													}
													placeholderTextColor="#abacad"
													style={styleTur.textInput}
													onChangeText={mobile =>
														this.setState({
															mobile,
														})
													}
													underlineColorAndroid={
														"transparent"
													}
													onSubmitEditing={() =>
														this.mobile.current.focus()
													}
													keyboardType={"numeric"}
													maxLength={11}
												/>
											</Item>
										</View>
									</ScrollView>
								</Body>
							) : null}
						</Content>

						{/* بهربردار */}
						<TouchableOpacity
							activeOpacity={0.8}
							onPress={() => {
								this.setState({
									visibleB: !this.state.visibleB,
								});
							}}
							style={styleTur.Container}
						>
							<Left>
								<Text style={styleTur.subText}>بهربردار</Text>
								<Image
									source={require("../../assets/image/manager.png")}
									style={styleTur.subImage}
								/>
							</Left>
							<Right>
								<Icon
									name={dropDownB}
									style={styleTur.dropDown}
								/>
							</Right>
						</TouchableOpacity>
						<Content
						// style={{ width: "90%" }}
						>
							{this.state.visibleB ? (
								<Body>
									<ScrollView
										scrollEnabled={true}
										showsVerticalScrollIndicator={true}
										contentContainerStyle={{
											justifyContent: "flex-end",
											alignItems: "center",
										}}
									>
										{/* نام بهربردار  */}
										<View style={styleTur.ViewItem}>
											<Item
												style={styleTur.ItemInputText}
												onPress={() =>
													this.setState({
														editNameB: !this.state
															.editNameB,
													})
												}
											>
												<Image
													source={require("../../assets/image/manager.png")}
													style={styleTur.icon}
												/>
												<TextInput
													ref={
														this.EghamatEdit
															.first_name_b
													}
													placeholder={
														this.state.first_name_b
													}
													placeholderTextColor="#abacad"
													style={styleTur.textInput}
													onChangeText={first_name_b =>
														this.setState({
															first_name_b,
														})
													}
													underlineColorAndroid={
														"transparent"
													}
													returnKeyType="next"
													onSubmitEditing={() =>
														this.last_name_b.current.focus()
													}
												/>
											</Item>
										</View>
										{/* نام خانوادگی بهره بردار  */}
										<View style={styleTur.ViewItem}>
											<Item
												style={styleTur.ItemInputText}
												onPress={() =>
													this.setState({
														editFamiliB: !this.state
															.editFamiliB,
													})
												}
											>
												<Image
													source={require("../../assets/image/manager.png")}
													style={styleTur.icon}
												/>
												<TextInput
													ref={this.last_name_b}
													placeholder={
														this.state.last_name_b
													}
													placeholderTextColor="#abacad"
													style={styleTur.textInput}
													onChangeText={last_name_b =>
														this.setState({
															last_name_b,
														})
													}
													onSubmitEditing={() =>
														this.last_name_b.current.focus()
													}
													underlineColorAndroid={
														"transparent"
													}
												/>
											</Item>
										</View>
									</ScrollView>
								</Body>
							) : null}
						</Content>

						{/* اطلاعات مرکز */}

						<TouchableOpacity
							activeOpacity={0.8}
							onPress={() => {
								this.setState({
									visibleinformation: !this.state
										.visibleinformation,
								});
							}}
							style={styleTur.Container}
						>
							<Left>
								<Text style={styleTur.subText}>
									اطلاعات مرکز
								</Text>
								<Image
									source={require("../../assets/image/edit.png")}
									style={styleTur.subImage}
								/>
							</Left>
							<Right>
								<Icon
									name={dropDowninformation}
									style={styleTur.dropDown}
								/>
							</Right>
						</TouchableOpacity>
						<Content
						// style={{ width: "90%" }}
						>
							{this.state.visibleinformation ? (
								<Body>
									<ScrollView
										scrollEnabled={true}
										showsVerticalScrollIndicator={true}
										contentContainerStyle={{
											justifyContent: "flex-end",
											alignItems: "center",
										}}
									>
										{/* ظرفیت پذیرش */}
										<View style={styleTur.ViewItem}>
											<Item
												style={styleTur.ItemInputText}
												onPress={() =>
													this.setState({
														editeSize: !this.state
															.editeSize,
													})
												}
											>
												<Image
													source={require("../../assets/image/users.png")}
													style={styleTur.icon}
												/>
												<TextInput
													ref={this.capacity}
													placeholder={
														this.state.capacity
													}
													placeholderTextColor="#abacad"
													style={styleTur.textInput}
													keyboardType="numeric"
													onChangeText={capacity =>
														this.setState({
															capacity,
														})
													}
													underlineColorAndroid={
														"transparent"
													}
													returnKeyType="next"
													onSubmitEditing={() =>
														this.roomNumber.current.focus()
													}
												/>
											</Item>
										</View>

										{/* تعداد اتاق  */}
										<View style={styleTur.ViewItem}>
											<Item
												style={styleTur.ItemInputText}
												onPress={() =>
													this.setState({
														editeRoom: !this.state
															.editeRoom,
													})
												}
											>
												<Image
													source={require("../../assets/image/room.png")}
													style={styleTur.icon}
												/>
												<TextInput
													ref={this.roomNumber}
													placeholder={
														this.state.roomNumber
													}
													placeholderTextColor="#abacad"
													keyboardType="numeric"
													style={styleTur.textInput}
													onChangeText={roomNumber =>
														this.setState({
															roomNumber,
														})
													}
													returnKeyType="next"
													onSubmitEditing={() =>
														this.bedNumber.current.focus()
													}
													underlineColorAndroid={
														"transparent"
													}
												/>
											</Item>
										</View>
										{/* تعداد تخت  */}
										<View style={styleTur.ViewItem}>
											<Item
												style={styleTur.ItemInputText}
												onPress={() =>
													this.setState({
														editeBed: !this.state
															.editeBed,
													})
												}
											>
												<Image
													source={require("../../assets/image/bed.png")}
													style={styleTur.icon}
												/>
												<TextInput
													ref={this.bedNumber}
													placeholder={
														this.state.bedNumber
													}
													placeholderTextColor="#abacad"
													style={styleTur.textInput}
													keyboardType="numeric"
													onChangeText={bedNumber =>
														this.setState({
															bedNumber,
														})
													}
													returnKeyType="next"
													onSubmitEditing={() =>
														this.suitNumber.current.focus()
													}
													underlineColorAndroid={
														"transparent"
													}
												/>
											</Item>
										</View>
										{/* تعداد سوئیت */}
										<View style={styleTur.ViewItem}>
											<Item
												style={styleTur.ItemInputText}
											>
												<Image
													source={require("../../assets/image/bed.png")}
													style={styleTur.icon}
												/>
												<TextInput
													ref={this.suitNumber}
													placeholder={
														this.state.suitNumber
													}
													placeholderTextColor="#abacad"
													style={styleTur.textInput}
													keyboardType="numeric"
													onChangeText={suitNumber =>
														this.setState({
															suitNumber,
														})
													}
													underlineColorAndroid={
														"transparent"
													}
													returnKeyType="next"
													onSubmitEditing={
														this._toggleModalStar
													}
												/>
											</Item>
										</View>
										{/* تعداد ستاره  */}
										<View style={styleTur.ViewItem}>
											<Item
												style={[
													styleTur.ItemInputText,
													{ top: 5 },
												]}
												onPress={this._toggleModalStar}
											>
												<Image
													source={require("../../assets/image/star.png")}
													style={styleTur.icon}
												/>
												<Text
													style={[
														styleTur.text,
														{ color: star },
													]}
												>
													{this.state.value}
												</Text>
											</Item>

											<Modal
												isVisible={
													this.state.visibleStar
												}
											>
												<View
													style={{
														height: "45%",
														backgroundColor: "#fff",
														borderRadius: 5,
													}}
												>
													<Text
														style={{
															fontSize: responsiveFontSize(
																2
															),
															fontFamily:
																"IRANSansMobile",
															margin: 10,
														}}
													>
														رای دهی :
													</Text>
													<FlatList
														data={radio_props}
														renderItem={this.renderStar.bind(
															this
														)}
														style={{ margin: 10 }}
													/>
												</View>
											</Modal>
										</View>
									</ScrollView>
								</Body>
							) : null}
						</Content>

						{/* برنامه هتل داری */}
						<TouchableOpacity
							activeOpacity={0.8}
							onPress={() => {
								this.setState({
									visibleHotel: !this.state.visibleHotel,
								});
							}}
							style={styleTur.Container}
						>
							<Left>
								<Text style={styleTur.subText}>
									نرم افزار هتل داری
								</Text>
								<Image
									source={require("../../assets/image/SoftHotel.png")}
									style={styleTur.subImage}
								/>
							</Left>
							<Right>
								<Icon
									name={dropDownHotel}
									style={styleTur.dropDown}
								/>
							</Right>
						</TouchableOpacity>
						<Content>
							{this.state.visibleHotel ? (
								<View style={styleTur.ViewItem}>
									<Item
										style={[
											styleTur.ItemInputText,
											{ top: 7 },
										]}
										onPress={this._toggleHotel}
									>
										<Image
											source={require("../../assets/image/Shotel.png")}
											style={{
												width: 30,
												height: 30,
												flex: 0,
												justifyContent: "center",
												left: 0,
											}}
										/>
										<Text
											style={[
												styleTur.text,
												{ color: "#abacad" },
											]}
										>
											{this.state.TextHotel}
										</Text>
									</Item>

									<Modal
										isVisible={this.state.Hotel}
										animationOut={"slideOutDown"}
									>
										<View style={styleTur.viewModal}>
											<View
												style={{
													flexDirection: "row",
												}}
											>
												<Left>
													<Text
														style={{
															margin: 10,
															position:
																"absolute",
															right: 0,
															fontSize: responsiveFontSize(
																2
															),
															fontFamily:
																"IRANSansMobile",
															color: "#1A4B85",
														}}
													>
														برنامه هتل داری :
													</Text>
												</Left>

												<Right>
													<TouchableOpacity
														activeOpacity={0.8}
														onPress={
															this._toggleHotel
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
												data={this.state.dataHotel}
												renderItem={this.renderHotel.bind(
													this
												)}
												style={{ margin: 10 }}
											/>
										</View>
									</Modal>
								</View>
							) : null}
						</Content>

						{/* موقعیت جغرافیایی */}
						<TouchableOpacity
							activeOpacity={0.8}
							onPress={() => {
								this.setState({
									visibleinMap: !this.state.visibleinMap,
								});
							}}
							style={styleTur.Container}
						>
							<Left>
								<Text style={styleTur.subText}>
									موقعیت جغرافیایی
								</Text>
								<Image
									source={require("../../assets/image/map.png")}
									style={styleTur.subImage}
								/>
							</Left>
							<Right>
								<Icon
									name={dropDownMap}
									style={styleTur.dropDown}
								/>
							</Right>
						</TouchableOpacity>
						<Content>
							{this.state.visibleinMap ? (
								<Body>
									<ScrollView
										scrollEnabled={true}
										showsVerticalScrollIndicator={true}
										contentContainerStyle={{
											justifyContent: "flex-end",
											alignItems: "center",
										}}
									>
										{/* نقشه */}
										<View
											style={{
												flex: 1,
											}}
										>
											<View
												style={{
													width: responsiveWidth(98),
													height: responsiveHeight(
														50
													),
													marginTop: 15,
													marginBottom: 5,
												}}
											>
												<MapboxGL.MapView
													styleURL={
														MapboxGL.StyleURL.Light
													}
													zoomLevel={15}
													centerCoordinate={[
														51.439,
														33.9904,
													]}
													userTrackingMode={
														MapboxGL
															.UserTrackingModes
															.None
													}
													showUserLocation={true}
													style={styles.container}
													onRegionDidChange={region => {
														this.setState({
															coordinates:
																region.geometry
																	.coordinates,
														});
													}}
												>
													{this.LocationUser()}
												</MapboxGL.MapView>
											</View>
											<View
												style={{
													position: "absolute",
													top: 15,
												}}
											>
												<TouchableOpacity
													style={{
														backgroundColor: "#fff",
														padding: 5,
													}}
													onPress={() => {
														this.setState({
															icon: false,
															coordinate: [0, 0],
														});
													}}
												>
													<Image
														source={require("../../assets/image/location_update.png")}
														style={{
															width: 30,
															height: 30,
														}}
													/>
												</TouchableOpacity>
											</View>
											<View
												style={{
													position: "absolute",
													justifyContent: "center",
													alignItems: "center",
													top: 0,
													bottom: 0,
													left: 0,
													right: 0,
												}}
											>
												{this.state.icon == false ? (
													<TouchableOpacity
														onPress={() => {
															this.setState({
																coordinate: this
																	.state
																	.coordinates,
																icon: true,
															});
														}}
													>
														<Icon
															name={"flag"}
															size={20}
														/>
													</TouchableOpacity>
												) : null}
											</View>
										</View>
										{/* طول */}
										<View
											style={{
												width: "90%",
												height: 40,
												flexDirection: "row",
												marginTop: 5,
												alignItems: "center",
											}}
										>
											<Item
												style={{ padding: 5 }}
												onPress={() =>
													this.setState({
														editeSize: !this.state
															.editeSize,
													})
												}
											>
												<Text
													style={[
														styleTur.Iconedit_text,
														{ color: "#29abe2" },
													]}
												>
													: X
												</Text>
											</Item>
											<Item
												style={styleTur.ItemInputText}
											>
												<Text
													style={{
														color: "#abacad",
														width: "90%",
														textAlign: "left",
														marginRight: 2,
													}}
												>
													{this.state.coordinates[0]}
												</Text>
											</Item>
										</View>
										{/* عرض  */}
										<View
											style={{
												width: "90%",
												height: 40,
												flexDirection: "row",
												marginTop: 5,
												alignItems: "center",
												marginBottom: 10,
											}}
										>
											<Item
												style={{ padding: 5 }}
												onPress={() =>
													this.setState({
														editeSize: !this.state
															.editeSize,
													})
												}
											>
												<Text
													style={[
														styleTur.Iconedit_text,
														{ color: "#29abe2" },
													]}
												>
													: Y
												</Text>
											</Item>
											<Item
												style={styleTur.ItemInputText}
											>
												<Text
													style={{
														color: "#abacad",
														width: "90%",
														textAlign: "left",
														marginRight: 2,
													}}
												>
													{this.state.coordinates[1]}
												</Text>
											</Item>
										</View>
									</ScrollView>
								</Body>
							) : null}
						</Content>

						<TouchableOpacity
							style={{
								width: "75%",
								height: 50,
								flexDirection: "row",
								backgroundColor: "#f4cb42",
								justifyContent: "flex-end",
								borderRadius: 15,
								marginTop: 25,
								alignItems: "center",
								marginBottom: 20,
							}}
							onPress={() => {
								this.EghamatEdit();
							}}
						>
							<Text
								style={{
									position: "absolute",
									textAlign: "center",
									right: 0,
									left: 0,
									fontSize: responsiveFontSize(2),
									fontFamily: "IRANSansMobile",
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
export const styleTur = StyleSheet.create({
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
		right: 8,
	},
	subText: {
		position: "absolute",
		left: 50,
		fontSize: responsiveFontSize(2),
		fontFamily: "IRANSansMobile",
	},
	subImage: {
		width: 30,
		height: 30,
		left: 8,
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
		fontSize: responsiveFontSize(2),
		fontFamily: "IRANSansMobile",
	},
	ItemInputText: {
		width: "90%",
		flexDirection: "row",
	},
	textInput: {
		color: "#fff",
		width: "100%",
		textAlign: "right",
		marginRight: 2,
		fontSize: responsiveFontSize(2),
		fontFamily: "IRANSansMobile",
		padding: 5,
	},
	icon: {
		width: 20,
		height: 20,
	},
	viewModal: {
		height: "60%",
		backgroundColor: "#fff",
		borderRadius: 5,
	},
	text: {
		textAlign: "right",
		fontSize: responsiveFontSize(2),
		fontFamily: "IRANSansMobile",
		padding: 5,
	},
	renderText: {
		flex: 1,
		color: "#fff",
		textAlign: "center",
		marginTop: 5,
		fontSize: responsiveFontSize(2),
		fontFamily: "IRANSansMobile",
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
const layerStyles = MapboxGL.StyleSheet.create({
	origin: {
		circleRadius: 7,
		circleColor: "#314ccd",
	},
	destination: {
		circleRadius: 7,
		circleColor: "#314ccd",
	},
	route: {
		lineColor: "#314ccd",
		lineWidth: 6,
		lineOpacity: 0.9,
	},
});
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	map: {
		height: 400,
		marginTop: 80,
	},

	annotationContainer1: {
		width: 70,
		height: 70,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#b7a0cc",
		borderRadius: 40,
		borderColor: "#65169a",
	},

	annotationContainer3: {
		width: 35,
		height: 35,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#d7bdd6",
		borderRadius: 20,
	},
	annotationFill: {
		width: 15,
		height: 15,
		borderRadius: 15,
		borderColor: "#eaecf6",

		backgroundColor: "#a28fc3",

		width: 15,
		height: 15,
		borderRadius: 15,
		backgroundColor: "black",
	},
});
