// import React from "react";
// import {
// 	AsyncStorage,
// 	Image,
// 	FlatList,
// 	TouchableOpacity,
// 	ScrollView,
// 	Alert,
// 	BackHandler,
// 	TextInput,
// 	TouchableHighlight,
// 	Animated,
// 	Easing,
// 	StyleSheet,
// } from "react-native";
// import {
// 	Container,
// 	Header,
// 	Left,
// 	Right,
// 	Text,
// 	Button,
// 	Icon,
// 	Card,
// 	CardItem,
// 	Body,
// 	Spinner,
// 	Content,
// 	View,
// 	Input,
// 	Item,
// } from "native-base";
// import Modal from "react-native-modal";
// import MapboxGL from "@mapbox/react-native-mapbox-gl";
// import MapboxClient from "mapbox";
// const MBClient = new MapboxClient(
// 	"pk.eyJ1IjoibGVpbGF6eiIsImEiOiJjam5oNGNtbzAwNGthM3ducnZkZ3Q1c21oIn0.WWSsGDjhXyJ6nuJ3CGtFBw"
// );
// MapboxGL.setAccessToken(
// 	"pk.eyJ1IjoibGVpbGF6eiIsImEiOiJjam5oNGNtbzAwNGthM3ducnZkZ3Q1c21oIn0.WWSsGDjhXyJ6nuJ3CGtFBw"
// );

// export default class Tur extends React.Component {
// 	constructor() {
// 		super();

// 		this.state = {
// 			region: {
// 				// latitude: 51.4427,
// 				// longitude: 33.9883,
// 				latitude: 0,
// 				longitude: 0,
// 				// latitudeDelta: 0.0922,
// 				// longitudeDelta: 0.0421,
// 			},
// 			coordinates: [0, 0],
// 			coordinate: [0, 0],
// 			lonsample: 0,
// 			latsample: 0,
// 			visible: false,
// 			visibleSocial: false,
// 			visiblemanager: false,
// 			visibleB: false,
// 			visibleOstan: false,
// 			visibleCity: false,
// 			visibleinformation: false,
// 			visibleStar: false,
// 			visibleinMap: false,
// 			code: "6546542465416",
// 			nameCenterFa: "اردبیل",
// 			nameCenterEn: "Ardebil",
// 			licensenumber: "24654",
// 			numberP: "68656",
// 			address: "اردبیل اولین خیابان",
// 			nameManager: "نام مسئول",
// 			familiManager: "نام خانوادگی مسئول",
// 			phoneManager: "+9835353435",
// 			nameB: "نام بهره بردار",
// 			familiB: "نام خانوادگی بهربردار",
// 			typeCenter: "مرکز",
// 			Ostan: "استان",
// 			City: "شهرستان",
// 			Room: "0",
// 			Bed: "0",
// 			Suites: "0",
// 			Email: "sample@gmail.com",
// 			Web: "www.amar.ir",
// 			editSuites: false,
// 			editCenter: false,
// 			editnameCenterFa: false,
// 			editnameCenterEn: false,
// 			editnumberP: false,
// 			editaddress: false,
// 			editnameManager: false,
// 			editfamiliManager: false,
// 			editPhoneManager: false,
// 			editNameB: false,
// 			editFamiliB: false,
// 			editeSize: false,
// 			editeRoom: false,
// 			editeBed: false,
// 			editnameWeb: false,
// 			editnameEmail: false,
// 			text: "",
// 			isModalVisible: false,
// 			checked1: false,
// 			checked2: false,
// 			value: 0,
// 			icon: false,
// 			latitude: 0,
// 			longitude: 0,
// 			lat: 0,
// 			lon: 0,
// 		};
// 	}

// 	// componentDidMount() {
// 	// 	navigator.geolocation.getCurrentPosition(
// 	// 		position => {
// 	// 			const lat = parseFloat(position.coords.latitude);
// 	// 			const long = parseFloat(position.coords.longitude);

// 	// 			this.setState({
// 	// 				latitude: lat,
// 	// 				longitude: long,
// 	// 				error: "true",
// 	// 			});
// 	// 		},
// 	// 		error => this.setState({ error: error.message }),
// 	// 		{ enableHighAccuracy: true, timeout: 10000, maximumAge: 500 }
// 	// 	);
// 	// }

// 	_toggleModal = () =>
// 		this.setState({ isModalVisible: !this.state.isModalVisible });

// 	_toggleModalStar = () =>
// 		this.setState({ visibleStar: !this.state.visibleStar });

// 	_visibleOstan = () =>
// 		this.setState({ visibleOstan: !this.state.visibleOstan });

// 	_visibleCity = () =>
// 		this.setState({ visibleCity: !this.state.visibleCity });

// 	renderCenter({ item }) {
// 		return (
// 			<TouchableHighlight
// 				style={{
// 					backgroundColor: "#1A4B85",
// 					borderRadius: 10,
// 					marginTop: 4,
// 					marginRight: 5,
// 					marginLeft: 5,
// 					height: 40,
// 				}}
// 				onPress={() => {
// 					this._toggleModal();
// 					this.setState({
// 						typeCenter: item.title,
// 					});
// 				}}
// 			>
// 				<Text style={styleTur.renderText}>{item.title}</Text>
// 			</TouchableHighlight>
// 		);
// 	}
// 	renderStar({ item }) {
// 		return (
// 			<TouchableOpacity
// 				activeOpacity={0.8}
// 				style={{
// 					backgroundColor: "#1A4B85",
// 					borderRadius: 10,
// 					marginTop: 4,
// 					marginRight: 5,
// 					marginLeft: 5,
// 					height: 40,
// 				}}
// 				onPress={() => {
// 					this._toggleModalStar();
// 					this.setState({
// 						value: item.value,
// 					});
// 				}}
// 			>
// 				<Text style={styleTur.renderText}>{item.label}</Text>
// 			</TouchableOpacity>
// 		);
// 	}
// 	renderOstan({ item }) {
// 		return (
// 			<TouchableHighlight
// 				style={{
// 					backgroundColor: "#1A4B85",
// 					borderRadius: 10,
// 					marginTop: 4,
// 					marginRight: 5,
// 					marginLeft: 5,
// 					height: 40,
// 				}}
// 				onPress={() => {
// 					this._visibleOstan();
// 					this.setState({
// 						Ostan: item.title,
// 					});
// 				}}
// 			>
// 				<Text style={styleTur.renderText}>{item.title}</Text>
// 			</TouchableHighlight>
// 		);
// 	}

// 	renderCity({ item }) {
// 		return (
// 			<TouchableHighlight
// 				style={{
// 					backgroundColor: "#1A4B85",
// 					borderRadius: 10,
// 					marginTop: 4,
// 					marginRight: 5,
// 					marginLeft: 5,
// 					height: 40,
// 				}}
// 				onPress={() => {
// 					this._visibleCity();
// 					this.setState({
// 						City: item.title,
// 					});
// 				}}
// 			>
// 				<Text style={styleTur.renderText}>{item.title}</Text>
// 			</TouchableHighlight>
// 		);
// 	}

