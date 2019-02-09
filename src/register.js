import { Navigation } from "react-native-navigation";

export function registerScreens() {
	Navigation.registerComponent(
		"Home",
		() => require("./Screen/Home").default
	);
	Navigation.registerComponent(
		"Login",
		() => require("./Screen/Login").default
	);
	Navigation.registerComponent(
		"Profile",
		() => require("./Screen/Profile").default
	);
	Navigation.registerComponent(
		"Email",
		() => require("./Screen/Email").default
	);
	Navigation.registerComponent(
		"goToAuth",
		() => require("./component/bottonTab").default
	);
	Navigation.registerComponent(
		"Eghamat",
		() => require("./Screen/Eghamti/Eghamat").default
	);
	Navigation.registerComponent(
		"Screen2",
		() => require("./Screen/screen2").default
	);
	Navigation.registerComponent(
		"Tur",
		() => require("./Screen/Eghamti/sabtEghamat").default
	);
	Navigation.registerComponent(
		"showTur",
		() => require("./Screen/Eghamti/ShowListeghamat").default
	);
	Navigation.registerComponent(
		"Menu",
		() => require("./Screen/Menu").default
	);
	Navigation.registerComponent(
		"recorder",
		() => require("./Screen/Record/Record").default
	);
	Navigation.registerComponent(
		"report",
		() => require("./Screen/Report/Report").default
	);
	Navigation.registerComponent(
		"day",
		() => require("./Screen/Record/Day").default
	);
	Navigation.registerComponent(
		"new-record",
		() => require("./Screen/Record/new-record").default
	);
	Navigation.registerComponent(
		"Day-report",
		() => require("./Screen/Report/Day").default
	);
	Navigation.registerComponent(
		"reporting",
		() => require("./Screen/Report/reporting").default
	);
}
