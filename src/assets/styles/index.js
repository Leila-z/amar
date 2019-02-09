import EStyleSheet from "react-native-extended-stylesheet";

export const index = EStyleSheet.create({
	splashContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F2F2F2",
	},
	splashText: {
		color: "$colorPrimaryLight",
		fontSize: 18,
		marginBottom: 15,
		fontFamily: "$IS",
	},
});

export default (styles = {
	index,
});

export const form = EStyleSheet.create({
	StyleForm: {
		padding: 10,
	},
	item: {
		borderRadius: 15,
		marginBottom: 10,
		paddingRight: 10,
		paddingLeft: 10,
	},
	Input: {
		fontFamily: "$IS",
		fontSize: 14,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	submitButton: {
		borderRadius: 15,
		backgroundColor: "$colorAccent",
	},
	submitText: {
		fontSize: 16,
		fontFamily: "$IS",
		color: "$white",
	},
	error: {
		fontFamily: "$IS",
		fontSize: 12,
		color: "#ed2f2f",
		marginBottom: 10,
		textAlign: "right",
	},
	imageHeader: {
		height: 70,
		width: 70,
		justifyContent: "center",
		alignItems: "center",
	},
	container: {
		backgroundColor: "$colorPrimary",
		justifyContent: "center",
		alignItems: "center",
	},
});

export const drawer = EStyleSheet.create({
	container: {
		flex: 1,
	},
	imageHeader: {
		height: 180,
		width: "100%",
	},
	item: {
		justifyContent: "flex-end",
		padding: 10,
	},
	itemTitle: {
		fontFamily: "$IS",
	},
	itemIcon: {
		marginLeft: 10,
	},
});

export const homeStyle = EStyleSheet.create({
	header: {
		backgroundColor: "$colorPrimary",
	},
	textHeader: {
		fontFamily: "IRANSansMobile",
		color: "$colorPrimaryLight",
		fontSize: 14,
	},
	centerBody: {
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
	},
	leftBody: {
		justifyContent: "flex-start",
		alignItems: "flex-start",
		alignContent: "flex-start",
		textAlign: "left",
	},
});

export const productStyle = EStyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		height: 120,
		width: "90%",
		backgroundColor: "#fff",
		borderRadius: 15,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginLeft: 20,
		marginRight: 20,
	},
	text: {
		width: "50%",
		justifyContent: "center",
		fontFamily: "IRANSansMobile",
		textAlign: "center",
		color: "$colorPrimaryLight",
		fontSize: 15,
	},
	image: {
		height: 120,
		width: "50%",
		flex: 0,
		justifyContent: "center",
		borderRadius: 15,
	},
	image2: {
		height: 120,
		width: "100%",
		flex: 0,
		justifyContent: "center",
		borderRadius: 15,
		position: "absolute",
	},
});

export const mainMenuStyle = EStyleSheet.create({
	header: {
		backgroundColor: "$colorPrimary",
	},
	textHeader: {
		fontFamily: "IRANSansMobile",
		color: "$colorPrimaryLight",
		fontSize: 14,
	},
	body: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		height: 120,
		width: "90%",
		backgroundColor: "#fff",
		borderRadius: 15,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		height: 45,
		width: 45,
		flex: 0,
		justifyContent: "center",
	},
	text: {
		width: "50%",
		justifyContent: "center",
		fontFamily: "IRANSansMobile",
		textAlign: "center",
		color: "$colorPrimaryLight",
		fontSize: 15,
	},
});

export const statisticsStyle = EStyleSheet.create({
	header: {
		backgroundColor: "$colorPrimary",
	},
	textHeader: {
		fontFamily: "IRANSansMobile",
		color: "$colorPrimaryLight",
	},
	CardItem: {
		width: "50%",
		height: 60,
		flex: 0,
		alignItems: "center",
		flexDirection: "row",
	},
	CardItem2: {
		height: 60,
		flex: 0,
		alignItems: "center",
		flexDirection: "row",
	},
	card: {
		height: 70,
		flex: 0,
		flexDirection: "row",
		marginLeft: 20,
		marginRight: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	iconView: {
		height: 15,
		width: 15,
		flex: 0,
		justifyContent: "center",
		marginLeft: 5,
		marginRight: 5,
	},
	textView: {
		fontFamily: "$IS",
		fontSize: 13,
		justifyContent: "center",
	},
	icon: {
		height: 30,
		width: 30,
		flex: 0,
		justifyContent: "center",
	},
	viewLine: {
		width: 3,
		height: 35,
		backgroundColor: "$colorPrimaryLight",
		margin: 10,
	},
	iconSmall: {
		height: 20,
		width: 20,
		flex: 0,
		justifyContent: "center",
	},
});

export const EditItemStyle = EStyleSheet.create({
	containerView: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	icon: {
		height: 20,
		width: 20,
		flex: 0,
		justifyContent: "center",
	},
	item: {
		width: "75%",
		height: 50,
	},
	input: {
		fontFamily: "$IS",
		fontSize: 13,
		textAlign: "right",
	},
});