// 	LocationUser() {
// 		return (
// 			<MapboxGL.PointAnnotation
// 				key="pointAnnotation"
// 				id="pointAnnotation"
// 				coordinate={this.state.coordinate}
// 			>
// 				<View style={styles.annotationFill} />
// 				<MapboxGL.Callout title="شما اینجایی :)" />
// 			</MapboxGL.PointAnnotation>
// 		);
// 	}
// 	renderPoint() {
// 		return (
// 			<MapboxGL.PointAnnotation
// 				key="pointAnnotation1"
// 				id="pointAnnotation1"
// 				coordinate={this.state.coordinates}
// 			>
// 				<View style={styles.annotationFill}>
// 					<Icon name="star" />
// 				</View>
// 				<MapboxGL.Callout title="بزن بریم :)" />
// 			</MapboxGL.PointAnnotation>
// 		);
// 	}

// 	onRegionChange(region) {
// 		this.state.region.setValue(region);
// 	}

// 	render() {
// 		const data = [
// 			{ title: "اقامتگاه بوم گردی", key: "item1" },
// 			{ title: "هتل", key: "item2" },
// 			{ title: "کمپنینگ", key: "item3" },
// 			{ title: "مهمانسرا", key: "item4" },
// 			{ title: "هتل آپارتمان", key: "item5" },
// 			{ title: "مهمان پذیر", key: "item5" },
// 			{ title: "پانسیون", key: "item5" },
// 			{ title: "خوابگاه", key: "item5" },
// 			{ title: "زائرسرا", key: "item5" },
// 			{ title: "متل", key: "item5" },
// 			{ title: "اقامتگاه سنتی", key: "item5" },
// 			{ title: "بین راهی", key: "item5" },
// 			{ title: "ویلا", key: "item5" },
// 		];

// 		const dataOstan = [{ title: "اردبیل", key: "item1" }];
// 		const dataCity = [{ title: "اردبیل", key: "item1" }];
// 		const radio_props = [
// 			{
// 				label: [<Icon name={"star"} style={{ color: "#f7f740" }} />],
// 				value: 1,
// 			},
// 			{
// 				label: [
// 					<Icon name={"star"} style={{ color: "#f7f740" }} />,
// 					<Icon name={"star"} style={{ color: "#f7f740" }} />,
// 				],
// 				value: 2,
// 			},
// 			{
// 				label: [
// 					<Icon name={"star"} style={{ color: "#f7f740" }} />,
// 					<Icon name={"star"} style={{ color: "#f7f740" }} />,
// 					<Icon name={"star"} style={{ color: "#f7f740" }} />,
// 				],
// 				value: 3,
// 			},
// 			{
// 				label: [
// 					<Icon name={"star"} style={{ color: "#f7f740" }} />,
// 					<Icon name={"star"} style={{ color: "#f7f740" }} />,
// 					<Icon name={"star"} style={{ color: "#f7f740" }} />,
// 					<Icon name={"star"} style={{ color: "#f7f740" }} />,
// 				],
// 				value: 4,
// 			},
// 			{
// 				label: [
// 					<Icon name={"star"} style={{ color: "#f7f740" }} />,
// 					<Icon name={"star"} style={{ color: "#f7f740" }} />,
// 					<Icon name={"star"} style={{ color: "#f7f740" }} />,
// 					<Icon name={"star"} style={{ color: "#f7f740" }} />,
// 					<Icon name={"star"} style={{ color: "#f7f740" }} />,
// 				],
// 				value: 5,
// 			},
// 		];
// 		const dropDown = this.state.visible ? "arrow-dropup" : "arrow-dropdown";
// 		const colorCenter = this.state.editCenter ? "#edeff2" : "#abacad";
// 		const colornameFa = this.state.editnameCenterFa ? "#edeff2" : "#abacad";
// 		const colornameEn = this.state.editnameCenterEn ? "#edeff2" : "#abacad";
// 		const numberP = this.state.editnumberP ? "#edeff2" : "#abacad";
// 		const address = this.state.editaddress ? "#edeff2" : "#abacad";
// 		const nameManager = this.state.editnameManager ? "#edeff2" : "#abacad";
// 		const familiManager = this.state.editfamiliManager
// 			? "#edeff2"
// 			: "#abacad";
// 		const phoneManager = this.state.editPhoneManager
// 			? "#edeff2"
// 			: "#abacad";
// 		const nameB = this.state.editNameB ? "#edeff2" : "#abacad";
// 		const familiB = this.state.editFamiliB ? "#edeff2" : "#abacad";
// 		const size = this.state.editeSize ? "#edeff2" : "#abacad";
// 		const Bed = this.state.editeBed ? "#edeff2" : "#abacad";
// 		const Room = this.state.editeRoom ? "#edeff2" : "#abacad";
// 		const Suites = this.state.editeSuites ? "#edeff2" : "#abacad";
// 		const Web = this.state.editnameWeb ? "#edeff2" : "#abacad";
// 		const Email = this.state.editnameEmail ? "#edeff2" : "#abacad";

// 		return (
// 			<Body
// 				style={{
// 					backgroundColor: "#1A4B85",
// 					width: "100%",
// 					flex: 1,
// 				}}
// 			>
// 				<ScrollView
// 					contentContainerStyle={{
// 						width: "100%",
// 						justifyContent: "center",
// 						alignItems: "center",
// 					}}
// 					showsVerticalScrollIndicator={true}
// 				>
// 					<Content
// 					// style={{ width: "90%" }}
// 					>
// 						<Body>
// 							<ScrollView
// 								scrollEnabled={true}
// 								showsVerticalScrollIndicator={true}
// 								contentContainerStyle={{
// 									justifyContent: "flex-end",
// 									alignItems: "center",
// 								}}
// 							>
// 								{/* طول */}
// 								<View
// 									style={{
// 										width: "90%",
// 										height: 40,
// 										flexDirection: "row",
// 										marginTop: 5,
// 										alignItems: "center",
// 									}}
// 								>
// 									<Item
// 										style={{ padding: 5 }}
// 										onPress={() =>
// 											this.setState({
// 												editeSize: !this.state
// 													.editeSize,
// 											})
// 										}
// 									>
// 										<Text
// 											style={[
// 												styleTur.Iconedit_text,
// 												{ color: "#29abe2" },
// 											]}
// 										>
// 											X :
// 										</Text>
// 									</Item>
// 									<Item style={styleTur.ItemInputText}>
// 										<Text
// 											style={{
// 												color: "#abacad",
// 												width: "90%",
// 												textAlign: "left",
// 												marginRight: 2,
// 											}}
// 										>
// 											{this.state.coordinates[0]}
// 										</Text>
// 									</Item>
// 								</View>
// 								{/* عرض  */}
// 								<View
// 									style={{
// 										width: "90%",
// 										height: 40,
// 										flexDirection: "row",
// 										marginTop: 5,
// 										alignItems: "center",
// 									}}
// 								>
// 									<Item
// 										style={{ padding: 5 }}
// 										onPress={() =>
// 											this.setState({
// 												editeSize: !this.state
// 													.editeSize,
// 											})
// 										}
// 									>
// 										<Text
// 											style={[
// 												styleTur.Iconedit_text,
// 												{ color: "#29abe2" },
// 											]}
// 										>
// 											Y :
// 										</Text>
// 									</Item>
// 									<Item style={styleTur.ItemInputText}>
// 										<Text
// 											style={{
// 												color: "#abacad",
// 												width: "90%",
// 												textAlign: "left",
// 												marginRight: 2,
// 											}}
// 										>
// 											{this.state.coordinates[1]}
// 										</Text>
// 									</Item>
// 								</View>

// 								{/* نقشه */}
// 								<View
// 									style={{
// 										flex: 1,
// 									}}
// 								>
// 									<View
// 										style={{
// 											width: 300,
// 											height: 300,
// 											marginTop: 5,
// 											marginBottom: 15,
// 										}}
// 									>
// 										<MapboxGL.MapView
// 											styleURL={MapboxGL.StyleURL.Light}
// 											zoomLevel={15}
// 											centerCoordinate={[51.439, 33.9904]}
// 											userTrackingMode={
// 												MapboxGL.UserTrackingModes.None
// 											}
// 											showUserLocation={true}
// 											style={styles.container}
// 											onRegionDidChange={region => {
// 												// alert(JSON.stringify(region));
// 												this.setState({
// 													coordinates:
// 														region.geometry
// 															.coordinates,
// 												});
// 											}}
// 										>
// 											{this.LocationUser()}

// 											<MapboxGL.ShapeSource
// 												id="pointAnnotation"
// 												shape={MapboxGL.geoUtils.makePoint(
// 													[
// 														this.state.lon,
// 														this.state.lat,
// 													]
// 												)}
// 											>
// 												<MapboxGL.CircleLayer
// 													id="pointAnnotation"
// 													style={
// 														layerStyles.destination
// 													}
// 												/>
// 											</MapboxGL.ShapeSource>
// 											<MapboxGL.ShapeSource
// 												id="park"
// 												shape={MapboxGL.geoUtils.makePoint(
// 													[
// 														this.state.lon,
// 														this.state.lat,
// 													]
// 												)}
// 											>
// 												<MapboxGL.CircleLayer
// 													id="parkPoint"
// 													style={layerStyles.origin}
// 												/>
// 											</MapboxGL.ShapeSource>
// 										</MapboxGL.MapView>
// 									</View>
// 									<View
// 										style={{
// 											position: "absolute",
// 											justifyContent: "center",
// 											alignItems: "center",
// 											top: 0,
// 											bottom: 0,
// 											left: 0,
// 											right: 0,
// 										}}
// 									>
// 										<TouchableOpacity
// 											onPress={() => {
// 												// alert(
// 												// 	JSON.stringify(
// 												// 		this.state.coordinates
// 												// 	)
// 												// );
// 												this.setState({
// 													latsample: this.state.region
// 														.latitude,
// 													lonsample: this.state.region
// 														.longitude,
// 													coordinate: this.state
// 														.coordinates,
// 												});
// 											}}
// 										>
// 											<Icon name={"flag"} size={20} />
// 										</TouchableOpacity>
// 									</View>
// 								</View>
// 							</ScrollView>
// 						</Body>
// 					</Content>
// 				</ScrollView>
// 			</Body>
// 		);
// 	}
// }
// export const styleTur = StyleSheet.create({
// 	Container: {
// 		width: "90%",
// 		height: 60,
// 		flexDirection: "row",
// 		// backgroundColor: "#BEBFC1",
// 		backgroundColor: "#fff",
// 		justifyContent: "flex-end",
// 		borderRadius: 15,
// 		marginTop: 20,
// 		alignItems: "center",
// 	},
// 	dropDown: {
// 		position: "absolute",
// 		left: 10,
// 	},
// 	subText: {
// 		position: "absolute",
// 		right: 50,
// 		fontFamily: "IRANSansMobile",
// 		fontSize: 16,
// 	},
// 	subImage: {
// 		width: 30,
// 		height: 30,
// 		position: "absolute",
// 		right: 10,
// 	},
// 	ViewItem: {
// 		width: "95%",
// 		height: 40,
// 		flexDirection: "row",
// 		justifyContent: "flex-end",
// 		marginTop: 5,
// 		alignItems: "center",
// 	},
// 	Iconedit_text: {
// 		width: 20,
// 		height: 20,
// 		fontFamily: "IRANSansMobile",
// 	},
// 	ItemInputText: {
// 		padding: 2,
// 		width: "80%",
// 		justifyContent: "flex-end",
// 		fontFamily: "IRANSansMobile",
// 		// height: 80,
// 	},
// 	textInput: {
// 		width: "100%",
// 		// height: 50,
// 		textAlign: "right",
// 		marginRight: 2,
// 		fontFamily: "IRANSansMobile",
// 	},
// 	icon: {
// 		width: 20,
// 		height: 20,
// 		flex: 0,
// 		justifyContent: "center",
// 		left: 0,
// 	},
// 	viewModal: {
// 		height: "60%",
// 		backgroundColor: "#fff",
// 		borderRadius: 5,
// 	},
// 	text: {
// 		fontFamily: "IRANSansMobile",
// 		fontSize: 14,
// 	},
// 	renderText: {
// 		flex: 1,
// 		color: "#fff",
// 		textAlign: "center",
// 		marginTop: 5,
// 		fontFamily: "IRANSansMobile",
// 		fontSize: 14,
// 	},
// 	annotationFill: {
// 		width: 15,
// 		height: 15,
// 		borderRadius: 15,
// 		borderColor: "#eaecf6",
// 		backgroundColor: "#a28fc3",
// 		width: 15,
// 		height: 15,
// 		backgroundColor: "black",
// 	},
// });
// const layerStyles = MapboxGL.StyleSheet.create({
// 	origin: {
// 		circleRadius: 7,
// 		circleColor: "#314ccd",
// 	},
// 	destination: {
// 		circleRadius: 7,
// 		circleColor: "#314ccd",
// 	},
// 	route: {
// 		lineColor: "#314ccd",
// 		lineWidth: 6,
// 		lineOpacity: 0.9,
// 	},
// });

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 	},
// 	map: {
// 		height: 400,
// 		marginTop: 80,
// 	},

// 	annotationContainer1: {
// 		width: 70,
// 		height: 70,
// 		alignItems: "center",
// 		justifyContent: "center",
// 		backgroundColor: "#b7a0cc",
// 		borderRadius: 40,
// 		borderColor: "#65169a",
// 	},

// 	annotationContainer3: {
// 		width: 35,
// 		height: 35,
// 		alignItems: "center",
// 		justifyContent: "center",
// 		backgroundColor: "#d7bdd6",
// 		borderRadius: 20,
// 	},
// 	annotationFill: {
// 		width: 15,
// 		height: 15,
// 		borderRadius: 15,
// 		borderColor: "#eaecf6",

// 		backgroundColor: "#a28fc3",

// 		width: 15,
// 		height: 15,
// 		borderRadius: 15,
// 		backgroundColor: "black",
// 	},
// });

// export const Map = StyleSheet.create({
// 	overallViewContainer: {
// 		position: "absolute",
// 		height: "100%",
// 		width: "100%",
// 	},
// 	container: {
// 		position: "absolute",

// 		height: "85%",
// 		width: "100%",
// 	},
// 	input: {
// 		elevation: 1,
// 		justifyContent: "flex-end",
// 		paddingRight: 10,
// 		width: 70,
// 		height: 70,
// 		alignItems: "center",
// 		justifyContent: "center",
// 		backgroundColor: "#b7a0cc",
// 		borderRadius: 40,
// 		borderColor: "#65169a",
// 	},

// 	inputContainer: {
// 		elevation: 1,
// 		width: "63%",
// 		height: "50%",
// 		borderRadius: 20,
// 		borderWidth: 2,
// 		borderColor: "#d6d7da",
// 		// shadowOpacity: 0.75,
// 		// shadowRadius: 1,
// 		// shadowColor: "gray",
// 		// shadowOffset: { height: 0, width: 0 },
// 		marginBottom: 20,
// 	},
// 	button: {
// 		elevation: 1,
// 		position: "absolute",
// 		bottom: 25,
// 		backgroundColor: "#ff6600",
// 		borderRadius: 10,
// 		width: "60%",
// 		height: 40,
// 		alignItems: "center",
// 		justifyContent: "center",
// 		// shadowOpacity: 0.75,
// 		// shadowRadius: 1,
// 		// shadowColor: "gray",
// 		// shadowOffset: { height: 0, width: 0 },
// 	},
// 	buttonText: {
// 		color: "white",
// 		fontSize: 24,
// 		fontWeight: "bold",
// 	},
// 	actionButton: {
// 		position: "absolute",
// 		width: 20,
// 		height: 20,
// 		top: 10,
// 		left: 10,
// 		zIndex: 999,
// 	},
// 	actionButtonIcon: {
// 		fontSize: 20,
// 		height: 22,
// 		color: "white",
// 	},
// 	wrapper: {
// 		height: "100%",
// 		display: "flex",
// 		flexDirection: "column",
// 		justifyContent: "space-between",
// 	},
// 	Back: {
// 		position: "absolute",

// 		left: 0,
// 		right: 0,
// 		bottom: 0,
// 		height: 100,
// 		width: "100%",
// 		display: "flex",
// 		flexDirection: "row",
// 		justifyContent: "center",

// 		backgroundColor: "red",
// 	},
// 	hexagon: {
// 		width: 100,
// 		height: 55,
// 		backgroundColor: "red",
// 		position: "relative",
// 	},
// 	hexagonbefor: {
// 		position: "absolute",
// 		top: -25,
// 		left: 0,
// 		width: 0,
// 		height: 0,
// 		borderRadius: 50,
// 	},
// 	hexagonafter: {
// 		position: "absolute",
// 		bottom: -25,
// 		left: 0,
// 		width: 0,
// 		height: 0,
// 		borderRadius: 50,
// 	},
// });

// // import React from "react";
// // import {
// // 	AsyncStorage,
// // 	Image,
// // 	FlatList,
// // 	TouchableOpacity,
// // 	ScrollView,
// // 	Alert,
// // 	BackHandler,
// // 	TextInput,
// // 	TouchableHighlight,
// // 	Animated,
// // 	Easing,
// // 	StyleSheet,
// // } from "react-native";
// // import {
// // 	Container,
// // 	Header,
// // 	Left,
// // 	Right,
// // 	Text,
// // 	Button,
// // 	Icon,
// // 	Card,
// // 	CardItem,
// // 	Body,
// // 	Spinner,
// // 	Content,
// // 	View,
// // 	Input,
// // 	Item,
// // } from "native-base";
// // import Modal from "react-native-modal";
// // import { CheckBox } from "react-native-elements";
// // import RadioForm, {
// // 	RadioButton,
// // 	RadioButtonInput,
// // 	RadioButtonLabel,
// // } from "react-native-simple-radio-button";

// // export default class Tur extends React.Component {
// // 	constructor() {
// // 		super();

// // 		this.state = {
// // 			visible: false,
// // 			visibleSocial: false,
// // 			visiblemanager: false,
// // 			visibleB: false,
// // 			visibleOstan: false,
// // 			visibleCity: false,
// // 			visibleinformation: false,
// // 			visibleStar: false,
// // 			code: "6546542465416",
// // 			nameCenterFa: "اردبیل",
// // 			nameCenterEn: "Ardebil",
// // 			licensenumber: "24654",
// // 			numberP: "68656",
// // 			address: "اردبیل اولین خیابان",
// // 			nameManager: "نام مسئول",
// // 			familiManager: "نام خانوادگی مسئول",
// // 			phoneManager: "+9835353435",
// // 			nameB: "نام بهره بردار",
// // 			familiB: "نام خانوادگی بهربردار",
// // 			typeCenter: "مرکز",
// // 			Ostan: "استان",
// // 			City: "شهرستان",
// // 			editCenter: false,
// // 			editnameCenterFa: false,
// // 			editnameCenterEn: false,
// // 			editnumberP: false,
// // 			editaddress: false,
// // 			editnameManager: false,
// // 			editfamiliManager: false,
// // 			editPhoneManager: false,
// // 			editNameB: false,
// // 			editFamiliB: false,
// // 			editeSize: false,
// // 			text: "",
// // 			isModalVisible: false,
// // 			checked1: false,
// // 			checked2: false,
// // 			value: 0,
// // 		};
// // 	}

// // 	_toggleModal = () =>
// // 		this.setState({ isModalVisible: !this.state.isModalVisible });

// // 	_toggleModalStar = () =>
// // 		this.setState({ visibleStar: !this.state.visibleStar });

// // 	_visibleOstan = () =>
// // 		this.setState({ visibleOstan: !this.state.visibleOstan });

// // 	_visibleCity = () =>
// // 		this.setState({ visibleCity: !this.state.visibleCity });

// // 	renderCenter({ item }) {
// // 		return (
// // 			<TouchableHighlight
// // 				style={{
// // 					backgroundColor: "#1A4B85",
// // 					borderRadius: 10,
// // 					marginTop: 4,
// // 					marginRight: 5,
// // 					marginLeft: 5,
// // 					height: 40,
// // 				}}
// // 				onPress={() => {
// // 					this._toggleModal();
// // 					this.setState({
// // 						typeCenter: item.value,
// // 					});
// // 				}}
// // 			>
// // 				<Text style={styleTur.renderText}>{item.label}</Text>
// // 			</TouchableHighlight>
// // 		);
// // 	}
// // 	renderOstan({ item }) {
// // 		return (
// // 			<TouchableHighlight
// // 				style={{
// // 					backgroundColor: "#1A4B85",
// // 					borderRadius: 10,
// // 					marginTop: 4,
// // 					marginRight: 5,
// // 					marginLeft: 5,
// // 					height: 40,
// // 				}}
// // 				onPress={() => {
// // 					this._visibleOstan();
// // 					this.setState({
// // 						Ostan: item.title,
// // 					});
// // 				}}
// // 			>
// // 				<Text style={styleTur.renderText}>{item.title}</Text>
// // 			</TouchableHighlight>
// // 		);
// // 	}

// // 	renderCity({ item }) {
// // 		return (
// // 			<TouchableHighlight
// // 				style={{
// // 					backgroundColor: "#1A4B85",
// // 					borderRadius: 10,
// // 					marginTop: 4,
// // 					marginRight: 5,
// // 					marginLeft: 5,
// // 					height: 40,
// // 				}}
// // 				onPress={() => {
// // 					this._visibleCity();
// // 					this.setState({
// // 						City: item.title,
// // 					});
// // 				}}
// // 			>
// // 				<Text style={styleTur.renderText}>{item.title}</Text>
// // 			</TouchableHighlight>
// // 		);
// // 	}

// // 	render() {
// // 		const data = [
// // 			{ title: "اقامتگاه بوم گردی", key: "item1" },
// // 			{ title: "هتل", key: "item2" },
// // 			{ title: "کمپنینگ", key: "item3" },
// // 			{ title: "مهمانسرا", key: "item4" },
// // 			{ title: "هتل آپارتمان", key: "item5" },
// // 			{ title: "مهمان پذیر", key: "item5" },
// // 			{ title: "پانسیون", key: "item5" },
// // 			{ title: "خوابگاه", key: "item5" },
// // 			{ title: "زائرسرا", key: "item5" },
// // 			{ title: "متل", key: "item5" },
// // 			{ title: "اقامتگاه سنتی", key: "item5" },
// // 			{ title: "بین راهی", key: "item5" },
// // 			{ title: "ویلا", key: "item5" },
// // 		];

// // 		const dataOstan = [{ title: "اردبیل", key: "item1" }];
// // 		const dataCity = [{ title: "اردبیل", key: "item1" }];
// // 		const radio_props = [
// // 			{
// // 				label: <Icon name={"star"} style={{ color: "#f7f740" }} />,
// // 				value: 1,
// // 			},
// // 			{
// // 				label: [<Icon name={"star"} />, <Icon name={"star"} />],
// // 				value: 2,
// // 			},
// // 			{
// // 				label: [
// // 					<Icon name={"star"} />,
// // 					<Icon name={"star"} />,
// // 					<Icon name={"star"} />,
// // 				],
// // 				value: 3,
// // 			},
// // 			{
// // 				label: [
// // 					<Icon name={"star"} />,
// // 					<Icon name={"star"} />,
// // 					<Icon name={"star"} />,
// // 					<Icon name={"star"} />,
// // 				],
// // 				value: 4,
// // 			},
// // 			{
// // 				label: [
// // 					<Icon name={"star"} />,
// // 					<Icon name={"star"} />,
// // 					<Icon name={"star"} />,
// // 					<Icon name={"star"} />,
// // 					<Icon name={"star"} />,
// // 				],
// // 				value: 5,
// // 			},
// // 		];
// // 		const dropDown = this.state.visible ? "arrow-dropup" : "arrow-dropdown";
// // 		const colorCenter = this.state.editCenter ? "#edeff2" : "#abacad";
// // 		const colornameFa = this.state.editnameCenterFa ? "#edeff2" : "#abacad";
// // 		const colornameEn = this.state.editnameCenterEn ? "#edeff2" : "#abacad";
// // 		const numberP = this.state.editnumberP ? "#edeff2" : "#abacad";
// // 		const address = this.state.editaddress ? "#edeff2" : "#abacad";
// // 		const nameManager = this.state.editnameManager ? "#edeff2" : "#abacad";
// // 		const familiManager = this.state.editfamiliManager
// // 			? "#edeff2"
// // 			: "#abacad";
// // 		const phoneManager = this.state.editPhoneManager
// // 			? "#edeff2"
// // 			: "#abacad";
// // 		const nameB = this.state.editNameB ? "#edeff2" : "#abacad";
// // 		const familiB = this.state.editFamiliB ? "#edeff2" : "#abacad";
// // 		const size = this.state.editeSize ? "#edeff2" : "#abacad";

// // 		return (
// // 			<Body
// // 				style={{
// // 					backgroundColor: "#1A4B85",
// // 					width: "100%",
// // 					flex: 1,
// // 				}}
// // 			>
// // 				<ScrollView
// // 					contentContainerStyle={{
// // 						width: "100%",
// // 						justifyContent: "center",
// // 						alignItems: "center",
// // 					}}
// // 					showsVerticalScrollIndicator={true}
// // 				>
// // 					{/* اطلاعات مرکز */}

// // 					<TouchableOpacity
// // 						activeOpacity={0.8}
// // 						onPress={() => {
// // 							this.setState({
// // 								visibleinformation: !this.state
// // 									.visibleinformation,
// // 							});
// // 						}}
// // 						style={styleTur.Container}
// // 					>
// // 						<Icon name={dropDown} style={styleTur.dropDown} />
// // 						<Text style={styleTur.subText}>اطلاعات مرکز</Text>
// // 						<Image
// // 							source={require("../assets/image/information.png")}
// // 							style={styleTur.subImage}
// // 						/>
// // 					</TouchableOpacity>
// // 					<Content
// // 					// style={{ width: "90%" }}
// // 					>
// // 						{this.state.visibleinformation ? (
// // 							<Body>
// // 								<ScrollView
// // 									scrollEnabled={true}
// // 									showsVerticalScrollIndicator={true}
// // 									contentContainerStyle={{
// // 										justifyContent: "flex-end",
// // 										alignItems: "center",
// // 									}}
// // 								>
// // 									{/* ظرفیت پذیرش */}
// // 									<View style={styleTur.ViewItem}>
// // 										<Item
// // 											style={{ padding: 5 }}
// // 											onPress={() =>
// // 												this.setState({
// // 													editeSize: !this.state
// // 														.editeSize,
// // 												})
// // 											}
// // 										>
// // 											<Image
// // 												source={require("../assets/image/edit_text.png")}
// // 												style={styleTur.Iconedit_text}
// // 											/>
// // 										</Item>
// // 										<Item style={styleTur.ItemInputText}>
// // 											<TextInput
// // 												style={[
// // 													{ color: size },
// // 													styleTur.textInput,
// // 												]}
// // 												onChangeText={text =>
// // 													this.setState({ text })
// // 												}
// // 												value={"10"}
// // 												editable={this.state.editeSize}
// // 												underlineColorAndroid={
// // 													"transparent"
// // 												}
// // 											/>
// // 										</Item>
// // 										<Item style={{ padding: 5 }}>
// // 											<Image
// // 												source={require("../assets/image/edit.png")}
// // 												style={styleTur.icon}
// // 											/>
// // 										</Item>
// // 									</View>
// // 									{/* تعداد ستاره  */}
// // 									<View style={styleTur.ViewItem}>
// // 										<Item
// // 											style={{ padding: 5 }}
// // 											onPress={this._toggleModal}
// // 										>
// // 											<Image
// // 												source={require("../assets/image/edit_text.png")}
// // 												style={styleTur.Iconedit_text}
// // 											/>
// // 										</Item>
// // 										<Item
// // 											style={[
// // 												styleTur.ItemInputText,
// // 												{ top: 5 },
// // 											]}
// // 										>
// // 											<Text
// // 												style={[
// // 													styleTur.text,
// // 													{ color: "#abacad" },
// // 												]}
// // 											>
// // 												{this.state.typeCenter}
// // 											</Text>
// // 										</Item>
// // 										<Item style={{ padding: 5 }}>
// // 											<Image
// // 												source={require("../assets/image/home_page.png")}
// // 												style={styleTur.icon}
// // 											/>
// // 										</Item>
// // 										<Modal
// // 											isVisible={
// // 												this.state.isModalVisible
// // 											}
// // 											animationOut={"slideOutDown"}
// // 											// onBackdropPress={this._toggleModal()}
// // 										>
// // 											<View style={styleTur.viewModal}>
// // 												<Text style={{ margin: 10 }}>
// // 													نوع مرکز :
// // 												</Text>
// // 												<FlatList
// // 													data={radio_props}
// // 													renderItem={this.renderCenter.bind(
// // 														this
// // 													)}
// // 													style={{ margin: 10 }}
// // 												/>
// // 											</View>
// // 										</Modal>
// // 									</View>
// // 								</ScrollView>
// // 							</Body>
// // 						) : null}
// // 					</Content>
// // 				</ScrollView>
// // 			</Body>
// // 		);
// // 	}
// // }
// // export const styleTur = StyleSheet.create({
// // 	Container: {
// // 		width: "90%",
// // 		height: 60,
// // 		flexDirection: "row",
// // 		// backgroundColor: "#BEBFC1",
// // 		backgroundColor: "#fff",
// // 		justifyContent: "flex-end",
// // 		borderRadius: 15,
// // 		marginTop: 20,
// // 		alignItems: "center",
// // 	},
// // 	dropDown: {
// // 		position: "absolute",
// // 		left: 10,
// // 	},
// // 	subText: {
// // 		position: "absolute",
// // 		right: 50,
// // 		fontFamily: "IRANSansMobile",
// // 		fontSize: 16,
// // 	},
// // 	subImage: {
// // 		width: 30,
// // 		height: 30,
// // 		position: "absolute",
// // 		right: 10,
// // 	},
// // 	ViewItem: {
// // 		width: "95%",
// // 		height: 40,
// // 		flexDirection: "row",
// // 		justifyContent: "flex-end",
// // 		marginTop: 5,
// // 		alignItems: "center",
// // 	},
// // 	Iconedit_text: {
// // 		width: 20,
// // 		height: 20,
// // 	},
// // 	ItemInputText: {
// // 		padding: 2,
// // 		width: "80%",
// // 		justifyContent: "flex-end",
// // 		// height: 80,
// // 	},
// // 	textInput: {
// // 		width: "100%",
// // 		// height: 50,
// // 		textAlign: "right",
// // 		marginRight: 2,
// // 	},
// // 	icon: {
// // 		width: 20,
// // 		height: 20,
// // 		flex: 0,
// // 		justifyContent: "center",
// // 		left: 0,
// // 	},
// // 	viewModal: {
// // 		height: "60%",
// // 		backgroundColor: "#fff",
// // 		borderRadius: 5,
// // 	},
// // 	text: {
// // 		fontFamily: "IRANSansMobile",
// // 		fontSize: 14,
// // 	},
// // 	renderText: {
// // 		flex: 1,
// // 		color: "#fff",
// // 		textAlign: "center",
// // 		marginTop: 5,
// // 		fontFamily: "IRANSansMobile",
// // 		fontSize: 14,
// // 	},
// // });

// // /* کد مرکز */

// // // 	<View style={styleTur.ViewItem}>
// // // 	<Item
// // // 		style={{ padding: 5 }}
// // // 		onPress={() =>
// // // 			this.setState({
// // // 				editCenter: !this.state
// // // 					.editCenter,
// // // 			})
// // // 		}
// // // 	>
// // // 		<Image
// // // 			source={require("../assets/image/edit_text.png")}
// // // 			style={styleTur.Iconedit_text}
// // // 		/>
// // // 	</Item>
// // // 	<Item style={styleTur.ItemInputText}>
// // // 		<TextInput
// // // 			style={[
// // // 				{ color: colorCenter },
// // // 				styleTur.textInput,
// // // 			]}
// // // 			onChangeText={text =>
// // // 				this.setState({ text })
// // // 			}
// // // 			value={this.state.code}
// // // 			editable={this.state.editCenter}
// // // 			underlineColorAndroid={
// // // 				"transparent"
// // // 			}
// // // 		/>
// // // 	</Item>
// // // 	<Item style={{ padding: 5 }}>
// // // 		<Image
// // // 			source={require("../assets/image/edit.png")}
// // // 			style={styleTur.icon}
// // // 		/>
// // // 	</Item>
// // // </View>
// // // {/* اسم مرکز */}
// // // <View style={styleTur.ViewItem}>
// // // 	<Item
// // // 		style={{ padding: 5 }}
// // // 		onPress={() =>
// // // 			this.setState({
// // // 				editnameCenterFa: !this
// // // 					.state.editnameCenterFa,
// // // 			})
// // // 		}
// // // 	>
// // // 		<Image
// // // 			source={require("../assets/image/edit_text.png")}
// // // 			style={styleTur.Iconedit_text}
// // // 		/>
// // // 	</Item>
// // // 	<Item style={styleTur.ItemInputText}>
// // // 		<TextInput
// // // 			style={[
// // // 				{ color: colornameFa },
// // // 				styleTur.textInput,
// // // 			]}
// // // 			onChangeText={text =>
// // // 				this.setState({ text })
// // // 			}
// // // 			value={this.state.nameCenterFa}
// // // 			editable={
// // // 				this.state.editnameCenterFa
// // // 			}
// // // 			underlineColorAndroid={
// // // 				"transparent"
// // // 			}
// // // 		/>
// // // 	</Item>
// // // 	<Item style={{ padding: 5 }}>
// // // 		<Image
// // // 			source={require("../assets/image/home_page.png")}
// // // 			style={styleTur.icon}
// // // 		/>
// // // 	</Item>
// // // </View>
// // // {/* اسم مرکز انگلیسی */}
// // // <View style={styleTur.ViewItem}>
// // // 	<Item
// // // 		style={{ padding: 5 }}
// // // 		onPress={() =>
// // // 			this.setState({
// // // 				editnameCenterEn: !this
// // // 					.state.editnameCenterEn,
// // // 			})
// // // 		}
// // // 	>
// // // 		<Image
// // // 			source={require("../assets/image/edit_text.png")}
// // // 			style={styleTur.Iconedit_text}
// // // 		/>
// // // 	</Item>
// // // 	<Item style={styleTur.ItemInputText}>
// // // 		<TextInput
// // // 			style={[
// // // 				{ color: colornameEn },
// // // 				styleTur.textInput,
// // // 			]}
// // // 			onChangeText={text =>
// // // 				this.setState({ text })
// // // 			}
// // // 			value={this.state.nameCenterEn}
// // // 			editable={
// // // 				this.state.editnameCenterEn
// // // 			}
// // // 			underlineColorAndroid={
// // // 				"transparent"
// // // 			}
// // // 		/>
// // // 	</Item>
// // // 	<Item style={{ padding: 5 }}>
// // // 		<Image
// // // 			source={require("../assets/image/home_page.png")}
// // // 			style={styleTur.icon}
// // // 		/>
// // // 	</Item>
// // // </View>

// // // {/* نوع مرکز */}
// // // <View style={styleTur.ViewItem}>
// // // 	<Item
// // // 		style={{ padding: 5 }}
// // // 		onPress={this._toggleModal()}
// // // 	>
// // // 		<Image
// // // 			source={require("../assets/image/edit_text.png")}
// // // 			style={styleTur.Iconedit_text}
// // // 		/>
// // // 	</Item>
// // // 	<Item
// // // 		style={[
// // // 			styleTur.ItemInputText,
// // // 			{ top: 5 },
// // // 		]}
// // // 	>
// // // 		<Text
// // // 			style={[
// // // 				styleTur.text,
// // // 				{ color: "#abacad" },
// // // 			]}
// // // 		>
// // // 			{this.state.typeCenter}
// // // 		</Text>
// // // 	</Item>
// // // 	<Item style={{ padding: 5 }}>
// // // 		<Image
// // // 			source={require("../assets/image/home_page.png")}
// // // 			style={styleTur.icon}
// // // 		/>
// // // 	</Item>
// // // 	<Modal
// // // 		isVisible={
// // // 			this.state.isModalVisible
// // // 		}
// // // 		animationOut={"slideOutDown"}
// // // 		// onBackdropPress={this._toggleModal()}
// // // 	>
// // // 		<View style={styleTur.viewModal}>
// // // 			<Text style={{ margin: 10 }}>
// // // 				نوع مرکز :
// // // 			</Text>
// // // 			<FlatList
// // // 				data={data}
// // // 				renderItem={this.renderCenter.bind(
// // // 					this
// // // 				)}
// // // 				style={{ margin: 10 }}
// // // 			/>
// // // 		</View>
// // // 	</Modal>
// // // </View>

// // // {/* شماره پروانه */}
// // // <View style={styleTur.ViewItem}>
// // // 	<Item
// // // 		style={{ padding: 5 }}
// // // 		onPress={() =>
// // // 			this.setState({
// // // 				editnumberP: !this.state
// // // 					.editnumberP,
// // // 			})
// // // 		}
// // // 	>
// // // 		<Image
// // // 			source={require("../assets/image/edit_text.png")}
// // // 			style={styleTur.Iconedit_text}
// // // 		/>
// // // 	</Item>
// // // 	<Item style={styleTur.ItemInputText}>
// // // 		<TextInput
// // // 			style={[
// // // 				{ color: numberP },
// // // 				styleTur.textInput,
// // // 			]}
// // // 			onChangeText={text =>
// // // 				this.setState({ text })
// // // 			}
// // // 			value={this.state.numberP}
// // // 			editable={
// // // 				this.state.editnumberP
// // // 			}
// // // 			underlineColorAndroid={
// // // 				"transparent"
// // // 			}
// // // 		/>
// // // 	</Item>
// // // 	<Item style={{ padding: 5 }}>
// // // 		<Image
// // // 			source={require("../assets/image/home_page.png")}
// // // 			style={styleTur.icon}
// // // 		/>
// // // 	</Item>
// // // </View>

// // // {/* آدرس مرکز */}
// // // <View style={styleTur.ViewItem}>
// // // 	<Item
// // // 		style={{ padding: 5 }}
// // // 		onPress={() =>
// // // 			this.setState({
// // // 				editaddress: !this.state
// // // 					.editaddress,
// // // 			})
// // // 		}
// // // 	>
// // // 		<Image
// // // 			source={require("../assets/image/edit_text.png")}
// // // 			style={styleTur.Iconedit_text}
// // // 		/>
// // // 	</Item>
// // // 	<Item style={styleTur.ItemInputText}>
// // // 		<TextInput
// // // 			style={[
// // // 				{ color: address },
// // // 				styleTur.textInput,
// // // 			]}
// // // 			onChangeText={text =>
// // // 				this.setState({ text })
// // // 			}
// // // 			value={this.state.address}
// // // 			editable={
// // // 				this.state.editaddress
// // // 			}
// // // 			underlineColorAndroid={
// // // 				"transparent"
// // // 			}
// // // 		/>
// // // 	</Item>
// // // 	<Item style={{ padding: 5 }}>
// // // 		<Image
// // // 			source={require("../assets/image/home_page.png")}
// // // 			style={styleTur.icon}
// // // 		/>
// // // 	</Item>
// // // </View>

// // {
// // 	/* استان  */
// // }
// // {
// // 	/* <View style={styleTur.ViewItem}>
// // 	<Item
// // 		style={{ padding: 5 }}
// // 		onPress={this._visibleOstan()}
// // 	>
// // 		<Image
// // 			source={require("../assets/image/edit_text.png")}
// // 			style={styleTur.Iconedit_text}
// // 		/>
// // 	</Item>
// // 	<Item
// // 		style={[
// // 			styleTur.ItemInputText,
// // 			{ top: 5 },
// // 		]}
// // 	>
// // 		<Text
// // 			style={[
// // 				styleTur.text,
// // 				{ color: "#abacad" },
// // 			]}
// // 		>
// // 			{this.state.Ostan}
// // 		</Text>
// // 	</Item>
// // 	<Item style={{ padding: 5 }}>
// // 		<Image
// // 			source={require("../assets/image/home_page.png")}
// // 			style={styleTur.icon}
// // 		/>
// // 	</Item>
// // 	<Modal
// // 		isVisible={this.state.visibleOstan}
// // 		animationOut={"slideOutDown"}
// // 		// onBackdropPress={this._visibleOstan()}
// // 	>
// // 		<View style={styleTur.viewModal}>
// // 			<Text style={{ margin: 10 }}>
// // 				استان :
// // 			</Text>
// // 			<FlatList
// // 				data={dataOstan}
// // 				renderItem={this.renderOstan.bind(
// // 					this
// // 				)}
// // 				style={{ margin: 10 }}
// // 			/>
// // 		</View>
// // 	</Modal>
// // </View> */
// // }

// // {
// // 	/* شهرستان */
// // }

// // {
// // 	/* <View style={styleTur.ViewItem}>
// // 	<Item
// // 		style={{ padding: 5 }}
// // 		onPress={this._visibleCity()}
// // 	>
// // 		<Image
// // 			source={require("../assets/image/edit_text.png")}
// // 			style={styleTur.Iconedit_text}
// // 		/>
// // 	</Item>
// // 	<Item
// // 		style={[
// // 			styleTur.ItemInputText,
// // 			{ top: 5 },
// // 		]}
// // 	>
// // 		<Text
// // 			style={[
// // 				styleTur.text,
// // 				{ color: "#abacad" },
// // 			]}
// // 		>
// // 			{this.state.City}
// // 		</Text>
// // 	</Item>
// // 	<Item style={{ padding: 5 }}>
// // 		<Image
// // 			source={require("../assets/image/home_page.png")}
// // 			style={styleTur.icon}
// // 		/>
// // 	</Item>
// // 	<Modal
// // 		isVisible={this.state.visibleCity}
// // 		animationOut={"slideOutDown"}
// // 		// onBackdropPress={this._visibleCity()}
// // 	>
// // 		<View style={styleTur.viewModal}>
// // 			<Text style={{ margin: 10 }}>
// // 				شهرستان :
// // 			</Text>
// // 			<FlatList
// // 				data={dataCity}
// // 				renderItem={this.renderCity.bind(
// // 					this
// // 				)}
// // 				style={{ margin: 10 }}
// // 			/>
// // 		</View>
// // 	</Modal>
// // </View> */
// // }

// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import PersianCalendarPicker from "react-native-persian-calendar-picker";
// import moment from "jalali-moment";

// export default class screen2 extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			selectedStartDate: null,
// 		};

// 		this.onDateChange = this.onDateChange.bind(this);
// 	}

// 	onDateChange(date) {
// 		this.setState({ selectedStartDate: date });
// 	}

// 	render() {
// 		const { selectedStartDate } = this.state;
// 		const startDate = selectedStartDate ? selectedStartDate.toString() : "";
// 		return (
// 			<View style={styles.container}>
// 				<PersianCalendarPicker onDateChange={this.onDateChange} />
// 				<View>
// 					<Text>
// 						SELECTED DATE:
// 						{startDate}
// 						{/* {this.state.date.toString()} */}
// 						{/* {moment(startDate, "ddd MMM D YYYY").format(
// 							"jYYYY/jM/jD"
// 						)} */}
// 					</Text>
// 				</View>
// 			</View>
// 		);
// 	}
// }
import React, { Component } from "react";
import {
	View,
	Text,
	Dimensions,
	StyleSheet,
	TextInput,
	WebView,
} from "react-native";
import PersianCalendarPicker from "react-native-jalali-date-picker-rtl";
import moment from "jalali-moment";

export default class screen2 extends Component {
	constructor(props) {
		super(props);

		this.state = {
			date: new Date(),
			click: false,
			dataDay: "",
		};
		this.onDateChange = this.onDateChange.bind(this);
	}

	onDateChange(date) {
		this.setState({ date, click: true });
	}

	render() {
		const { date, prevDay, prevDays } = this.state;
		return (
			<View style={styles.container}>
				{/* <Text style={styles.selectedDate}>
					Date:
					{moment(
						this.state.date.toString(),
						"ddd MMM D YYYY"
					).format("jYYYY/jM/jD")}
				</Text>

				<PersianCalendarPicker
					selectedDate={date}
					onDateChange={this.onDateChange}
					screenWidth={Dimensions.get("window").width}
				/>
				<Text> {this.state.dataDay}</Text> */}
				<WebView
					source={{
						uri:
							"https://www.amarcht.ir/eghamat_amar_daily.aspx?email=safarnejad@yahoo.com&pass=9132765530",
					}}
					// style={{ marginTop: 20 }}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		// marginTop: 100,
	},
});

// import React from "react";
// import {
// 	DatePicker,
// 	DateTimePicker,
// 	DateRangePicker,
// 	DateTimeRangePicker,
// } from "react-advance-jalaali-datepicker";

// export default class screen2 extends React.component {
// 	change(unix, formatted) {
// 		console.log(unix); // returns timestamp of the selected value, for example.
// 		console.log(formatted); // returns the selected value in the format you've entered, forexample, "تاریخ: 1396/02/24 ساعت: 18:30".
// 	}
// 	DatePickerInput(props) {
// 		return <input className="popo" {...props} />;
// 	}
// 	render() {
// 		return (
// 			<div className="datePicker">
// 				<DatePicker
// 					inputComponent={this.DatePickerInput}
// 					placeholder="انتخاب تاریخ"
// 					format="jYYYY/jMM/jDD"
// 					onChange={this.change}
// 					id="datePicker"
// 					preSelected="1396/05/15"
// 				/>
// 				<DateTimePicker
// 					placeholder="انتخاب تاریخ و ساعت"
// 					format="تاریخ: jYYYY/jMM/jDD ساعت: HH:mm"
// 					id="dateTimePicker"
// 					onChange={this.changeTimeDate}
// 					preSelected="تاریخ: 1396/02/24 ساعت: 18:30"
// 				/>
// 				<DateRangePicker
// 					placeholderStart="تاریخ شروع"
// 					placeholderEnd="تاریخ پایان"
// 					format="jYYYY/jMM/jDD"
// 					onChangeStart={this.change}
// 					onChangeEnd={this.changeTimeDate}
// 					idStart="rangePickerStart"
// 					idEnd="rangePickerEnd"
// 				/>
// 				<DateTimeRangePicker
// 					placeholderStart="تاریخ و ساعت شروع"
// 					placeholderEnd="تاریخ و ساعت پایان"
// 					format="تاریخ: jYYYY/jMM/jDD ساعت: HH:mm"
// 					onChangeStart={this.change}
// 					onChangeEnd={this.changeTimeDate}
// 					idStart="rangePickerStart"
// 					idEnd="rangePickerEnd"
// 				/>
// 			</div>
// 		);
// 	}
// }
